import { ReactNode, useEffect, useState } from "react";
import { CirclePower, LoaderCircle, RefreshCw, Check, LaptopMinimal, CalendarClock, Lock } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import { PainelFoto, RodapeStatus } from "./AberturaCaixaLoginScreen";
import imgMarca from "../../imports/AberturaCaixaLogin/marca-drogarias-pacheco.svg";
import imgIconeEntrar from "../../imports/AberturaCaixaLogin/icone-entrar.svg";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

const STATUS_FECHADO_PARCIAL = { texto: "Caixa Fechado Parcial", cor: "#E1A20F" };

// Cabeçalho das telas do Fechamento Z: header do PDV com o caixa fechado
// parcialmente e a trilha com o ícone circle-power.
function CabecalhoFechamentoZ() {
  return (
    <>
      <PDVHeader trilha={[]} status={STATUS_FECHADO_PARCIAL} />
      <div className="flex items-center gap-[24px] p-[24px] shrink-0 drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        <CirclePower size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />
        <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#4d4d4d] tracking-[3px] uppercase whitespace-nowrap">
          Fechamento Z
        </p>
      </div>
    </>
  );
}

// Etapa de processamento com o ícone girando (refresh) até ser concluída,
// quando vira um check. Usada também na Leitura X (LeituraXScreens).
export function EtapaProcessamento({ concluida, rotulo }: { concluida: boolean; rotulo: string }) {
  return (
    <div className="flex gap-[24px] items-center">
      <style>{`@keyframes check-pop { 0% { transform: scale(0.4); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }`}</style>
      <div className={`flex items-center p-[10px] rounded-full transition-colors ${concluida ? "bg-[#f2fbf9]" : "bg-[#fef5f5]"}`}>
        {concluida ? (
          <Check size={32} className="text-[#00ae8e] animate-[check-pop_250ms_ease-out]" strokeWidth={1.8} />
        ) : (
          <RefreshCw size={32} className="text-[#ed403d] animate-spin" strokeWidth={1.8} />
        )}
      </div>
      <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2] text-[#535353] whitespace-nowrap" style={fontVariation}>
        {rotulo}
      </p>
    </div>
  );
}

// Node 2317:44364 — processamento do Fechamento Z. O loader fica girando o
// tempo todo; as etapas giram e recebem o check em sequência ("Consolidando
// as vendas" e depois "Gerando Relatório Fiscal"), e a tela avança sozinha
// logo após a última etapa.
export function FechamentoZProcessandoScreen({ onConcluido }: { onConcluido: () => void }) {
  const [etapasConcluidas, setEtapasConcluidas] = useState(0);
  useEffect(() => {
    const timers = [
      setTimeout(() => setEtapasConcluidas(1), 2000),
      setTimeout(() => setEtapasConcluidas(2), 4000),
      setTimeout(onConcluido, 5500),
    ];
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <CabecalhoFechamentoZ />
      <div className="flex-1 min-h-0 flex flex-col gap-[45px] items-center justify-center p-[20px]">
        <div className="flex flex-col gap-[32px] items-center">
          <div className="bg-[#f2f9fe] flex items-center p-[20px] rounded-[16px]">
            <LoaderCircle size={32} className="text-[#0090eb] animate-spin" strokeWidth={1.8} />
          </div>
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25.008px] leading-[1.2] text-black text-center w-[508px]" style={fontVariation}>
            Processando o Fechamento Z
          </p>
        </div>
        <div className="bg-white flex flex-col gap-[24px] items-start px-[40px] py-[20px] rounded-[8px]">
          <EtapaProcessamento concluida={etapasConcluidas >= 1} rotulo="Consolidando as vendas" />
          <EtapaProcessamento concluida={etapasConcluidas >= 2} rotulo="Gerando Relatório Fiscal" />
        </div>
      </div>
    </div>
  );
}

