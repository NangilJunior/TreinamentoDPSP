import { X, LogIn, FileSpreadsheet } from "lucide-react";
import { PDVHeader, formatCurrency } from "./ValorRetiradaScreen";
import iconeDinheiro from "../../imports/FormasPagamentoIcons/dinheiro.svg";
import iconePix from "../../imports/FormasPagamentoIcons/pix.svg";
import iconeDebito from "../../imports/FormasPagamentoIcons/debit.svg";
import iconeCredito from "../../imports/FormasPagamentoIcons/credit.svg";

export type MetodoPagamento = "dinheiro" | "pix" | "debito" | "credito";

const METODO_INFO: Record<MetodoPagamento, { titulo: string; subtitulo: string; icone: string; bg: string; placeholder: string }> = {
  dinheiro: {
    titulo: "Dinheiro",
    subtitulo: "Recebimento em espécie",
    icone: iconeDinheiro,
    bg: "#f2fbf9",
    placeholder: "Digite o valor que o cliente pagou em dinheiro",
  },
  pix: {
    titulo: "PIX",
    subtitulo: "Pagamento instantâneo",
    icone: iconePix,
    bg: "#f2f7fb",
    placeholder: "Digite o valor exato da compra para gerar a cobrança via PIX",
  },
  debito: {
    titulo: "Débito",
    subtitulo: "Desconto imediato em conta",
    icone: iconeDebito,
    bg: "#f2f8fb",
    placeholder: "Digite o valor exato da compra a ser cobrado no cartão de débito",
  },
  credito: {
    titulo: "Crédito",
    subtitulo: "Pagamento para o próximo vencimento",
    icone: iconeCredito,
    bg: "#fbf2f8",
    placeholder: "Digite o valor exato da compra a ser cobrado no cartão de crédito",
  },
};

export default function PagamentoValorScreen({
  valorCents,
  valorAlvoCents,
  metodo,
  mostrarTooltip = true,
}: {
  valorCents: number;
  valorAlvoCents: number;
  metodo: MetodoPagamento;
  mostrarTooltip?: boolean;
}) {
  const showValue = valorCents > 0;
  const isValidValue = valorCents === valorAlvoCents;
  const info = METODO_INFO[metodo];

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

          <div className="relative border border-[#e5e5e5] rounded-[8px] px-[12px] py-[18px] flex flex-col gap-[24px]">
            {mostrarTooltip && (
              <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[480px] pointer-events-none z-[45]">
                <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                    <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    {metodo === "dinheiro" ? (
                      <>Insira no teclado o valor fornecido pelo cliente. Para este exemplo, digite <span className="font-bold text-white">R$ {formatCurrency(valorAlvoCents)}</span>.</>
                    ) : (
                      <>Insira no teclado o valor total da compra. Para este exemplo, <span className="font-bold text-white">R$ {formatCurrency(valorAlvoCents)}</span>.</>
                    )}
                  </p>
                </div>
                <div className="flex justify-center mt-0">
                  <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                </div>
              </div>
            )}
            <div className="flex gap-[12px] items-center">
              <div className="shrink-0 flex items-center justify-center p-[10px] rounded-[8px]" style={{ backgroundColor: info.bg }}>
                <img src={info.icone} alt="" className="size-[32px]" />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#1a1a1a] text-[20px] leading-[1.2]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  {info.titulo}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[#747474] text-[12.8px] leading-[1.2] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  {info.subtitulo}
                </p>
              </div>
            </div>
            <div className={`h-[56px] w-full bg-white rounded-[8px] flex items-center px-[16px] border ${showValue ? "border-[#a3a3a3] shadow-[0px_0px_0px_3px_#d4d4d4]" : "border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`}>
              {showValue ? (
                <p className="font-['Geist',sans-serif] text-[14px] text-[#0a0a0a]">R$ {formatCurrency(valorCents)}</p>
              ) : (
                <p className="font-['Geist',sans-serif] text-[14px]">
                  <span className="text-[#0a0a0a]">{"| "}</span>
                  <span className="text-[#7c7c7c]">{info.placeholder}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-[24px] py-[20px]">
        <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]">
          <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <X size={16} className="text-[#ed403d]" />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap text-[#ed403d]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Volta</p>
        </div>

        <div
          className="flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px] transition-all duration-300"
          style={{ backgroundColor: isValidValue ? '#2258e6' : '#cfcfcf', opacity: isValidValue ? 1 : 0.5 }}
        >
          <LogIn size={16} color={isValidValue ? 'white' : '#3b3b3b'} />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap"
            style={{ color: isValidValue ? 'white' : '#3b3b3b', fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            Entra
          </p>
        </div>
      </div>
    </div>
  );
}
