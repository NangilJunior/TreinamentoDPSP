import svgPaths from "./svg-w8iuqugkat";

function Frame1() {
  return (
    <div className="content-stretch flex items-center px-[5px] relative rounded-[1000px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / life-buoy">
        <div className="absolute inset-[5.21%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
            <g id="Vector">
              <path d={svgPaths.pfa1f300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1a92b970} fill="var(--fill-0, white)" />
              <path d={svgPaths.p22e9e080} fill="var(--fill-0, white)" />
              <path d={svgPaths.p34e192b0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2dfc7d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p165ff200} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5({ onNext }: { onNext?: () => void }) {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.2] relative shrink-0 w-full">
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-white w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Olá, seja bem-vindo ao tutorial de Sangria de Caixa.
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        A sangria de caixa é um procedimento de segurança que consiste na retirada do excesso de dinheiro (notas físicas) da gaveta do PDV durante o turno de trabalho. Essa operação é realizada sempre que o valor acumulado atinge um limite estabelecido, com o objetivo de reduzir o risco de perdas financeiras em casos de assalto.
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / arrow-up">
        <div className="absolute inset-[17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4999 15.5001">
            <g id="Vector">
              <path d={svgPaths.p320bb000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p213e6480} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">V</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#2258e6] content-stretch flex flex-col gap-[28px] h-[123px] items-start p-[10px] relative rounded-[8px] shrink-0 w-[142px]">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <Frame3 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
        <p className="leading-[16px]">SANGRIA</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame({ onNext }: { onNext?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
      <Frame5 onNext={onNext} />
    </div>
  );
}

export default function Inicio({ onNext }: { onNext?: () => void }) {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] content-stretch flex gap-[24px] items-start px-[24px] py-[40px] pb-[120px] relative rounded-[8px] w-full" data-name="Início">
      <Frame1 />
      <Frame onNext={onNext} />
    </div>
  );
}