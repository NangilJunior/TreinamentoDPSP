import { FileSpreadsheet } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import iconeCredito from "../../imports/FormasPagamentoIcons/credit.svg";

export const CATEGORIAS_PROMOCIONAIS = [
  { nome: "Vacinas e Semaglutida 10X" },
  { nome: "PARCELAMENTO 4X A 6X - GATILHO 100 REAIS E\\COMPRAS" },
  { nome: "PARCELAMENTO 6X <=3000 AA\\AR POP\\CBR" },
  { nome: "PARCELAMENTO AA e AR EM ATÉ 3X" },
  { nome: "PARCELAMENTO VACINAS E SEMAGLUTINA - AA\\AR 6X" },
];

export default function CreditoCategoriasScreen({ selectedIndex }: { selectedIndex: number }) {
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

          <div className="border border-[#e5e5e5] rounded-[8px] px-[12px] py-[18px] flex flex-col items-center">
            <div className="flex gap-[12px] items-center w-full">
              <div className="shrink-0 flex items-center justify-center p-[10px] rounded-[8px]" style={{ backgroundColor: "#fbf2f8" }}>
                <img src={iconeCredito} alt="" className="size-[32px]" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#1a1a1a] text-[20px] leading-[1.2]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Crédito
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[#747474] text-[12.8px] leading-[1.2]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Pagamento para o próximo vencimento
                </p>
              </div>
            </div>
          </div>

          <div className="relative border border-[#e5e5e5] rounded-[20px] p-[20px]">
            <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[480px] pointer-events-none z-[45]">
              <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                  <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Escolha a promoção desejada e pressione <span className="font-bold text-white">[Entra]</span> para confirmar a categoria selecionada.
                </p>
              </div>
              <div className="flex justify-center mt-0">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
              </div>
            </div>
            <div className="h-[195px] overflow-y-auto flex flex-col">
              {CATEGORIAS_PROMOCIONAIS.map((cat, idx) => {
                const ativo = idx === selectedIndex;
                return (
                  <div
                    key={cat.nome}
                    className={`flex items-center px-[8px] py-[16px] border-b border-[#e5e5e5] ${
                      ativo ? "bg-[#e4f6ff]" : idx % 2 === 1 ? "bg-[#f5f5f5]" : "bg-white"
                    }`}
                  >
                    <p className="font-['Geist',sans-serif] text-[16px] text-[#0a0a0a] whitespace-nowrap">
                      {cat.nome}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-[24px] py-[20px]">
        <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]">
          <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap text-[#ed403d]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Volta</p>
        </div>
        <div className="flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]" style={{ backgroundColor: '#2258e6' }}>
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap text-white" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Entra</p>
        </div>
      </div>
    </div>
  );
}
