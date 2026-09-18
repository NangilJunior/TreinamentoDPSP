import { FileSpreadsheet } from "lucide-react";
import { PDVHeader, formatCurrency } from "./ValorRetiradaScreen";

export default function GavetaTrocoScreen({
  valorRecebidoCents,
  totalCents,
}: {
  valorRecebidoCents: number;
  totalCents: number;
}) {
  const trocoCents = Math.max(valorRecebidoCents - totalCents, 0);

  return (
    <div className="absolute inset-0 bg-white overflow-hidden rounded-[20px] flex flex-col">
      <PDVHeader trilha={[]} />

      <div className="flex-1 flex flex-col items-center p-[16px]">
        <div className="flex flex-col gap-[12px] w-[617px]">
          <div className="bg-[#f6f6f6] rounded-[8px] p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <FileSpreadsheet size={24} className="shrink-0 text-[#7B629F]" strokeWidth={1.8} />
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Resumo da Venda
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Subtotal:</p>
              <p className="font-['Nunito_Sans',sans-serif] text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$ 88,91</p>
            </div>
            <div className="h-px bg-[#bdbdbd]" />
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Total:</p>
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$ {formatCurrency(totalCents)}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#00ae8e] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Economizou</p>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#00ae8e] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$ 42,37</p>
            </div>
          </div>

          <div className="border border-[#e5e5e5] rounded-[8px] px-[12px] py-[18px] flex flex-col gap-[24px]">
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Dinheiro:</p>
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$ {formatCurrency(valorRecebidoCents)}</p>
            </div>
            <div className="h-px bg-[#e5e5e5]" />
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] font-medium text-[#2b8dc0] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Troco:</p>
              <p className="font-['Nunito_Sans',sans-serif] font-medium text-[#2b8dc0] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$ {formatCurrency(trocoCents)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
