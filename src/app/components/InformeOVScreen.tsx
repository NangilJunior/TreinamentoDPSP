import { MessageCircleMore, ReceiptText } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";

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

        <div className="fade-in-delay absolute bottom-[-70px] left-1/2 -translate-x-1/2 w-[520px] pointer-events-none z-[45]">
          <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              {ovCompleto ? (
                <>O número da OV foi informado. Pressione <span className="font-bold text-white">[Entra]</span> para localizar o pedido.</>
              ) : (
                <>O entregador informa o número da OV (ordem de venda) do pedido. Neste exemplo, digite <span className="font-bold text-white">1112223330</span> no teclado virtual.</>
              )}
            </p>
          </div>
          <div className="flex justify-center mt-0">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
          </div>
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
