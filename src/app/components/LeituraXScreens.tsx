import { ReactNode } from "react";
import { FileChartPie, UserRoundCheck, CalendarCheck2, LoaderCircle, RefreshCw, Check } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import { ConvenioBottomSheet } from "./ConvenioScreens";
import { OpcaoEstorno } from "./EstornoScreens";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

export type TipoLeituraX = "operador" | "dia";

// Identidade de cada Leitura X nas telas de processamento e de conclusão
// (nodes 2522:32835/32864 para o Operador e 2522:32921/32950 para o Total
// Dia).
const LEITURAS: Record<TipoLeituraX, { trilha: string; icone: ReactNode; tituloConcluida: string; relatorio: string }> = {
  operador: {
    trilha: "Leitura X - Operador",
    icone: <UserRoundCheck size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />,
    tituloConcluida: "Conferência de Caixa (Turno Zerado)",
    relatorio: "Leitura X Operador",
  },
  dia: {
    trilha: "Leitura X - Total Dia",
    icone: <CalendarCheck2 size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />,
    tituloConcluida: "Conferência de Caixa",
    relatorio: "Leitura X Total Dia",
  },
};

export const trilhaLeituraX = (tipo: TipoLeituraX) => LEITURAS[tipo].trilha;

function CabecalhoLeituraX({ tipo }: { tipo: TipoLeituraX }) {
  const l = LEITURAS[tipo];
  return (
    <>
      <PDVHeader trilha={[]} />
      <div className="flex items-center gap-[24px] p-[24px] shrink-0 drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        {l.icone}
        <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#4d4d4d] tracking-[3px] uppercase whitespace-nowrap">
          {l.trilha}
        </p>
      </div>
    </>
  );
}

// Node 2522:33065 — bottom sheet "Leitura X" sobre o PDV desfocado, com as
// opções [1] Leitura do Operador e [2] Leitura do Dia.
export function LeituraXOpcoesSheet({ tooltip }: { tooltip?: ReactNode }) {
  return (
    <ConvenioBottomSheet
      iconBg="#f2f9fe"
      icon={<FileChartPie size={32} className="text-[#0090eb]" strokeWidth={1.8} />}
      titulo="Leitura X"
      tooltip={tooltip}
      gapPx={32}
      minHeightPx={271}
    >
      <div className="flex flex-1 gap-[56px] items-center justify-center w-full">
        <OpcaoEstorno tecla="1" rotulo="Leitura do Operador" className="w-[366px] shrink-0" />
        <OpcaoEstorno tecla="2" rotulo="Leitura do Dia" className="w-[366px] shrink-0" />
      </div>
    </ConvenioBottomSheet>
  );
}

// Nodes 2522:32835 e 2522:32921 — processamento da Leitura X.
export function LeituraXProcessandoScreen({ tipo }: { tipo: TipoLeituraX }) {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <CabecalhoLeituraX tipo={tipo} />
      <div className="flex-1 min-h-0 flex flex-col gap-[45px] items-center justify-center p-[20px]">
        <div className="flex flex-col gap-[12px] items-center">
          <div className="flex flex-col gap-[32px] items-center">
            <div className="bg-[#f2f9fe] flex items-center p-[20px] rounded-[16px]">
              <LoaderCircle size={32} className="text-[#0090eb] animate-spin" strokeWidth={1.8} />
            </div>
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25.008px] leading-[1.2] text-black text-center w-[508px]" style={fontVariation}>
              Processando {LEITURAS[tipo].trilha}
            </p>
          </div>
          <p className="font-['Nunito_Sans',sans-serif] text-[18px] leading-[1.2] text-[#a3a3a3] text-center w-[532px]" style={fontVariation}>
            Filtrando transações da matrícula
          </p>
        </div>
        <div className="bg-white flex gap-[24px] items-center px-[40px] py-[20px] rounded-[8px]">
          <div className="bg-[#fef5f5] flex items-center p-[10px] rounded-full">
            <RefreshCw size={32} className="text-[#ed403d]" strokeWidth={1.8} />
          </div>
          <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2] text-[#535353] whitespace-nowrap" style={fontVariation}>
            Analisando memória fiscal
          </p>
        </div>
      </div>
    </div>
  );
}

// Nodes 2522:32864 e 2522:32950 — relatório gerado e impresso.
export function LeituraXConcluidaScreen({ tipo }: { tipo: TipoLeituraX }) {
  const l = LEITURAS[tipo];
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <CabecalhoLeituraX tipo={tipo} />
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-[20px]">
        <div className="flex flex-col gap-[12px] items-center">
          <div className="flex flex-col gap-[32px] items-center">
            <div className="bg-[#f2fbf9] flex items-center p-[20px] rounded-[16px]">
              <Check size={32} className="text-[#00ae8e]" strokeWidth={1.8} />
            </div>
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25.008px] leading-[1.2] text-black text-center w-[508px]" style={fontVariation}>
              {l.tituloConcluida}
            </p>
          </div>
          <div className="font-['Nunito_Sans',sans-serif] text-[18px] leading-[1.2] text-[#a3a3a3] text-center" style={fontVariation}>
            <p>Relatório de {l.relatorio} foi gerado e impresso com sucesso para o</p>
            <p className="font-bold">PDV 57* Loja 0573</p>
          </div>
        </div>
      </div>
      <div className="flex items-start px-[24px] py-[20px] shrink-0">
        <div className="bg-[rgba(255,255,255,0.1)] border border-[#d4d4d4] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[185px]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6 6 18M6 6l12 12" stroke="#ed403d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#ed403d]" style={fontVariation}>
            Volta
          </p>
        </div>
      </div>
    </div>
  );
}
