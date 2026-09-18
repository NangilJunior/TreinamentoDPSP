import { User, ArrowLeft, Search, SquareDashed, ShoppingCart, FileSpreadsheet, Receipt, Check } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";

// Tela final do fluxo de Formas de Pagamento (node 1559:25489 do Figma):
// reproduz o estado padrão/vazio do PDV (carrinho zerado, cliente ainda não
// identificado) com a confirmação "Obrigado pela preferência" sobreposta no
// painel direito — ilustrando o encerramento da venda, sem depender do
// estado real do carrinho de exemplo usado no restante do tutorial.
export default function ObrigadoScreen() {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden rounded-[20px] flex flex-col">
      <PDVHeader trilha={[]} />

      <div className="flex flex-1 min-h-0">
        <div className="flex flex-col w-[774px]">
          <div className="bg-[#f6f6f6] p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <User size={24} className="shrink-0 text-[#404040]" strokeWidth={1.8} />
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Identificação do Cliente
              </p>
            </div>
            <div className="bg-[#f5f5f5] flex rounded-[12px]">
              <div className="bg-[#2258e6] flex gap-[8px] items-center justify-center px-[32px] py-[16px] rounded-[10px] w-[256px] shadow-sm">
                <p className="font-['Geist',sans-serif] font-medium text-[14px] text-white">Com identificação</p>
              </div>
              <div className="flex gap-[8px] items-center justify-center px-[32px] py-[14px] w-[256px]">
                <p className="font-['Geist',sans-serif] font-medium text-[14px] text-[#0a0a0a]">Sem Identificação</p>
                <ArrowLeft size={24} className="text-[#525252]" strokeWidth={1.8} />
              </div>
            </div>
            <div className="flex gap-[8px] w-full">
              <div className="flex-1 h-[48px] rounded-[8px] px-[16px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center">
                <p className="font-['Geist',sans-serif] text-[14px]">
                  <span className="text-[#0a0a0a]">{"| "}</span>
                  <span className="text-[#7c7c7c]">Digite o CPF do cliente</span>
                </p>
              </div>
              <button className="bg-[#171717] opacity-50 flex gap-[8px] items-center justify-center px-[24px] h-[48px] rounded-[8px]">
                <Search size={16} className="text-white" />
                <p className="font-['Geist',sans-serif] font-medium text-[14px] text-[#fafafa]">Buscar</p>
              </button>
            </div>
            <p className="font-['Nunito_Sans',sans-serif] text-[#727272] text-[12.8px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Digite o CPF do cliente
            </p>
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          <div className="bg-white p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <SquareDashed size={24} className="shrink-0 text-[#61bae8]" strokeWidth={1.8} />
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Entrada de Produtos
              </p>
            </div>
            <div className="h-[56px] w-full rounded-[8px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          <div className="bg-[#f6f6f6] p-[20px] flex gap-[12px] items-center">
            <ShoppingCart size={24} className="shrink-0 text-[#696969]" strokeWidth={1.8} />
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Itens da Venda
            </p>
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          <div className="bg-white flex-1 flex items-center justify-center">
            <p className="font-['Nunito_Sans',sans-serif] text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Nenhum produto adicionado
            </p>
          </div>
        </div>

        <div className="w-px bg-[#bdbdbd]" />

        <div className="flex flex-col flex-1">
          <div className="bg-[#f6f6f6] p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <FileSpreadsheet size={24} className="shrink-0 text-[#7B629F]" strokeWidth={1.8} />
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Resumo da Venda
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Subtotal:</p>
              <p className="font-['Nunito_Sans',sans-serif] text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$ 0,00</p>
            </div>
            <div className="h-px bg-[#bdbdbd]" />
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Total:</p>
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$ 0,00</p>
            </div>
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          <div className="flex flex-col items-center justify-center py-[15px]">
            <div className="bg-[#868686] flex gap-[8px] items-center justify-center px-[24px] py-[10px] h-[53px] rounded-[8px] w-[460px]">
              <Receipt size={24} className="text-[#fafafa]" />
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#fafafa]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Totalizar Venda
              </p>
              <div className="bg-[rgba(255,255,255,0.2)] px-[8px] py-[4px] rounded-[4px]">
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#fafafa]">SUB TOTAL</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[12px] items-center justify-center">
            <div className="bg-[#f2fbf9] flex items-center justify-center p-[10px] rounded-full">
              <Check size={32} className="text-[#00ae8e]" strokeWidth={2} />
            </div>
            <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#1a1a1a] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Obrigado pela preferência
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