function DetalheFechamento({ icone, rotulo, valor, centralizado }: { icone: ReactNode; rotulo: string; valor: string; centralizado?: boolean }) {
  return (
    <div className={`flex flex-1 min-w-0 gap-[20px] h-[70px] items-center py-[10px] ${centralizado ? "justify-center" : ""}`}>
      <div className="shrink-0">{icone}</div>
      <div className="flex flex-col items-start whitespace-nowrap">
        <p className="font-['Geist',sans-serif] font-medium text-[12px] leading-[20px] text-[#707070] tracking-[3px]">{rotulo}</p>
        <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[16px] leading-[1.2] text-[#707070]" style={fontVariation}>{valor}</p>
      </div>
    </div>
  );
}

// Node 2317:44398 — Fechamento Z concluído. O título do Figma ("Fechamento
// fiscal realizada") foi ajustado para a concordância correta. A tooltip
// opcional fica acima do ícone de check, apontando para ele.
export function FechamentoZRealizadoScreen({ tooltip }: { tooltip?: ReactNode }) {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <CabecalhoFechamentoZ />
      <div className="flex-1 min-h-0 flex flex-col gap-[32px] items-center justify-center p-[20px]">
        <div className="flex flex-col gap-[10px] items-center justify-center px-[129px] py-[14px] w-full">
          <div className="relative bg-[#e7f4e2] flex items-center justify-center p-[5px] rounded-full size-[64px]">
            <Check size={48} className="text-[#048c0d]" strokeWidth={1.8} />
            {tooltip && (
              <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[32px] pointer-events-none z-[45]">
                {tooltip}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[8px] items-center whitespace-nowrap">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[31.248px] leading-[1.2] text-[#333]" style={fontVariation}>Fechamento fiscal realizado</p>
            <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#747474] tracking-[3px]">OPERAÇÃO REALIZADA COM SUCESSO</p>
          </div>
        </div>
        <div className="flex flex-col items-center px-[120px] w-full">
          <div className="bg-white border border-[#dbdbdb] flex gap-[64px] items-start justify-center px-[64px] py-[10px] rounded-[8px] w-full">
            <DetalheFechamento icone={<LaptopMinimal size={24} className="text-[#707070]" strokeWidth={1.8} />} rotulo="TERMINAL" valor="PDV 57* Loja 0573" />
            <DetalheFechamento icone={<CalendarClock size={24} className="text-[#707070]" strokeWidth={1.8} />} rotulo="DATA E HORA DO REGISTRO" valor="24/05/2024 - 15:34:12" centralizado />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-end px-[24px] py-[20px] shrink-0">
        <div className="bg-[#2258e6] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] w-[185px]">
          <img alt="" className="size-[16px]" src={imgIconeEntrar} />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={fontVariation}>Entra</p>
        </div>
      </div>
    </div>
  );
}

// Node 2373:46920 — caixa fechado. Usa a mesma foto e o mesmo rodapé de
// status da tela de login da Abertura de Caixa.
export function CaixaFechadoScreen() {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex">
      <PainelFoto />
      <div className="flex flex-col flex-1 min-w-px h-full">
        <div className="bg-white flex gap-[12px] items-center justify-center px-[20px] py-[32px] w-full shrink-0">
          <img alt="Drogarias Pacheco" className="h-[40px] w-[160px] object-contain" src={imgMarca} />
        </div>
        <div className="px-[32px] w-full shrink-0">
          <div className="bg-[#bdbdbd] h-px w-full" />
        </div>
        <div className="bg-white flex flex-col flex-1 min-h-px gap-[72px] items-center px-[72px] py-[86px] w-full">
          <div className="flex flex-col gap-[8px] items-center text-center">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#383838] text-[31.248px] leading-[1.2] whitespace-nowrap" style={fontVariation}>
              Sistema PDV
            </p>
            <p className="font-['Nunito_Sans',sans-serif] text-[#6c6c6c] text-[16px] leading-[1.2] w-[287px]" style={fontVariation}>
              Entre com suas credenciais para acessar
            </p>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-center w-full">
            <div className="flex flex-col gap-[16px] items-center justify-center">
              <div className="bg-[#fbf2d7] flex items-center p-[10px] rounded-full">
                <Lock size={32} className="text-[#d0ad45]" strokeWidth={1.8} />
              </div>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25.008px] leading-[1.2] text-[#7e7e7e] whitespace-nowrap py-[4px]" style={fontVariation}>
                Caixa fechado
              </p>
            </div>
            <div className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2] text-[#6c6c6c] text-center" style={fontVariation}>
              <p>O caixa poderá ser reaberto em</p>
              <p className="font-bold">12:39:03</p>
            </div>
          </div>
        </div>
        <div className="px-[32px] w-full shrink-0">
          <div className="bg-[#bdbdbd] h-px w-full" />
        </div>
        <RodapeStatus />
      </div>
    </div>
  );
}
