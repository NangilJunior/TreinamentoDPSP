import { ArrowLeft, Printer } from "lucide-react";

const fontVariation = { fontVariationSettings: '"YTLC" 500, "wdth" 100' };

// Modal "Imprimir cupom fiscal" (node 9060:69810 do Figma), exibido no fluxo
// de Envio e Impressão de Cupom após a escolha [1] Imprimir cupom. Bottom
// sheet ilustrativo: o avanço acontece pela tecla [Entra] do teclado virtual.
export default function ImprimirCupomModal() {
  return (
    <div className="bg-white flex flex-col gap-[32px] px-[40px] py-[32px] rounded-tl-[24px] rounded-tr-[24px] w-full drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
      <div className="flex gap-[32px] items-center w-full">
        <div className="bg-[#eef3fd] flex items-center p-[10px] rounded-full shrink-0">
          <Printer size={32} className="text-[#2258e6]" strokeWidth={1.8} />
        </div>
        <div className="flex flex-col gap-[10px] flex-1 py-[4px] text-[#7e7e7e] leading-[1.2]">
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25.008px]" style={fontVariation}>
            Imprimir cupom fiscal
          </p>
          <p className="font-['Nunito_Sans',sans-serif] text-[16px]" style={fontVariation}>
            Tem certeza que deseja imprimir o cupom fiscal?
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between w-full">
        <div className="border border-[#d4d4d4] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[185px]">
          <ArrowLeft size={16} className="text-[#ed403d]" />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#ed403d]" style={fontVariation}>Volta</p>
        </div>
        <div className="bg-[#2258e6] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] w-[185px]">
          <Printer size={16} className="text-white" />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={fontVariation}>Entra</p>
        </div>
      </div>
    </div>
  );
}
