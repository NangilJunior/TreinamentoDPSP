import { Check, LogIn, X } from "lucide-react";
import imgEstrelaPreenchida from "../../imports/Encantometro/estrela-preenchida.svg";
import imgEstrelaVazia from "../../imports/Encantometro/estrela-vazia.svg";
import imgPath1 from "../../imports/Encantometro/logo-path1.svg";
import imgPath2 from "../../imports/Encantometro/logo-path2.svg";
import imgPath3 from "../../imports/Encantometro/logo-path3.svg";
import imgPath4 from "../../imports/Encantometro/logo-path4.svg";
import imgPath5 from "../../imports/Encantometro/logo-path5.svg";
import imgPath6 from "../../imports/Encantometro/logo-path6.svg";
import imgPath7 from "../../imports/Encantometro/logo-path7.svg";
import imgPath8 from "../../imports/Encantometro/logo-path8.svg";
import imgPath9 from "../../imports/Encantometro/logo-path9.svg";
import imgG10Mask from "../../imports/Encantometro/logo-g10-mask.svg";
import imgG11 from "../../imports/Encantometro/logo-g11.svg";
import imgPath12 from "../../imports/Encantometro/logo-path12.svg";
import imgPath13 from "../../imports/Encantometro/logo-path13.svg";
import imgPath14 from "../../imports/Encantometro/logo-path14.svg";
import imgPath15 from "../../imports/Encantometro/logo-path15.svg";
import imgPath16 from "../../imports/Encantometro/logo-path16.svg";
import imgPath17 from "../../imports/Encantometro/logo-path17.svg";
import imgPath18 from "../../imports/Encantometro/logo-path18.svg";
import imgPath19 from "../../imports/Encantometro/logo-path19.svg";
import imgPath20 from "../../imports/Encantometro/logo-path20.svg";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// Opções exibidas quando a nota indica insatisfação ("O que podemos
// melhorar?"). No tutorial, o cliente marca a 1ª e a 3ª.
export const MOTIVOS_ENCANTOMETRO = ["Agilidade", "Atendimento", "Acolhimento", "Tempo de espera", "Plataforma", "Clareza das Orientações"];

// Fases da animação do Encantômetro (telas operadas pelo cliente). Cada fase
// é um "quadro" da simulação, avançado automaticamente pelo tutorial.
export type FaseEncantometro =
  | "inicial" // nenhuma estrela marcada, Avaliar desabilitado
  | "estrela" // toque na 1ª estrela, que é preenchida; Avaliar habilitado
  | "avaliar-estrela" // toque em Avaliar
  | "motivos" // "O que podemos melhorar?" sem seleção
  | "motivo-1" // toque em Agilidade
  | "motivo-2" // toque em Acolhimento
  | "avaliar-motivos" // toque em Avaliar
  | "obrigado"; // conclusão

const ESTILOS_ANIMACAO = `
  @keyframes encantometro-toque {
    0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0.55; }
    100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
  }
  @keyframes encantometro-estrela-pop {
    0% { transform: scale(1); }
    30% { transform: scale(0.8); }
    65% { transform: scale(1.22); }
    100% { transform: scale(1); }
  }
  @keyframes encantometro-pressionar {
    0% { transform: scale(1); filter: brightness(1); }
    40% { transform: scale(0.96); filter: brightness(0.88); }
    100% { transform: scale(1); filter: brightness(1); }
  }
  @keyframes encantometro-check-pop {
    0% { transform: scale(0.4); opacity: 0; }
    70% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
`;

// Onda circular que indica o toque do cliente na tela.
function Toque({ tamanho, cor }: { tamanho: number; cor: string }) {
  return (
    <span
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 rounded-full pointer-events-none animate-[encantometro-toque_650ms_ease-out_forwards]"
      style={{ width: tamanho, height: tamanho, background: cor }}
    />
  );
}

