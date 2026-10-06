import { ReactNode } from "react";
import { TicketCheck, UserRoundCheck } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import { RodapeVoltaEntra } from "./ConsultaPrecoScreens";
import { OpcaoEstorno } from "./EstornoScreens";
import imgCarregando from "../../imports/Pbm/carregando.svg";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// CPF (o mesmo CPF_EXEMPLO dos demais fluxos) e número da autorização
// digitados pelo operador no exemplo do PBM.
export const AUTORIZACAO_PBM_EXEMPLO = "111222333";

// Programas de PBM disponíveis (node 5181:68109). O exemplo segue pela
// opção [1] Epharma.
const PROGRAMAS_PBM = ["Epharma", "Portal da Drogaria", "Vidalink", "Farmácia Popular", "Orizon", "Pré-venda/Fidelize", "Funcional Card", "Iqvia"];

// Cabeçalho comum às telas do PBM: header do PDV e a trilha com o ícone
// ticket-check.
function PbmCabecalho({ trilha }: { trilha: string }) {
  return (
    <>
      <PDVHeader trilha={[]} />
      <div className="flex items-center gap-[24px] p-[24px] shrink-0 drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        <TicketCheck size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />
        <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#4d4d4d] tracking-[3px] uppercase whitespace-nowrap">
          {trilha}
        </p>
      </div>
    </>
  );
}

// Campo de digitação das telas do PBM: Default até o primeiro dígito, e só
// então passa a Active. A tooltip fica abaixo do campo (seta para cima).
function CampoPbm({ rotulo, placeholder, valor, tooltip }: { rotulo: string; placeholder: string; valor: string; tooltip?: ReactNode }) {
  return (
    <div className="flex flex-col gap-[18px] items-start w-full">
      <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[1.2] text-[#404040] whitespace-nowrap" style={fontVariation}>{rotulo}</p>
      <div className="relative w-full">
        {tooltip && (
          <div className="fade-in-delay absolute top-full left-1/2 -translate-x-1/2 mt-[8px] pointer-events-none z-[45]">
            {tooltip}
          </div>
        )}
        <div
          className={`bg-white border flex h-[72px] items-center px-[16px] rounded-[8px] w-full transition-all ${
            valor ? "border-[#a3a3a3] shadow-[0px_0px_0px_3px_#d4d4d4]" : "border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
          }`}
        >
          <p className="font-['Nunito_Sans',sans-serif] font-medium text-[20px] leading-[1.2] whitespace-nowrap text-[#0a0a0a]" style={fontVariation}>
            {valor ? valor : <>{"| "}<span className="text-[#737373]">{placeholder}</span></>}
          </p>
        </div>
      </div>
    </div>
  );
}

// Passo 138 (node 5181:68109) — seleção do programa de PBM.
export function PbmProgramasScreen() {
  const linhas = [0, 2, 4, 6].map((i) => PROGRAMAS_PBM.slice(i, i + 2));
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PbmCabecalho trilha="PBM" />
      <div className="flex flex-col p-[20px]">
        {linhas.map((linha, l) => (
          <div key={l} className="flex gap-[18px] items-center justify-center px-[180px] py-[12px]">
            {linha.map((rotulo, c) => (
              <OpcaoEstorno key={rotulo} tecla={String(l * 2 + c + 1)} rotulo={rotulo} className="flex-1 min-w-0" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Passo 139 (node 5181:68242) — CPF ou número da carteirinha do cliente,
// exigido pela Epharma antes da validação.
export function PbmCpfScreen({ cpfFormatado, cpfCompleto, tooltip }: { cpfFormatado: string; cpfCompleto: boolean; tooltip?: ReactNode }) {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PbmCabecalho trilha="PBM / Epharma" />
      <div className="flex flex-col items-start w-full shrink-0">
        <div className="flex gap-[10px] items-center px-[129px] py-[4px] w-full">
          <UserRoundCheck size={24} className="text-[#00ae8e] shrink-0" strokeWidth={1.8} />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25.008px] leading-[1.2] text-[#7e7e7e] whitespace-nowrap" style={fontVariation}>
            Dado complementar
          </p>
        </div>
        <div className="flex items-center px-[164px] w-full">
          <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2] text-[#7e7e7e] whitespace-nowrap" style={fontVariation}>
            Esta PBM exige o número da carteirinha antes da validação.
          </p>
        </div>
      </div>
      <div className="flex-1 min-h-0 flex flex-col px-[180px] py-[20px]">
        <div className="py-[24px] w-full">
          <CampoPbm rotulo="CPF ou Número da carteirinha" placeholder="Digite o CPF ou número da carteirinha" valor={cpfFormatado} tooltip={tooltip} />
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={cpfCompleto} />
    </div>
  );
}

// Passo 140 (node 5181:68300) — número da autorização. A trilha do Figma
// cita o Portal da Drogaria (cópia de outra tela); aqui segue a Epharma,
// programa escolhido no exemplo.
export function PbmAutorizacaoScreen({ autorizacao, tooltip }: { autorizacao: string; tooltip?: ReactNode }) {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PbmCabecalho trilha="PBM / Epharma / Número da autorização" />
      <div className="flex-1 min-h-0 flex flex-col px-[180px] py-[20px]">
        <div className="py-[24px] w-full">
          <CampoPbm rotulo="Número da autorização" placeholder="Digite o número da autorização" valor={autorizacao} tooltip={tooltip} />
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={autorizacao === AUTORIZACAO_PBM_EXEMPLO} />
    </div>
  );
}

// Passo 141 (node 5181:68167) — validação da pré-autorização junto ao
// programa, com o indicador de carregamento girando.
export function PbmValidandoScreen({ tooltip }: { tooltip?: ReactNode }) {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PbmCabecalho trilha="PBM / Epharma / Número da autorização" />
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center px-[180px] py-[20px]">
        <div className="relative flex flex-col gap-[32px] items-center justify-center w-full">
          <img alt="" className="size-[74px] animate-spin [animation-duration:1.1s]" src={imgCarregando} />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[31.248px] leading-[1.2] text-[#333] text-center w-full" style={fontVariation}>
            Validando pré-autorização...
          </p>
          {tooltip && (
            <div className="fade-in-delay absolute top-full left-1/2 -translate-x-1/2 mt-[24px] pointer-events-none z-[45]">
              {tooltip}
            </div>
          )}
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={false} semEntra />
    </div>
  );
}
