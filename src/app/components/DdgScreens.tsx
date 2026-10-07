import { ReactNode, useEffect, useRef } from "react";
import { Coins, MessageCircleMore, Tag, Info } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import { RodapeVoltaEntra } from "./ConsultaPrecoScreens";
import { ItemVendaCard, ITENS_CANCELAMENTO_PARCIAL, type ItemCancelamento } from "./CancelamentoParcialScreens";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// Motivos do Desconto do Gerente (node 1260:15166 do Figma), navegáveis
// pelas teclas V/K.
export const MOTIVOS_DDG = [
  "Cobrir oferta da concorrência",
  "Produto com avaria ou danificado",
  "Correção de preço",
  "Convênio / PBM",
  "Vencimento próximo",
];

// Novo preço unitário digitado no exemplo (passo 74), em centavos, e o
// menor valor permitido para a Dipirona (limite de 10% de desconto sobre
// R$ 8,50).
export const VALOR_DDG_EXEMPLO_CENTS = 780;
export const VALOR_DDG_MINIMO_CENTS = 765;

const formatarCentavos = (cents: number) => (cents / 100).toFixed(2).replace(".", ",");

// Dipirona com o desconto aplicado: R$ 8,50 → R$ 7,80 por unidade (2
// unidades), usada na tela final do fluxo (passo 75).
export const ITENS_VENDA_COM_DDG: ItemCancelamento[] = ITENS_CANCELAMENTO_PARCIAL.map((item) =>
  item.numero === 1
    ? { ...item, descontoPct: "-8%", desconto: 1.4, precoFinal: 15.6 }
    : item
);

// Cabeçalho comum às telas do DDG: trilha "Desconto do Gerente", título
// "Selecione o Motivo do Desconto" e o indicador de etapas (3 pontos), com
// o item escolhido logo abaixo.
function DdgCabecalho({ etapa, item, tooltip }: { etapa: 1 | 2 | 3; item: ItemCancelamento; tooltip?: ReactNode }) {
  return (
    <>
      <PDVHeader trilha={[]} />
      <div className="flex items-center gap-[24px] p-[24px] shrink-0 drop-shadow-[0px_4px_8px_rgba(0,0,0,0.06)]">
        <Coins size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />
        <p className="font-['Geist',sans-serif] font-medium text-[14px] text-[#4d4d4d] tracking-[3px] whitespace-nowrap">
          DESCONTO DO GERENTE
        </p>
      </div>
      <div className="flex flex-col gap-[16px] px-[20px] pt-[20px]">
        <div className="relative flex items-center justify-between px-[129px] py-[4px]">
          {tooltip && (
            <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] pointer-events-none z-[45]">
              {tooltip}
            </div>
          )}
          <div className="flex items-center gap-[10px]">
            <MessageCircleMore size={24} className="text-[#61bae8]" strokeWidth={1.8} />
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25px] leading-[1.2] text-[#7e7e7e] whitespace-nowrap" style={fontVariation}>
              Selecione o Motivo do Desconto
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            {[1, 2, 3].map((n) => (
              <div key={n} className={`size-[13px] rounded-full ${n <= etapa ? "bg-[#2258e6]" : "bg-[#d9d9d9]"}`} />
            ))}
          </div>
        </div>
        <div className="px-[128px]">
          <ItemVendaCard item={item} />
        </div>
      </div>
    </>
  );
}

function MotivoSelecionado({ motivo }: { motivo: string }) {
  return (
    <div className="flex gap-[20px] items-center py-[4px]">
      <Tag size={24} className="text-[#61bae8]" strokeWidth={1.8} />
      <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#2d2d2d] tracking-[3px] uppercase whitespace-nowrap">
        {motivo}
      </p>
    </div>
  );
}

// Etapa 1 (node 1260:15166) — motivo do desconto.
export function DdgMotivoScreen({ selectedIndex, item, tooltip }: { selectedIndex: number; item: ItemCancelamento; tooltip?: ReactNode }) {
  const motivoSelecionadoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    motivoSelecionadoRef.current?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <DdgCabecalho etapa={1} item={item} tooltip={tooltip} />
      <div className="flex-1 min-h-0 px-[148px] pt-[18px]">
        <div className="border border-[#e5e5e5] flex flex-col p-[20px] rounded-[20px] w-full">
          {MOTIVOS_DDG.map((motivo, idx) => (
            <div
              key={motivo}
              ref={idx === selectedIndex ? motivoSelecionadoRef : undefined}
              className={`border-b border-[#e5e5e5] flex items-center px-[8px] py-[16px] transition-colors ${idx === selectedIndex ? "bg-[#e4f6ff]" : idx % 2 === 1 ? "bg-[#f5f5f5]" : ""}`}
            >
              <p className="font-['Geist',sans-serif] text-[16px] leading-[24px] text-[#0a0a0a] whitespace-nowrap">{motivo}</p>
            </div>
          ))}
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={true} />
    </div>
  );
}

