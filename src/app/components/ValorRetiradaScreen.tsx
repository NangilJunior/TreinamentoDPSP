import svgH5 from "../../imports/Home-5/svg-bveu4s30mg";

function formatCurrency(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function PDVHeader() {
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
          <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#787878] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>PDV 57* Loja 0573</p>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px]">
          <div className="size-[9px] rounded-full bg-[#06AC73] shrink-0" />
          <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#787878] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Caixa Disponível</p>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[16px] items-center px-[18px] py-[12px]">
          <div className="overflow-clip relative shrink-0 size-[40px]">
            <div className="absolute bg-[#f5f5f5] rounded-full inset-0" />
            <div className="absolute inset-0 flex items-center justify-center font-['Geist:Semibold',sans-serif] text-[#0a0a0a] text-[14px]">JS</div>
          </div>
          <div className="flex flex-col gap-[3px] w-[137px]">
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>João Silva</p>
            <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#404040] text-[12.8px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Operador • Mat. 12345</p>
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
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#404040] text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>31/MAR/26</p>
            <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#404040] text-[12.8px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>10:17:03</p>
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
          <p className="font-['Geist:Medium',sans-serif] font-medium text-[#4d4d4d] text-[14px] tracking-[3px] uppercase whitespace-nowrap">Sangria / Suprimento</p>
          <div className="h-[10px] relative shrink-0 w-[7px]">
            <div className="absolute inset-[-5%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00004 11.0001">
                <path d={svgH5.p37db7a18} stroke="#A5A5A5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="font-['Geist:Medium',sans-serif] font-medium text-[#4d4d4d] text-[14px] tracking-[3px] whitespace-nowrap">REALIZAR SANGRIA</p>
          <div className="h-[10px] relative shrink-0 w-[7px]">
            <div className="absolute inset-[-5%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00004 11.0001">
                <path d={svgH5.p37db7a18} stroke="#A5A5A5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="font-['Geist:Medium',sans-serif] font-medium text-[#4d4d4d] text-[14px] tracking-[3px] whitespace-nowrap">SANGRIA</p>
        </div>
      </div>
    </>
  );
}

export default function ValorRetiradaScreen({ valorCents }: { valorCents: number }) {
  const showValue = valorCents > 0;
  const isValidValue = valorCents === 100000;

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
                    <div className="absolute inset-[21.88%_5.21%_5.21%_5.21%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
                        <path d={svgH5.p12d7c480} fill="#ED403D" /><path d={svgH5.p3f07f800} fill="#ED403D" />
                        <path d={svgH5.pbcc5600} fill="#ED403D" /><path d={svgH5.p3777440} fill="#ED403D" />
                        <path d={svgH5.p26f80100} fill="#ED403D" /><path d={svgH5.pde21300} fill="#ED403D" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#7e7e7e] text-[25.008px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Sangria</p>
              </div>
            </div>
          </div>

          {/* Form area */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col gap-[18px] items-start px-[128px]">
              {/* Value input */}
              <div className="flex flex-col gap-[18px] items-start w-full">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Valor da retirada</p>
                <div className="h-[72px] w-full">
                  <div className="bg-white rounded-[8px] h-full relative flex items-center px-[16px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    {showValue ? (
                      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium text-[#0a0a0a] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                        R$ {formatCurrency(valorCents)}
                      </p>
                    ) : (
                      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium text-[#737373] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                        R$ 0,00
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Saldo disponível */}
              <div className="bg-white relative rounded-[6px] w-full border border-[#e8e8e8]">
                <div className="flex flex-col items-center justify-center px-[40px] py-[20px] gap-[8px]">
                  <p className="font-['Geist:Medium',sans-serif] font-medium text-[#4d4d4d] text-[12px] tracking-[3px] whitespace-nowrap">SALDO DISPONÍVEL EM CAIXA</p>
                  <div className="flex items-end gap-[12px]">
                    <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#404040] text-[14px] mb-[4px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>R$</p>
                    <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold text-[#404040] text-[36px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>1.250,00</p>
                  </div>
                </div>
              </div>

              {/* Info note 1/2 */}
              <div className="flex items-start w-full">
                <div className="bg-[#ed403d] h-[72px] mr-[-1px] rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[8px] z-[2]" />
                <div className="bg-white flex gap-[24px] items-center p-[24px] relative rounded-br-[4px] rounded-tr-[4px] flex-1 border border-[#dadada]">
                  <p className="font-['Inter',sans-serif] font-semibold text-[#231f20] text-[16px] whitespace-nowrap leading-[1.5]">1/2</p>
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="absolute inset-[13.54%_5.21%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
                        <path d={svgH5.p2058ce00} fill="#ED403D" /><path d={svgH5.p3e596e80} fill="#ED403D" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#565354] text-[16px] leading-[1.5]">
                    {"Após "}
                    <span className="font-semibold">{"confirmar o valor. "}</span>
                    {"A "}
                    <span className="font-bold">gaveta do caixa abrirá</span>
                    {" para a realização da sangria."}
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
        <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]">
          <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute inset-[21.88%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99992 8.99992">
                <path d={svgH5.p73f4c00} fill="#ED403D" /><path d={svgH5.p20889a80} fill="#ED403D" />
              </svg>
            </div>
          </div>
          <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#ed403d] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Volta</p>
        </div>

        {/* Confirmar */}
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
          <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[20px] text-center whitespace-nowrap"
            style={{ color: isValidValue ? 'white' : '#3b3b3b', fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            Confirmar
          </p>
        </div>
      </div>
    </div>
  );
}
