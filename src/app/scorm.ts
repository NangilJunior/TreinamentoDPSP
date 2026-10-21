import { secoesCategorias, type CategoriaSecaoData } from "./data/secoesCategorias";

// Versão SCORM 1.2 (build com `--mode scorm`). Há um pacote completo, com
// todos os tutoriais, e um pacote por categoria de secoesCategorias: o
// script de empacotamento injeta no index.html o escopo do pacote em
// window.__CATEGORIA_SCORM__ ("completo" ou o slug da categoria). Fora do
// modo SCORM, nada deste arquivo altera o comportamento do site.
export const IS_SCORM = import.meta.env.MODE === "scorm";

export const slugCategoria = (titulo: string) =>
  titulo
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

declare global {
  interface Window {
    __CATEGORIA_SCORM__?: string;
  }
}

// No dev (`npm run dev:scorm`), a categoria pode vir de ?categoria=<slug>;
// sem categoria, vale o pacote completo.
const slugCategoriaScorm = IS_SCORM
  ? window.__CATEGORIA_SCORM__ ?? new URLSearchParams(window.location.search).get("categoria") ?? undefined
  : undefined;

export const categoriaScorm: CategoriaSecaoData | undefined = slugCategoriaScorm
  ? secoesCategorias.find((secao) => slugCategoria(secao.titulo) === slugCategoriaScorm)
  : undefined;

// Categorias exibidas: no pacote de uma categoria, apenas ela.
export const secoesVisiveis: CategoriaSecaoData[] = categoriaScorm ? [categoriaScorm] : secoesCategorias;

const slugsDoPacote = secoesVisiveis.flatMap((secao) => secao.cards.flatMap((card) => (card.slug ? [card.slug] : [])));

export const pertenceAoPacote = (slug: string) => !IS_SCORM || slugsDoPacote.includes(slug);

// --- Comunicação com o LMS (API SCORM 1.2) ---------------------------------

interface ApiScorm12 {
  LMSInitialize(arg: ""): string;
  LMSFinish(arg: ""): string;
  LMSGetValue(elemento: string): string;
  LMSSetValue(elemento: string, valor: string): string;
  LMSCommit(arg: ""): string;
}

// A API fica em uma janela ancestral (frames do LMS) ou na janela que abriu
// o conteúdo (pop-up).
function encontrarApi(): ApiScorm12 | null {
  const procurar = (inicio: Window): ApiScorm12 | null => {
    let janela: Window = inicio;
    for (let i = 0; i < 10; i++) {
      try {
        const api = (janela as unknown as { API?: ApiScorm12 }).API;
        if (api) return api;
      } catch {
        // Janela de outra origem: não há como seguir subindo.
        return null;
      }
      if (janela.parent === janela) break;
      janela = janela.parent;
    }
    return null;
  };
  return procurar(window) ?? (window.opener ? procurar(window.opener) : null);
}

// suspend_data: tutoriais iniciados e concluídos e o último aberto, para
// "continuar de onde parou".
interface Progresso {
  iniciados: string[];
  concluidos: string[];
  ultimo?: string;
}

const api = IS_SCORM ? encontrarApi() : null;
let progresso: Progresso = { iniciados: [], concluidos: [] };
let finalizado = false;
// Um pacote já concluído no LMS nunca volta a "incomplete", mesmo que o
// suspend_data tenha sido apagado.
let concluidoNoLms = false;

function salvar() {
  if (!api) return;
  const completo = concluidoNoLms || (slugsDoPacote.length > 0 && slugsDoPacote.every((s) => progresso.concluidos.includes(s)));
  api.LMSSetValue("cmi.suspend_data", JSON.stringify(progresso));
  api.LMSSetValue("cmi.core.lesson_status", completo ? "completed" : "incomplete");
  // "suspend" mantém o suspend_data na próxima abertura enquanto houver
  // tutoriais pendentes.
  api.LMSSetValue("cmi.core.exit", completo ? "" : "suspend");
  if (progresso.ultimo) api.LMSSetValue("cmi.core.lesson_location", progresso.ultimo);
  // Score = percentual de tutoriais concluídos (0 a 100), para o andamento
  // aparecer nos relatórios do LMS que não exibem os objetivos.
  const concluidosNoPacote = slugsDoPacote.filter((s) => progresso.concluidos.includes(s)).length;
  const percentual = completo ? 100 : Math.round((concluidosNoPacote / Math.max(slugsDoPacote.length, 1)) * 100);
  api.LMSSetValue("cmi.core.score.min", "0");
  api.LMSSetValue("cmi.core.score.max", "100");
  api.LMSSetValue("cmi.core.score.raw", String(percentual));
  // Um objetivo por tutorial do pacote, sempre no mesmo índice (a ordem de
  // secoesCategorias), para o LMS mostrar o andamento de cada um.
  slugsDoPacote.forEach((slug, i) => {
    const status = progresso.concluidos.includes(slug) ? "completed" : progresso.iniciados.includes(slug) ? "incomplete" : "not attempted";
    api.LMSSetValue(`cmi.objectives.${i}.id`, slug);
    api.LMSSetValue(`cmi.objectives.${i}.status`, status);
  });
  api.LMSCommit("");
}

function finalizar() {
  if (!api || finalizado) return;
  finalizado = true;
  salvar();
  api.LMSFinish("");
}

if (api && api.LMSInitialize("") === "true") {
  try {
    const salvo = JSON.parse(api.LMSGetValue("cmi.suspend_data") || "{}") as Partial<Progresso>;
    const lista = (valor: unknown) => (Array.isArray(valor) ? valor.filter((s): s is string => typeof s === "string" && pertenceAoPacote(s)) : []);
    progresso = {
      iniciados: lista(salvo.iniciados),
      concluidos: lista(salvo.concluidos),
      ultimo: salvo.ultimo && pertenceAoPacote(salvo.ultimo) ? salvo.ultimo : undefined,
    };
  } catch {
    // suspend_data vazio ou inválido: começa do zero.
  }
  concluidoNoLms = ["completed", "passed"].includes(api.LMSGetValue("cmi.core.lesson_status"));
  // Grava o status e os objetivos já na abertura, inclusive na primeira.
  salvar();
  window.addEventListener("pagehide", finalizar);
  window.addEventListener("beforeunload", finalizar);
}

// Tutorial por onde o pacote deve abrir: o último visitado, se houver.
export const tutorialParaRetomar = () => progresso.ultimo;

export function registrarTutorialAberto(slug: string) {
  if (!IS_SCORM || !pertenceAoPacote(slug) || (progresso.ultimo === slug && progresso.iniciados.includes(slug))) return;
  progresso = {
    ...progresso,
    iniciados: progresso.iniciados.includes(slug) ? progresso.iniciados : [...progresso.iniciados, slug],
    ultimo: slug,
  };
  salvar();
}

export function registrarTutorialConcluido(slug: string) {
  if (!IS_SCORM || !pertenceAoPacote(slug) || progresso.concluidos.includes(slug)) return;
  progresso = { ...progresso, concluidos: [...progresso.concluidos, slug] };
  salvar();
}
