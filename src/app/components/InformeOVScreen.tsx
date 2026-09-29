import { MessageCircleMore, ReceiptText } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import { TutorialTooltip } from "./TutorialTooltip";

// Tela "Informe o OV" (nodes 3978:57469/57496 do Figma) do fluxo Localizar
// Pedido do Delivery — o entregador informa ao operador o número da ordem de
// venda (OV) do pedido já pago na compra online.
export default function InformeOVScreen({ ovNumero, ovCompleto }: { ovNumero: string; ovCompleto: boolean }) {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PDVHeader trilha={[]} />

      <div className="relative drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)] shrink-0 w-full">
        <div className="flex items-center gap-[24px] p-[24px]">
          <ReceiptText size={24} className="text-[#4d4d4d]" strokeWidth={1.8} />
          <p className="font-['Geist',sans-serif] font-medium text-[14px] text-[#4d4d4d] tracking-[3px] uppercase">
            Resgate de pedidos
          </p>
        </div>

        <div className="fade-in-delay absolute bottom-[-70px] left-1/2 -translate-x-1/2 pointer-events-none z-[45]">
          <TutorialTooltip width={520}>
            {ovCompleto ? (
              <>O número da OV foi informado. Pressione <span className="font-bold">[Entra]</span> para localizar o pedido.</>
            ) : (
              <>O entregador informa o número da OV (ordem de venda) do pedido. Neste exemplo, digite <span className="font-bold">1112223330</span> no teclado virtual.</>
            )}
          </TutorialTooltip>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-[20px] px-[128px] py-[32px] overflow-y-auto">
        <div className="flex items-center gap-[10px] w-full">
          <MessageCircleMore size={24} className="text-[#7e7e7e]" strokeWidth={1.8} />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#7e7e7e] text-[25px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Informe o OV
          </p>
        </div>

        <div className="flex flex-col gap-[18px] items-center justify-center w-full px-[112px]">
          <div className="flex items-center w-full">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Número da OV (pedido)
            </p>
          </div>
          <div
            className={`flex items-center h-[72px] w-full px-[16px] rounded-[8px] border ${
              ovNumero.length > 0 ? "border-[#a3a3a3] shadow-[0px_0px_0px_3px_#d4d4d4]" : "border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
            } bg-white`}
          >
            <p className={`font-['Nunito_Sans',sans-serif] text-[20px] ${ovNumero.length > 0 ? "text-[#0a0a0a]" : "text-[#737373]"}`} style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              {ovNumero.length > 0 ? ovNumero : "Digite o número da OV (pedido)"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-[24px] py-[20px]">
        <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]">
          <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap text-[#ed403d]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Volta</p>
        </div>
        <div className={`flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px] ${ovCompleto ? "" : "opacity-50"}`} style={{ backgroundColor: ovCompleto ? '#2258e6' : '#cfcfcf' }}>
          <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap ${ovCompleto ? "text-white" : "text-[#3b3b3b]"}`} style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Entra</p>
        </div>
      </div>
    </div>
  );
}
