import { MessageCircleMore, ReceiptText } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";

// Itens do Pedido #4521 (node 2825:46664/46738 do Figma) — exibidos como
// prévia abaixo da lista de pedidos, independentemente de qual pedido está
// selecionado, pois é o único detalhado no design.
const ITENS_PEDIDO_4521 = [
  { sku: "646156", descricao: "Dipirona Monoidratada 500mg", qtd: 1, unitario: "R$ 12,90", desconto: null, total: "R$ 12,90" },
  { sku: "882341", descricao: "Amoxilina 500mg Capsulas - 21 un", qtd: 2, unitario: "R$ 45,30", desconto: "-10%", total: "R$ 81,54" },
  { sku: "112093", descricao: "Ibuprofeno 600mg - 20 comprimidos", qtd: 1, unitario: "R$ 39,00", desconto: "-6%", total: "R$ 36,66" },
];

// "checked" = pedido confirmado (azul); "focus" = ainda não confirmado, mas
// é o item em destaque pela navegação via teclado (node 2825:46664);
// "default" = checkbox comum, sem destaque (o outro pedido da lista).
function CheckboxPedido({ variant }: { variant: "checked" | "focus" | "default" }) {
  if (variant === "checked") {
    return (
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute bg-[#2258e6] border border-[#2258e6] rounded-[4px] size-[16px]" />
        <svg className="absolute inset-0 size-full p-[2px]" fill="none" viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (variant === "focus") {
    return (
      <div className="relative shrink-0 size-[16px]">
        <div className="absolute bg-white border border-[#737373] rounded-[4px] size-[14px] top-px left-px shadow-[0px_0px_0px_3px_#d4d4d4]" />
      </div>
    );
  }
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute bg-white border border-[#d4d4d4] rounded-[4px] size-[14px] top-px left-px shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

export default function SelecionePedidoScreen({ pedidoSelecionado }: { pedidoSelecionado: boolean }) {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PDVHeader trilha={[]} />

      {/* Barra "Pedidos encontrados" (node 2825:46670/46744 do Figma). Fora
          do container rolável abaixo, para que a tooltip ancorada aqui
          nunca seja cortada por overflow — apenas sobreposta à UI. */}
      <div className="relative drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)] shrink-0 w-full">
        <div className="flex items-center gap-[24px] p-[24px]">
          <ReceiptText size={24} className="text-[#4d4d4d]" strokeWidth={1.8} />
          <p className="font-['Geist',sans-serif] font-medium text-[14px] text-[#4d4d4d] tracking-[3px] uppercase">
            Pedidos encontrados
          </p>
        </div>

        <div className="fade-in-delay absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[560px] pointer-events-none z-[45]">
          <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Encontre o pedido do cliente e pressione <span className="font-bold text-white">[Entra]</span>. Para este exemplo, vamos seguir a primeira opção.
            </p>
          </div>
          <div className="flex justify-center mt-0">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-[16px] px-[20px] py-[16px] overflow-y-auto">
        {/* "Selecione o Pedido" alinhado à mesma margem esquerda das tabelas abaixo. */}
        <div className="flex items-center gap-[10px] w-[984px]">
          <MessageCircleMore size={24} className="text-[#7e7e7e]" strokeWidth={1.8} />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#7e7e7e] text-[25px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Selecione o Pedido
          </p>
        </div>

        <div className="w-[984px]">
          <div className="border border-[#e5e5e5] rounded-[20px] p-[20px]">
            <div className="flex flex-col rounded-[4px] overflow-hidden">
              <div className="flex items-center border-b border-[#e5e5e5] bg-[#e4f6ff]">
                <div className="w-[48px] flex items-center justify-center py-[16px] shrink-0">
                  <CheckboxPedido variant={pedidoSelecionado ? "checked" : "focus"} />
                </div>
                <div className="flex-1 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">Pedido #4521</p>
                </div>
                <div className="flex-1 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">R$ 127,50</p>
                </div>
                <div className="flex-1 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">3 itens</p>
                </div>
                <div className="flex-1 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">Hoje</p>
                </div>
              </div>
              <div className="flex items-center bg-[#f5f5f5]">
                <div className="w-[48px] flex items-center justify-center py-[16px] shrink-0">
                  <CheckboxPedido variant="default" />
                </div>
                <div className="flex-1 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">Pedido #4518</p>
                </div>
                <div className="flex-1 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">R$ 45,90</p>
                </div>
                <div className="flex-1 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">5 itens</p>
                </div>
                <div className="flex-1 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">Ontem</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#e5e5e5] rounded-[20px] w-[984px] p-[20px]">
          <div className="flex flex-col rounded-[4px] overflow-hidden">
            <div className="flex items-center border-b border-[#e5e5e5]">
              <div className="w-[130px] shrink-0 py-[16px] px-[8px]">
                <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">SKU / Código</p>
              </div>
              <div className="flex-1 py-[16px] px-[8px]">
                <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">Descrição do Produto</p>
              </div>
              <div className="w-[96px] shrink-0 py-[16px] px-[8px] text-center">
                <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">QTD</p>
              </div>
              <div className="w-[128px] shrink-0 py-[16px] px-[8px]">
                <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">Unitário</p>
              </div>
              <div className="w-[128px] shrink-0 py-[16px] px-[8px]">
                <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">Desconto</p>
              </div>
              <div className="w-[128px] shrink-0 py-[16px] px-[8px]">
                <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">Total</p>
              </div>
            </div>
            {ITENS_PEDIDO_4521.map((item, idx) => (
              <div key={item.sku} className={`flex items-center ${idx % 2 === 1 ? "bg-white" : "bg-[#f5f5f5]"} ${idx < ITENS_PEDIDO_4521.length - 1 ? "border-b border-[#e5e5e5]" : ""}`}>
                <div className="w-[130px] shrink-0 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">{item.sku}</p>
                </div>
                <div className="flex-1 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">{item.descricao}</p>
                </div>
                <div className="w-[96px] shrink-0 py-[16px] px-[8px] text-center">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">{item.qtd}</p>
                </div>
                <div className="w-[128px] shrink-0 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">{item.unitario}</p>
                </div>
                <div className="w-[128px] shrink-0 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">{item.desconto ?? ""}</p>
                </div>
                <div className="w-[128px] shrink-0 py-[16px] px-[8px]">
                  <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a]">{item.total}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-[24px] py-[20px]">
        <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]">
          <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap text-[#ed403d]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Volta</p>
        </div>
        <div className={`flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px] ${pedidoSelecionado ? "" : "opacity-50"}`} style={{ backgroundColor: pedidoSelecionado ? '#2258e6' : '#cfcfcf' }}>
          <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap ${pedidoSelecionado ? "text-white" : "text-[#3b3b3b]"}`} style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Entra</p>
        </div>
      </div>
    </div>
  );
}