function LogoDrogariaSaoPaulo() {
  return (
    <div className="h-[38px] overflow-clip relative shrink-0 w-[212px]">
      <div className="absolute contents inset-[-735.38%_-14.07%_-807.28%_-407.42%]">
        <div className="absolute inset-[0_60.55%_73.38%_35.47%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath1} />
        </div>
        <div className="absolute inset-[8.06%_57.83%_73.38%_40.31%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath2} />
        </div>
        <div className="absolute inset-[8.07%_54.06%_73.09%_42.51%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath3} />
        </div>
        <div className="absolute inset-[8.05%_50.15%_65.69%_46.52%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath4} />
        </div>
        <div className="absolute inset-[8.07%_46.06%_73.09%_50.59%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath5} />
        </div>
        <div className="absolute inset-[8.06%_43.24%_73.38%_54.89%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath6} />
        </div>
        <div className="absolute inset-[0.06%_41.69%_73.38%_57.3%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath7} />
        </div>
        <div className="absolute inset-[8.07%_37.65%_73.09%_59%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath8} />
        </div>
        <div className="absolute inset-[0_88.18%_0.83%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath9} />
        </div>
        <div className="absolute contents inset-[-735.38%_-14.07%_-807.28%_-407.42%]">
          <div
            className="absolute inset-[0_70.45%_0.84%_17.73%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2181.007px_-676.548px] mask-size-[2675.25px_1511.247px]"
            style={{ maskImage: `url("${imgG10Mask}")` }}
          >
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgG11} />
          </div>
        </div>
        <div className="absolute inset-[37.59%_56.86%_0_35.17%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath12} />
        </div>
        <div className="absolute inset-[56.52%_48.13%_0.05%_43.96%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath13} />
        </div>
        <div className="absolute inset-[56.51%_39.18%_0_52.75%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath14} />
        </div>
        <div className="absolute inset-[38.38%_29.8%_0.84%_62.2%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath15} />
        </div>
        <div className="absolute inset-[56.52%_21.54%_0.05%_70.56%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath16} />
        </div>
        <div className="absolute inset-[57.31%_12.92%_0.05%_79.84%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath17} />
        </div>
        <div className="absolute inset-[36.17%_9.09%_0.84%_88.52%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath18} />
        </div>
        <div className="absolute inset-[56.51%_0_0_91.93%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath19} />
        </div>
        <div className="absolute inset-[41.6%_48.13%_49.46%_46.86%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath20} />
        </div>
      </div>
    </div>
  );
}

