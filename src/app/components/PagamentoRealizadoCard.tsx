import type { ReactNode } from "react";
import { ArrowRight, Check, Mail, Printer } from "lucide-react";
import { TutorialTooltip } from "./TutorialTooltip";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// Seção "Pagamento realizado" do painel direito do PDV (nodes 9060:69378 e
// 9060:69488 do Figma), exibida no lugar do botão "Totalizar Venda" ao fim
// do pagamento. Com o cliente identificado: [1] Imprimir cupom / [2] Enviar
// por e-mail; sem identificação: [1] Imprimir cupom / [2] Seguir sem
// imprimir. Os botões são ilustrativos — o avanço acontece pelas teclas do
// teclado virtual. semBotoes: venda já concluída sem opções de comprovante
// (ex.: pedido do delivery, pago na compra online).
export default function PagamentoRealizadoCard({
  tooltip,
  opcaoSecundaria = "email",
  semBotoes = false,
}: {
  /** Conteúdo da tooltip, ancorada acima do ícone (não cobre o título nem os botões). */
  tooltip?: ReactNode;
  opcaoSecundaria?: "email" | "semImprimir";
  semBotoes?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center p-[16px] ${semBotoes ? "" : "flex-1 justify-center"}`}>
      <div className={`border border-[#f2f2f2] rounded-[8px] w-[449px] flex flex-col gap-[36px] items-center justify-center ${semBotoes ? "py-[32px]" : "h-[363px]"}`}>
        <div className="flex flex-col gap-[12px] items-center">
          <div className="relative">
            {tooltip && (
              <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] pointer-events-none z-[45]">
                <TutorialTooltip width={460}>{tooltip}</TutorialTooltip>
              </div>
            )}
            <div className="bg-[#f2fbf9] flex items-center justify-center p-[10px] rounded-full">
              <Check size={32} className="text-[#00ae8e]" strokeWidth={2} />
            </div>
          </div>
          <div className="flex flex-col gap-[6px] items-center text-center">
            <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#1a1a1a] text-[20px] leading-[1.2]" style={fontVariation}>
              Pagamento realizado
            </p>
            <p className="font-['Nunito_Sans',sans-serif] text-[#747474] text-[16px] leading-[1.2]" style={fontVariation}>
              A transação foi realizada com sucesso
            </p>
          </div>
        </div>
        {!semBotoes && (
          <div className="flex flex-col gap-[12px] w-[407px]">
            <div className="bg-[#2258e6] border-2 border-[#2258e6] flex items-center justify-between px-[24px] py-[16px] rounded-[8px] w-full">
              <div className="flex gap-[8px] items-center">
                <Printer size={24} className="text-[#fafafa]" />
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[1.2] text-[#fafafa]" style={fontVariation}>
                  Imprimir cupom
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.2)] px-[8px] py-[4px] rounded-[4px]">
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2] text-[#fafafa]">1</p>
              </div>
            </div>
            <div className="bg-white border-2 border-[#2258e6] flex items-center justify-between px-[24px] py-[16px] rounded-[8px] w-full">
              <div className="flex gap-[8px] items-center">
                {opcaoSecundaria === "semImprimir" ? <ArrowRight size={24} className="text-[#2258e6]" /> : <Mail size={24} className="text-[#2258e6]" />}
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[1.2] text-[#2258e6]" style={fontVariation}>
                  {opcaoSecundaria === "semImprimir" ? "Seguir sem imprimir" : "Enviar por e-mail"}
                </p>
              </div>
              <div className="bg-[rgba(34,88,230,0.2)] px-[8px] py-[4px] rounded-[4px]">
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2] text-[#2258e6]">2</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
