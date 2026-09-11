import svgH5 from "../../imports/Home-5/svg-bveu4s30mg";
import { formatCurrency } from "./ValorRetiradaScreen";

const bankNoteArrowDownPaths = [
  "M21.25 13V8C21.25 7.66848 21.1182 7.35063 20.8838 7.11621C20.6494 6.88179 20.3315 6.75 20 6.75H4C3.66848 6.75 3.35063 6.88179 3.11621 7.11621C2.88179 7.35063 2.75 7.66848 2.75 8V16C2.75 16.3315 2.88179 16.6494 3.11621 16.8838C3.35063 17.1182 3.66848 17.25 4 17.25H12C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75H4C3.27065 18.75 2.57139 18.4601 2.05566 17.9443C1.53994 17.4286 1.25 16.7293 1.25 16V8C1.25 7.27065 1.53994 6.57139 2.05566 6.05566C2.57139 5.53994 3.27065 5.25 4 5.25H20C20.7293 5.25 21.4286 5.53994 21.9443 6.05566C22.4601 6.57139 22.75 7.27065 22.75 8V13C22.75 13.4142 22.4142 13.75 22 13.75C21.5858 13.75 21.25 13.4142 21.25 13Z",
  "M21.4697 18.4697C21.7626 18.1768 22.2374 18.1768 22.5303 18.4697C22.8232 18.7626 22.8232 19.2374 22.5303 19.5303L19.5303 22.5303C19.2374 22.8232 18.7626 22.8232 18.4697 22.5303L15.4697 19.5303C15.1768 19.2374 15.1768 18.7626 15.4697 18.4697C15.7626 18.1768 16.2374 18.1768 16.5303 18.4697L19 20.9395L21.4697 18.4697Z",
  "M18.0098 11.25C18.424 11.25 18.7598 11.5858 18.7598 12C18.7598 12.4142 18.424 12.75 18.0098 12.75H18C17.5858 12.75 17.25 12.4142 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25H18.0098Z",
  "M18.25 22V16C18.25 15.5858 18.5858 15.25 19 15.25C19.4142 15.25 19.75 15.5858 19.75 16V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5858 22.75 18.25 22.4142 18.25 22Z",
  "M6.00977 11.25C6.42398 11.25 6.75977 11.5858 6.75977 12C6.75977 12.4142 6.42398 12.75 6.00977 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H6.00977Z",
  "M13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12ZM14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12Z",
];

const inboxIconPaths = [
  "M8 11.25C8.25076 11.25 8.48492 11.3753 8.62402 11.584L10.4014 14.25H13.5986L15.376 11.584L15.4326 11.5098C15.5741 11.346 15.7806 11.25 16 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H16.4014L14.624 15.416C14.4849 15.6247 14.2508 15.75 14 15.75H10C9.74924 15.75 9.51508 15.6247 9.37598 15.416L7.59863 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H8Z",
  "M21.25 12.1777L17.8779 5.44336C17.7745 5.23535 17.6154 5.05996 17.418 4.9375C17.2697 4.84555 17.1042 4.78578 16.9326 4.76172L16.7598 4.75H7.24023C7.00774 4.75015 6.77962 4.81497 6.58203 4.9375C6.3846 5.05996 6.22554 5.23535 6.12207 5.44336L6.12109 5.44629L6.12012 5.44531L2.75 12.1777V18C2.75 18.3315 2.88179 18.6494 3.11621 18.8838C3.35063 19.1182 3.66848 19.25 4 19.25H20C20.3315 19.25 20.6494 19.1182 20.8838 18.8838C21.1182 18.6494 21.25 18.3315 21.25 18V12.1777ZM22.75 18C22.75 18.7293 22.4601 19.4286 21.9443 19.9443C21.4286 20.4601 20.7293 20.75 20 20.75H4C3.27065 20.75 2.57139 20.4601 2.05566 19.9443C1.53994 19.4286 1.25 18.7293 1.25 18V12C1.25 11.8834 1.2769 11.7683 1.3291 11.6641L4.7793 4.77441C5.00699 4.31706 5.35778 3.93235 5.79199 3.66309C6.22668 3.39354 6.72778 3.25034 7.23926 3.25H16.7607L16.9521 3.25684C17.3966 3.28814 17.8277 3.42727 18.208 3.66309C18.6422 3.93235 18.993 4.31706 19.2207 4.77441L22.6709 11.6641C22.7231 11.7683 22.75 11.8834 22.75 12V18Z",
];

