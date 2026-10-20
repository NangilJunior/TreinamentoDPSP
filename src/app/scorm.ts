import { secoesCategorias, type CategoriaSecaoData } from "./data/secoesCategorias";

// Versão SCORM 1.2 (build com `--mode scorm`). Cada pacote corresponde a uma
// categoria de secoesCategorias: o script de empacotamento injeta no
// index.html a categoria do pacote em window.__CATEGORIA_SCORM__. Fora do
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

// No dev (`npm run dev:scorm`), a categoria pode vir de ?categoria=<slug>.
const slugCategoriaScorm = IS_SCORM
  ? window.__CATEGORIA_SCORM__ ?? new URLSearchParams(window.location.search).get("categoria") ?? undefined
  : undefined;

export const categoriaScorm: CategoriaSecaoData | undefined = slugCategoriaScorm
  ? secoesCategorias.find((secao) => slugCategoria(secao.titulo) === slugCategoriaScorm)
  : undefined;

// Categorias exibidas: no pacote SCORM, apenas a categoria do pacote.
export const secoesVisiveis: CategoriaSecaoData[] = categoriaScorm ? [categoriaScorm] : secoesCategorias;

const slugsDaCategoria = categoriaScorm?.cards.flatMap((card) => (card.slug ? [card.slug] : [])) ?? [];

export const pertenceAoPacote = (slug: string) => !IS_SCORM || slugsDaCategoria.includes(slug);

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

// suspend_data: tutoriais concluídos e o último aberto, para "continuar de
// onde parou".
interface Progresso {
  concluidos: string[];
  ultimo?: string;
}

const api = IS_SCORM ? encontrarApi() : null;
let progresso: Progresso = { concluidos: [] };
let finalizado = false;

function salvar() {
  if (!api) return;
  const completo = slugsDaCategoria.length > 0 && slugsDaCategoria.every((s) => progresso.concluidos.includes(s));
  api.LMSSetValue("cmi.suspend_data", JSON.stringify(progresso));
  api.LMSSetValue("cmi.core.lesson_status", completo ? "completed" : "incomplete");
  // "suspend" mantém o suspend_data na próxima abertura enquanto houver
  // tutoriais pendentes.
  api.LMSSetValue("cmi.core.exit", completo ? "" : "suspend");
  if (progresso.ultimo) api.LMSSetValue("cmi.core.lesson_location", progresso.ultimo);
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
    progresso = {
      concluidos: Array.isArray(salvo.concluidos) ? salvo.concluidos.filter(pertenceAoPacote) : [],
      ultimo: salvo.ultimo && pertenceAoPacote(salvo.ultimo) ? salvo.ultimo : undefined,
    };
  } catch {
    // suspend_data vazio ou inválido: começa do zero.
  }
  if (api.LMSGetValue("cmi.core.lesson_status") === "not attempted") {
    api.LMSSetValue("cmi.core.lesson_status", "incomplete");
    api.LMSCommit("");
  }
  window.addEventListener("pagehide", finalizar);
  window.addEventListener("beforeunload", finalizar);
}

// Tutorial por onde o pacote deve abrir: o último visitado, se houver.
export const tutorialParaRetomar = () => progresso.ultimo;

export function registrarTutorialAberto(slug: string) {
  if (!IS_SCORM || !pertenceAoPacote(slug) || progresso.ultimo === slug) return;
  progresso = { ...progresso, ultimo: slug };
  salvar();
}

export function registrarTutorialConcluido(slug: string) {
  if (!IS_SCORM || !pertenceAoPacote(slug) || progresso.concluidos.includes(slug)) return;
  progresso = { ...progresso, concluidos: [...progresso.concluidos, slug] };
  salvar();
}
