import { useEffect, useState } from "react";
import { X, FileSpreadsheet } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import iconePix from "../../imports/FormasPagamentoIcons/pix.svg";
import qrCodePix from "../../imports/FormasPagamentoIcons/qrcode-pix.png";

export default function PixAguardandoScreen() {
  const [segundosRestantes, setSegundosRestantes] = useState(180);

  useEffect(() => {
    if (segundosRestantes === 0) return;
    const timer = setTimeout(() => setSegundosRestantes((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [segundosRestantes]);

  const minutos = Math.floor(segundosRestantes / 60);
  const segundos = segundosRestantes % 60;

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
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$ 46,54</p>
            </div>
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#00ae8e] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Economizou</p>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#00ae8e] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$ 42,37</p>
            </div>
          </div>

          <div className="border border-[#e5e5e5] rounded-[8px] px-[12px] py-[18px] flex flex-col gap-[24px] items-center">
            <div className="flex gap-[12px] items-center w-full">
              <div className="shrink-0 flex items-center justify-center p-[10px] rounded-[8px]" style={{ backgroundColor: "#f2f7fb" }}>
                <img src={iconePix} alt="" className="size-[32px]" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#1a1a1a] text-[20px] leading-[1.2]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  PIX
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[#747474] text-[12.8px] leading-[1.2]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Pagamento instantâneo
                </p>
              </div>
            </div>

            <div className="border border-[#bdbdbd] rounded-[8px] flex items-center justify-center p-[10px]">
              <img src={qrCodePix} alt="QR Code PIX" className="size-[180px] object-cover" />
            </div>

            <div className="flex flex-col gap-[6px] items-center text-center w-full">
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#1a1a1a] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Aguardando pagamento...
              </p>
              <p className="font-['Nunito_Sans',sans-serif] font-medium text-[#686868] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Expira em {minutos}:{String(segundos).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-start px-[24px] py-[20px]">
        <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]">
          <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <X size={16} className="text-[#ed403d]" />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap text-[#ed403d]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Volta</p>
        </div>
      </div>
    </div>
  );
}