function OpcaoModo({ tecla, rotulo }: { tecla: string; rotulo: string }) {
  return (
    <div className="border border-[#ddd] flex gap-[20px] h-[70px] items-center px-[18px] py-[10px] rounded-[6px] w-[464px]">
      <div className="border border-[#2258e6] flex items-center justify-center px-[24px] py-[10px] rounded-[8px] w-[64px] shrink-0">
        <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[24px] leading-[1.2] text-[#2258e6]">{tecla}</p>
      </div>
      <p className="font-['Geist',sans-serif] font-medium text-[12px] leading-[20px] text-[#707070] tracking-[3px] whitespace-pre">{rotulo}</p>
    </div>
  );
}

// Etapa 2 (node 1260:15377) — forma de aplicar o desconto. O avanço é pela
// tecla [3] (Preço Final), orientado pelo banner abaixo do PDV; [Entra] fica
// indisponível nesta tela.
export function DdgModoScreen({ item, motivo }: { item: ItemCancelamento; motivo: string }) {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <DdgCabecalho etapa={2} item={item} />
      <div className="flex-1 min-h-0 flex flex-col gap-[32px] px-[148px] pt-[32px]">
        <MotivoSelecionado motivo={motivo} />
        <div className="flex flex-col gap-[32px]">
          <div className="flex gap-[56px] items-center justify-between">
            <OpcaoModo tecla="1" rotulo="%  PERCENTUAL" />
            <OpcaoModo tecla="3" rotulo="R$  PREÇO FINAL" />
          </div>
          <OpcaoModo tecla="2" rotulo="R$  SUBTRAÇÃO" />
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={false} />
    </div>
  );
}

// Etapa 3 (node 1283:9411) — digitação do novo preço final. O campo fica em
// estado Default até o primeiro dígito, e só então passa a Active.
export function DdgValorScreen({ item, motivo, valorCents, tooltip }: { item: ItemCancelamento; motivo: string; valorCents: number; tooltip?: ReactNode }) {
  const digitando = valorCents > 0;
  const valorCompleto = valorCents === VALOR_DDG_EXEMPLO_CENTS;
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <DdgCabecalho etapa={3} item={item} />
      <div className="flex-1 min-h-0 flex flex-col gap-[32px] px-[148px] pt-[32px]">
        <div className="flex gap-[32px] items-start justify-between">
          <MotivoSelecionado motivo={motivo} />
          <MotivoSelecionado motivo="R$  Preço Final" />
        </div>
        <div className="flex flex-col gap-[24px] items-center">
          <div className="relative flex flex-col gap-[10px] w-[428px]">
            {tooltip && (
              <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] pointer-events-none z-[45]">
                {tooltip}
              </div>
            )}
            <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2] text-[#434343]" style={fontVariation}>Valor</p>
            <div
              className={`bg-white flex gap-[12px] h-[56px] items-center px-[16px] rounded-[8px] border transition-all ${
                digitando ? "border-[#2258e6] shadow-[0px_0px_0px_3px_#d4d4d4]" : "border-[#a3a3a3]"
              }`}
            >
              <p className="font-['Nunito',sans-serif] font-bold text-[14px] leading-[20px] text-[#525252]">R$</p>
              <p className="font-['Geist',sans-serif] text-[14px] leading-[20px] text-[#0a0a0a]">
                {digitando ? formatarCentavos(valorCents) : "|"}
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#e5e5e5] flex gap-[12px] items-start px-[16px] py-[12px] rounded-[8px] w-[428px]">
            <Info size={16} className="text-[#0a0a0a] mt-[2px] shrink-0" strokeWidth={1.8} />
            <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#0a0a0a]">
              Menor valor permitido: R$ {formatarCentavos(VALOR_DDG_MINIMO_CENTS)}
            </p>
          </div>
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={valorCompleto} />
    </div>
  );
}