export function PDVHeader() {
  return (
    <>
      <div className="bg-white flex items-center justify-between px-[20px] py-[20px] shrink-0 w-full">
        <div className="h-[40px] overflow-clip relative shrink-0 w-[160px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 40">
            <path d={svgH5.p1b273200} fill="#ED403D" /><path d={svgH5.p30032100} fill="#ED403D" />
            <path d={svgH5.p31a81900} fill="#61BAE8" /><path d={svgH5.p29d58b00} fill="white" />
          </svg>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px]">
          <div className="size-[9px] rounded-full bg-[#06AC73] shrink-0" />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#787878] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>PDV 57* Loja 0573</p>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px]">
          <div className="size-[9px] rounded-full bg-[#06AC73] shrink-0" />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#787878] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Caixa Disponível</p>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[16px] items-center px-[18px] py-[12px]">
          <div className="overflow-clip relative shrink-0 size-[40px]">
            <div className="absolute bg-[#f5f5f5] rounded-full inset-0" />
            <div className="absolute inset-0 flex items-center justify-center font-['Geist',sans-serif] text-[#0a0a0a] text-[14px]">JS</div>
          </div>
          <div className="flex flex-col gap-[3px] w-[137px]">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>João Silva</p>
            <p className="font-['Nunito_Sans',sans-serif] text-[#404040] text-[12.8px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Operador • Mat. 12345</p>
          </div>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[12px] items-center">
          <div className="flex gap-[8px] items-center px-[8px] py-[6px]">
            <div className="size-[9px] rounded-full bg-[#06AC73] shrink-0" />
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[9.38%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                  <path d={svgH5.p1228b80} fill="#525252" /><path d={svgH5.p1e471e00} fill="#525252" />
                  <path d={svgH5.pe868500} fill="#525252" /><path d={svgH5.p1afc9570} fill="#525252" />
                  <path d={svgH5.p28515c40} fill="#525252" /><path d={svgH5.p996db00} fill="#525252" />
                  <path d={svgH5.p3bf0d700} fill="#525252" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-[8px] items-center px-[8px] py-[6px]">
            <div className="size-[9px] rounded-full bg-[#06AC73] shrink-0" />
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[5.21%_13.54%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
                  <path d={svgH5.p263daa00} fill="#525252" /><path d={svgH5.p10ed4b60} fill="#525252" />
                  <path d={svgH5.p4c65000} fill="#525252" /><path d={svgH5.pe6ca000} fill="#525252" />
                  <path d={svgH5.p3da52900} fill="#525252" /><path d={svgH5.p2d332800} fill="#525252" />
                  <path d={svgH5.p3bf9b400} fill="#525252" /><path d={svgH5.pa671400} fill="#525252" />
                  <path d={svgH5.p6e954c0} fill="#525252" /><path d={svgH5.p2594ff00} fill="#525252" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-[8px] items-center px-[8px] py-[6px]">
            <div className="size-[9px] rounded-full bg-[#06AC73] shrink-0" />
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[5.21%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
                  <path d={svgH5.p2b0c6000} fill="#525252" />
                  <path d={svgH5.p1f60300} fill="#525252" />
                  <path d={svgH5.p3c19300} fill="#525252" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px]">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[5.21%_21.88%_5.33%_21.88%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 21.4708">
                <path d={svgH5.p1ffceb00} fill="#525252" /><path d={svgH5.pd91bf00} fill="#525252" />
                <path d={svgH5.p3ef72a00} fill="#525252" /><path d={svgH5.p11d84000} fill="#525252" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>31/MAR/26</p>
            <p className="font-['Nunito_Sans',sans-serif] text-[#404040] text-[12.8px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>10:17:03</p>
          </div>
        </div>
      </div>
      <div className="bg-[#bdbdbd] h-px shrink-0 w-full" />
      {/* Breadcrumb */}
      <div className="shrink-0 w-full drop-shadow-[0px_4px_8px_rgba(0,0,0,0.06)]">
        <div className="flex items-center p-[24px] gap-[24px]">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[21.88%_5.21%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 13.5">
                <path d={svgH5.p18b3a300} fill="#A6A6A6" /><path d={svgH5.pde21300} fill="#A6A6A6" /><path d={svgH5.p32886000} fill="#A6A6A6" />
              </svg>
            </div>
          </div>
          <p className="font-['Geist',sans-serif] font-medium text-[#4d4d4d] text-[14px] tracking-[3px] uppercase whitespace-nowrap">Sangria / Suprimento</p>
          <div className="h-[10px] relative shrink-0 w-[7px]">
            <div className="absolute inset-[-5%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00004 11.0001">
                <path d={svgH5.p37db7a18} stroke="#A5A5A5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="font-['Geist',sans-serif] font-medium text-[#4d4d4d] text-[14px] tracking-[3px] whitespace-nowrap">SUPRIMENTO COMPLEMENTAR</p>
          <div className="h-[10px] relative shrink-0 w-[7px]">
            <div className="absolute inset-[-5%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00004 11.0001">
                <path d={svgH5.p37db7a18} stroke="#A5A5A5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="font-['Geist',sans-serif] font-medium text-[#4d4d4d] text-[14px] tracking-[3px] whitespace-nowrap">APORTE</p>
        </div>
      </div>
    </>
  );
}

export default function SuprimentoValorScreen({ valorCents, gavetaAberta = false }: { valorCents: number; gavetaAberta?: boolean }) {
  const showValue = valorCents > 0;
  const isValidValue = valorCents === 20000;

  return (
    <div className="absolute inset-0 bg-white overflow-hidden rounded-[20px] flex flex-col">
      <PDVHeader />

      {/* Main content */}
      <div className="bg-white flex-1 relative overflow-hidden">
        <div className="flex flex-col gap-[32px] items-start p-[20px] h-full">
          {/* Title */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center">
              <div className="flex gap-[10px] items-center px-[129px] py-[4px]">
                <div className="flex items-center justify-center shrink-0 size-[24px]">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      {bankNoteArrowDownPaths.map((d) => (
                        <path key={d} d={d} fill="#61BAE8" />
                      ))}
                    </svg>
                  </div>
                </div>
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#7e7e7e] text-[25.008px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Suprimento Complementar</p>
              </div>
            </div>
          </div>

          {/* Form area */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col gap-[18px] items-start px-[128px]">
              {/* Value input */}
              <div className="flex flex-col gap-[18px] items-start w-full">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Valor da entrada</p>
                <div className="h-[72px] w-full">
                  <div className={`bg-white rounded-[8px] h-full relative flex items-center px-[16px] border ${showValue ? "border-[#a3a3a3] shadow-[0px_0px_0px_3px_#d4d4d4]" : "border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`}>
                    {showValue ? (
                      <p className="font-['Nunito_Sans',sans-serif] font-medium text-[#0a0a0a] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                        R$ {formatCurrency(valorCents)}
                      </p>
                    ) : (
                      <p className="font-['Nunito_Sans',sans-serif] font-medium text-[#737373] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                        R$ 0,00
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Saldo disponível */}
              <div className="bg-white relative rounded-[6px] w-full border border-[#e8e8e8]">
                <div className="flex flex-col items-center justify-center px-[40px] py-[20px] gap-[8px]">
                  <p className="font-['Geist',sans-serif] font-medium text-[#4d4d4d] text-[12px] tracking-[3px] whitespace-nowrap">SALDO DISPONÍVEL EM CAIXA</p>
                  <div className="flex items-end gap-[12px]">
                    <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[14px] mb-[4px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$</p>
                    <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#404040] text-[36px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>0,50</p>
                  </div>
                </div>
              </div>

              {/* Info note 1/2 */}
              <div className="flex items-start w-full">
                <div className="bg-[#ed403d] h-[72px] mr-[-1px] rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[8px] z-[2]" />
                <div className="bg-white flex gap-[24px] items-center p-[24px] relative rounded-br-[4px] rounded-tr-[4px] flex-1 border border-[#dadada]">
                  <p className="font-['Inter',sans-serif] font-semibold text-[#231f20] text-[16px] whitespace-nowrap leading-[1.5]">1/2</p>
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      {inboxIconPaths.map((d) => (
                        <path key={d} d={d} fill="#ED403D" />
                      ))}
                    </svg>
                  </div>
                  <p className="text-[#565354] text-[16px] leading-[1.5]">
                    {"Após "}
                    <span className="font-semibold">{"confirmar o valor. "}</span>
                    {"A "}
                    <span className="font-bold">gaveta do caixa abrirá</span>
                    {" para a realização do suprimento complementar."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-[24px] py-[20px]">
        {/* Volta */}
        <div className={`bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px] ${gavetaAberta ? "opacity-50" : ""}`}>
          <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute inset-[21.88%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99992 8.99992">
                <path d={svgH5.p73f4c00} fill={gavetaAberta ? "#818181" : "#ED403D"} /><path d={svgH5.p20889a80} fill={gavetaAberta ? "#818181" : "#ED403D"} />
              </svg>
            </div>
          </div>
          <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap ${gavetaAberta ? "text-[#818181]" : "text-[#ed403d]"}`} style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Volta</p>
        </div>

        {/* Confirmar */}
        {!gavetaAberta && (
          <div
            className="flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px] transition-all duration-300"
            style={{ backgroundColor: isValidValue ? '#2258e6' : '#cfcfcf', opacity: isValidValue ? 1 : 0.5 }}
          >
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[9.38%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path d={svgH5.p2010def2} fill={isValidValue ? 'white' : '#3B3B3B'} />
                  <path d={svgH5.p2ef5a800} fill={isValidValue ? 'white' : '#3B3B3B'} />
                  <path d={svgH5.p1d703980} fill={isValidValue ? 'white' : '#3B3B3B'} />
                </svg>
              </div>
            </div>
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap"
              style={{ color: isValidValue ? 'white' : '#3b3b3b', fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Confirmar
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
