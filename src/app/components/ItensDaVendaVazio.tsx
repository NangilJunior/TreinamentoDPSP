import { ShoppingCart } from "lucide-react";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// Estado vazio da seção "Itens da Venda" (node 9066:70611 do Figma): ícone do
// carrinho + instrução para adicionar o primeiro produto.
export default function ItensDaVendaVazio() {
  return (
    <div className="bg-white flex-1 h-full flex flex-col gap-[16px] items-center justify-center p-[20px]">
      <ShoppingCart size={48} className="text-[#d1d5db]" strokeWidth={1.5} />
      <div className="flex flex-col gap-[4px] items-center">
        <p className="font-['Nunito_Sans',sans-serif] text-[#6b7280] text-[12.8px] leading-[1.2]" style={fontVariation}>
          Nenhum produto adicionado
        </p>
        <p className="font-['Nunito_Sans',sans-serif] text-[#9ca3af] text-[12.8px] leading-[1.2]" style={fontVariation}>
          Escaneie ou digite o código de um produto
        </p>
      </div>
    </div>
  );
}