// Faixa colorida + logo + selo de cliente identificado (topo das telas).
function CabecalhoCliente() {
  return (
    <div className="absolute flex flex-col items-start left-0 top-0 w-full">
      <div className="flex h-[8px] items-center w-full">
        <div className="bg-[#ef3346] flex-[1_0_0] h-full min-w-px" />
        <div className="bg-[#61bae8] h-full shrink-0 w-[27.44%]" />
      </div>
      <div className="flex flex-col items-start p-[48px] w-full">
        <div className="flex items-center justify-between w-full">
          <LogoDrogariaSaoPaulo />
          <div className="bg-white border border-[#d4d4d4] border-solid flex gap-[10px] items-center p-[6px] rounded-[1000px] shrink-0 w-[188px]">
            <div className="bg-[#ef3346] flex items-center justify-center p-[10px] rounded-[1000px] shrink-0 size-[36px]">
              <Check size={22} className="text-white shrink-0" strokeWidth={2} />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-['Nunito_Sans',sans-serif] font-medium leading-[1.2] text-[#757575] text-[8.8px] whitespace-nowrap" style={fontVariation}>
                CLIENTE IDENTIFICADO
              </p>
              <p className="font-['Nunito_Sans',sans-serif] font-bold leading-[1.2] text-[#404040] text-[14px] whitespace-nowrap" style={fontVariation}>
                •••.444.777-••
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BotaoNaoAvaliar() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] border border-[#d4d4d4] border-solid flex gap-[8px] h-[72px] items-center justify-center min-h-[40px] px-[24px] py-[10px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[185px]">
      <X size={16} className="text-[#ed403d] shrink-0" strokeWidth={1.5} />
      <p className="font-['Nunito_Sans',sans-serif] font-bold leading-[1.2] text-[#ed403d] text-[20px] text-center whitespace-nowrap" style={fontVariation}>
        Não avaliar
      </p>
    </div>
  );
}

function BotaoAvaliar({ ativo, pressionado }: { ativo: boolean; pressionado: boolean }) {
  return (
    <div
      className={`relative overflow-hidden flex gap-[8px] h-[72px] items-center justify-center min-h-[40px] px-[24px] py-[10px] rounded-[8px] shrink-0 w-[185px] transition-colors duration-300 ${
        ativo ? "bg-[#ef3346]" : "bg-[#cfcfcf] opacity-50"
      } ${pressionado ? "animate-[encantometro-pressionar_450ms_ease-out]" : ""}`}
    >
      {pressionado && <Toque tamanho={200} cor="rgba(255,255,255,0.45)" />}
      <LogIn size={16} className={`shrink-0 ${ativo ? "text-white" : "text-[#3b3b3b]"}`} strokeWidth={1.5} />
      <p className={`font-['Nunito_Sans',sans-serif] font-bold leading-[1.2] text-[20px] text-center whitespace-nowrap ${ativo ? "text-white" : "text-[#3b3b3b]"}`} style={fontVariation}>
        Avaliar
      </p>
    </div>
  );
}

function Estrela({ preenchida, tocada }: { preenchida: boolean; tocada: boolean }) {
  return (
    <div className="relative shrink-0 size-[56px]">
      {tocada && <Toque tamanho={84} cor="rgba(255,138,0,0.35)" />}
      <div className={`absolute inset-[5.73%_7.72%_13.49%_7.72%] ${tocada ? "animate-[encantometro-estrela-pop_550ms_ease-out]" : ""}`}>
        <img alt="" className="block max-w-none size-full" src={preenchida ? imgEstrelaPreenchida : imgEstrelaVazia} />
      </div>
    </div>
  );
}

function TagMotivo({ rotulo, selecionada, tocada }: { rotulo: string; selecionada: boolean; tocada: boolean }) {
  return (
    <div
      className={`relative overflow-hidden border border-[#20516f] border-solid flex h-[40px] items-center justify-center px-[16px] rounded-[1000px] shrink-0 transition-colors duration-300 ${
        selecionada ? "bg-[#20516f]" : "bg-white"
      }`}
    >
      {tocada && <Toque tamanho={180} cor="rgba(97,186,232,0.45)" />}
      <p className={`relative font-['Inter',sans-serif] font-medium leading-[normal] text-[14px] whitespace-nowrap transition-colors duration-300 ${selecionada ? "text-white" : "text-[#20516f]"}`}>
        {rotulo}
      </p>
    </div>
  );
}

function TituloAvaliacao({ pergunta }: { pergunta: string }) {
  return (
    <div className="flex flex-col gap-[8px] items-start text-[#292929] w-full">
      <p className="font-['Inter',sans-serif] font-normal leading-[1.5] text-[14px] w-full">Avalie a sua experiência</p>
      <p className="font-['Inter',sans-serif] font-bold leading-[1.33] text-[24px] tracking-[-0.24px] w-full">{pergunta}</p>
    </div>
  );
}

// Tela do Encantômetro exibida ao cliente. A fase define qual das telas do
// Figma está visível e qual toque está sendo animado.
export function EncantometroScreen({ fase }: { fase: FaseEncantometro }) {
  const telaEstrelas = fase === "inicial" || fase === "estrela" || fase === "avaliar-estrela";
  const telaMotivos = fase === "motivos" || fase === "motivo-1" || fase === "motivo-2" || fase === "avaliar-motivos";
  const motivosSelecionados = fase === "motivo-1" ? [0] : fase === "motivo-2" || fase === "avaliar-motivos" ? [0, 2] : [];
  const motivoTocado = fase === "motivo-1" ? 0 : fase === "motivo-2" ? 2 : -1;

  return (
    <div className="bg-white relative size-full">
      <style>{ESTILOS_ANIMACAO}</style>
      <div className="absolute inset-0 bg-[#fbfaf8]" />
      <CabecalhoCliente />

      {telaEstrelas && (
        <div className="absolute bg-white bottom-0 left-0 right-0 flex flex-col gap-[18px] items-start pt-[32px]">
          <div className="flex flex-col gap-[18px] items-start px-[44px] w-full">
            <TituloAvaliacao pergunta="O que achou do seu atendimento?" />
            <div className="flex gap-[12px] items-center justify-center w-full">
              {[0, 1, 2, 3, 4].map((i) => (
                <Estrela key={i} preenchida={i === 0 && fase !== "inicial"} tocada={i === 0 && fase === "estrela"} />
              ))}
            </div>
          </div>
          <div className="flex items-start justify-between px-[24px] py-[20px] w-full">
            <BotaoNaoAvaliar />
            <BotaoAvaliar key={fase} ativo={fase !== "inicial"} pressionado={fase === "avaliar-estrela"} />
          </div>
        </div>
      )}

      {telaMotivos && (
        <div className="absolute bg-white bottom-0 left-0 right-0 flex flex-col gap-[18px] items-start pt-[32px]">
          <div className="flex flex-col gap-[18px] items-start px-[44px] w-full">
            <TituloAvaliacao pergunta="O que podemos melhorar?" />
            <div className="flex gap-[16px] items-start justify-center py-[10px] w-full">
              {MOTIVOS_ENCANTOMETRO.map((rotulo, i) => (
                <TagMotivo key={rotulo} rotulo={rotulo} selecionada={motivosSelecionados.includes(i)} tocada={motivoTocado === i} />
              ))}
            </div>
          </div>
          <div className="flex items-start justify-between px-[24px] py-[20px] w-full">
            <BotaoNaoAvaliar />
            <BotaoAvaliar key={fase} ativo={motivosSelecionados.length > 0} pressionado={fase === "avaliar-motivos"} />
          </div>
        </div>
      )}

      {fase === "obrigado" && (
        <div className="absolute bg-white bottom-0 left-0 right-0 flex flex-col items-start py-[76px]">
          <div className="flex flex-col gap-[18px] items-start px-[44px] w-full">
            <div className="flex items-center justify-center w-full">
              <div className="bg-[#009277] flex items-center justify-center p-[10px] rounded-[1000px] shrink-0 size-[64px] animate-[encantometro-check-pop_400ms_ease-out]">
                <Check size={48} className="text-white shrink-0" strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex flex-col items-start leading-[1.2] text-center w-full">
              <p className="font-['Nunito_Sans',sans-serif] font-black text-[#404040] text-[41px] w-full" style={fontVariation}>
                Obrigado pela sua avaliação!
              </p>
              <p className="font-['Nunito_Sans',sans-serif] font-medium text-[#7e7e7e] text-[15px] w-full" style={fontVariation}>
                Sua opinião é muito importante para continuarmos melhorando.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
