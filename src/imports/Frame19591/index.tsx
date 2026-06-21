import svgPaths from "./svg-h9jo2wf7vd";

function Frame4() {
  return (
    <div className="bg-[#ebf5fb] content-stretch flex items-center p-[10px] relative rounded-[1000px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon / banknote">
        <div className="absolute inset-[21.88%_5.21%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6667 18">
            <g id="Vector">
              <path d={svgPaths.p2fc83580} fill="var(--fill-0, #3B9EDB)" />
              <path d={svgPaths.p31df9b00} fill="var(--fill-0, #3B9EDB)" />
              <path d={svgPaths.p10e7a400} fill="var(--fill-0, #3B9EDB)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center leading-[1.2] min-w-px py-[4px] relative text-[#7e7e7e]">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[25.008px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Sangria / Suprimento
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Para realizar a sangria ou suprimento será necessária a autorização do gerente. Pressione [ENTRA] para confirmar ou [VOLTA] para cancelar.
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] h-[72px] items-center justify-center min-h-[40px] px-[24px] py-[10px] relative rounded-[8px] shrink-0 w-[185px]" data-name="Button">
        <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
          <div className="absolute inset-[17.71%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
              <g id="Vector">
                <path d={svgPaths.p36b34e80} fill="var(--fill-0, #ED403D)" />
                <path d={svgPaths.p1c890480} fill="var(--fill-0, #ED403D)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ed403d] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          <p className="leading-[1.2]">Volta</p>
        </div>
      </div>
      <div className="bg-[#2258e6] content-stretch flex gap-[8px] h-[72px] items-center justify-center min-h-[40px] px-[24px] py-[10px] relative rounded-[8px] shrink-0 w-[185px]" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
          <div className="absolute inset-[9.38%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <g id="Vector">
                <path d={svgPaths.p2010def2} fill="var(--fill-0, white)" />
                <path d={svgPaths.p2ef5a800} fill="var(--fill-0, white)" />
                <path d={svgPaths.p1d703980} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          <p className="leading-[1.2]">Entra</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)] flex flex-col gap-[32px] items-start px-[40px] py-[32px] relative rounded-tl-[24px] rounded-tr-[24px] size-full">
      <Frame3 />
      <Frame1 />
    </div>
  );
}