import { useState, useEffect, useRef } from "react";
import svgH from "../../imports/Home-1/svg-o2mimlgt7x";
import svgH3 from "../../imports/Home-3/svg-1kscj51chh";

const MATRICULA = "5732465";
const SENHA_DOTS = 7;

type EntraState = "disabled" | "active" | "pressed";
type Screen = 1 | 2 | 3;

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

// ── Shared Header ─────────────────────────────────────────────────────────────

function PDVHeader() {
  return (
    <>
      <div className="bg-white flex items-center justify-between px-[20px] py-[20px] shrink-0 w-full">
        <div className="h-[40px] overflow-clip relative shrink-0 w-[160px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 40">
            <path d={svgH.p1b273200} fill="#ED403D" />
            <path d={svgH.p30032100} fill="#ED403D" />
            <path d={svgH.p31a81900} fill="#61BAE8" />
            <path d={svgH.p29d58b00} fill="white" />
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
                  <path d={svgH.p1228b80} fill="#525252" /><path d={svgH.p1e471e00} fill="#525252" />
                  <path d={svgH.pe868500} fill="#525252" /><path d={svgH.p1afc9570} fill="#525252" />
                  <path d={svgH.p28515c40} fill="#525252" /><path d={svgH.p996db00} fill="#525252" />
                  <path d={svgH.p3bf0d700} fill="#525252" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-[8px] items-center px-[8px] py-[6px]">
            <div className="size-[9px] rounded-full bg-[#06AC73] shrink-0" />
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[5.21%_13.54%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
                  <path d={svgH.p263daa00} fill="#525252" /><path d={svgH.p10ed4b60} fill="#525252" />
                  <path d={svgH.p4c65000} fill="#525252" /><path d={svgH.pe6ca000} fill="#525252" />
                  <path d={svgH.p3da52900} fill="#525252" /><path d={svgH.p2d332800} fill="#525252" />
                  <path d={svgH.p3bf9b400} fill="#525252" /><path d={svgH.pa671400} fill="#525252" />
                  <path d={svgH.p6e954c0} fill="#525252" /><path d={svgH.p2594ff00} fill="#525252" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-[8px] items-center px-[8px] py-[6px]">
            <div className="size-[9px] rounded-full bg-[#06AC73] shrink-0" />
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[5.21%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
                  <path d={svgH.p2b0c6000} fill="#525252" />
                  <path d={svgH.p1f60300} fill="#525252" />
                  <path d={svgH.p3c19300} fill="#525252" />
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
                <path d={svgH.p1ffceb00} fill="#525252" /><path d={svgH.pd91bf00} fill="#525252" />
                <path d={svgH.p3ef72a00} fill="#525252" /><path d={svgH.p11d84000} fill="#525252" />
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
      <div className="shrink-0 w-full drop-shadow-[0px_4px_8px_rgba(0,0,0,0.06)]">
        <div className="flex items-center p-[24px]">
          <div className="flex gap-[24px] items-center">
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[21.88%_5.21%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 13.5">
                  <path d={svgH.p18b3a300} fill="#A6A6A6" />
                  <path d={svgH.pde21300} fill="#A6A6A6" />
                  <path d={svgH.p32886000} fill="#A6A6A6" />
                </svg>
              </div>
            </div>
            <p className="font-['Geist:Medium',sans-serif] font-medium text-[#4d4d4d] text-[14px] tracking-[3px] uppercase whitespace-nowrap">Sangria / Suprimento</p>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Buttons ───────────────────────────────────────────────────────────────────

function VoltaButton() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]">
      <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="overflow-clip relative shrink-0 size-[16px]">
        <div className="absolute inset-[21.88%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99992 8.99992">
            <path d={svgH.p73f4c00} fill="#ED403D" />
            <path d={svgH.p20889a80} fill="#ED403D" />
          </svg>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#ed403d] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Voltar</p>
    </div>
  );
}

function EntraButton({ state }: { state: EntraState }) {
  const active = state !== "disabled";
  return (
    <div
      className="flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px] transition-all duration-200"
      style={{
        backgroundColor: active ? "#2258e6" : "#cfcfcf",
        opacity: state === "disabled" ? 0.5 : 1,
        transform: state === "pressed" ? "scale(0.95)" : "scale(1)",
      }}
    >
      <div className="overflow-clip relative shrink-0 size-[16px]">
        <div className="absolute inset-[9.38%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgH.p2010def2} fill={active ? "white" : "#3B3B3B"} />
            <path d={svgH.p2ef5a800} fill={active ? "white" : "#3B3B3B"} />
            <path d={svgH.p1d703980} fill={active ? "white" : "#3B3B3B"} />
          </svg>
        </div>
      </div>
      <p
        className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[20px] text-center whitespace-nowrap"
        style={{ color: active ? "white" : "#3b3b3b", fontVariationSettings: '"YTLC" 500, "wdth" 100' }}
      >
        Entra
      </p>
    </div>
  );
}

function BottomButtons({ entraState }: { entraState: EntraState }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-[24px] py-[20px]">
      <VoltaButton />
      <EntraButton state={entraState} />
    </div>
  );
}

// ── Screen 1: Matrícula ───────────────────────────────────────────────────────

function MatriculaScreen({ typedText, entraState }: { typedText: string; entraState: EntraState }) {
  return (
    <div className="relative h-full w-full flex flex-col">
      <PDVHeader />
      <div className="bg-white flex-1 p-[20px]">
        <div className="h-[202px] w-full flex flex-col items-center justify-center px-[240px]">
          <div className="flex items-center w-full mb-[18px]">
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Matrícula Gerencial
            </p>
          </div>
          <div className="flex gap-[10px] items-center w-full">
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#404040] text-[20px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>F -</p>
            <div className="flex-1 h-[72px]">
              <div className="bg-white rounded-[8px] h-full relative flex items-center px-[16px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                {typedText ? (
                  <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#404040] text-[20px] tracking-[6px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    {typedText}
                  </p>
                ) : (
                  <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium text-[#737373] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    Matrícula Gerencial
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomButtons entraState={entraState} />
    </div>
  );
}

// ── Screen 2: Senha ───────────────────────────────────────────────────────────

function SenhaScreen({ dotCount, entraState }: { dotCount: number; entraState: EntraState }) {
  return (
    <div className="relative h-full w-full flex flex-col">
      <PDVHeader />
      <div className="bg-white flex-1 p-[20px]">
        <div className="w-full flex flex-col gap-[18px] items-center justify-center px-[240px] pt-[20px]">
          <div className="flex items-center w-full">
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Senha Gerencial
            </p>
          </div>
          <div className="h-[72px] w-full">
            <div className="bg-white rounded-[8px] h-full relative flex items-center px-[16px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              {dotCount > 0 ? (
                <p className="text-[#404040] text-[20px] tracking-[8px]">
                  {"●".repeat(dotCount)}
                </p>
              ) : (
                <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium text-[#737373] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  Digite sua senha
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <BottomButtons entraState={entraState} />
    </div>
  );
}

// ── Screen 3: Seleção ─────────────────────────────────────────────────────────

function SelectionScreen() {
  return (
    <div className="relative h-full w-full flex flex-col">
      <PDVHeader />
      <style>{`
        @keyframes fade-in-delay {
          0% { opacity: 0; }
          70% { opacity: 0; }
          100% { opacity: 1; }
        }
        .fade-in-delay {
          animation: fade-in-delay 2s ease-in-out forwards;
        }
      `}</style>
      <div className="bg-white flex-1 flex items-center justify-center pb-[112px]">
        <div className="flex gap-[18px] items-center">
          {/* Realizar Sangria */}
          <div className="relative">
            {/* Tooltip */}
            <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] pointer-events-none whitespace-nowrap flex flex-col items-center">
              <div className="bg-[#111] text-white text-[13px] font-['Nunito_Sans',sans-serif] leading-[1.6] px-[20px] py-[14px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                Para realizar a <span className="font-bold">Sangria de Caixa</span>, pressione a tecla <span className="font-bold">[1]</span> no teclado do PDV.
              </div>
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#111]" />
            </div>
            <div className="bg-[rgba(255,255,255,0.4)] flex gap-[16px] h-[72px] items-start px-[32px] py-[10px] relative rounded-[8px] w-[428px]">
              <div aria-hidden className="absolute border-2 border-[#e9e9e9] inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium h-full justify-center text-[#878787] text-[16px] w-[10px]">
                <p className="leading-[16px]">1</p>
              </div>
              <div className="flex h-full items-center justify-center shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[21.88%_5.21%_5.21%_5.21%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
                      <path d={svgH3.p12d7c480} fill="#ED403D" />
                      <path d={svgH3.p3f07f800} fill="#ED403D" />
                      <path d={svgH3.pbcc5600} fill="#ED403D" />
                      <path d={svgH3.p3777440} fill="#ED403D" />
                      <path d={svgH3.p26f80100} fill="#ED403D" />
                      <path d={svgH3.pde21300} fill="#ED403D" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Nunito_Sans:Medium',sans-serif] font-medium h-full justify-center min-w-px text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                <p className="leading-[1.2]">Realizar Sangria</p>
              </div>
            </div>
          </div>
          {/* Consultar Suprimento */}
          <div className="bg-[rgba(255,255,255,0.4)] flex gap-[16px] h-[72px] items-start px-[32px] py-[10px] relative rounded-[8px] w-[428px]">
            <div aria-hidden className="absolute border-2 border-[#e9e9e9] inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium h-full justify-center text-[#878787] text-[16px] w-[10px]">
              <p className="leading-[16px]">2</p>
            </div>
            <div className="flex h-full items-center justify-center shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[21.88%_5.21%_5.21%_5.21%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
                    <path d={svgH3.p12d7c480} fill="#44B0E8" />
                    <path d={svgH3.p2f881700} fill="#44B0E8" />
                    <path d={svgH3.p3f07f800} fill="#44B0E8" />
                    <path d={svgH3.pbcc5600} fill="#44B0E8" />
                    <path d={svgH3.p26f80100} fill="#44B0E8" />
                    <path d={svgH3.pde21300} fill="#44B0E8" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Nunito_Sans:Medium',sans-serif] font-medium h-full justify-center min-w-px text-[#404040] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              <p className="leading-[1.2]">Consultar Suprimento de Caixa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function SangriaFlow({ onReachSelection }: { onReachSelection?: () => void }) {
  const [screen, setScreen] = useState<Screen>(1);
  const [opacity, setOpacity] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [dotCount, setDotCount] = useState(0);
  const [entraState, setEntraState] = useState<EntraState>("disabled");
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;

    const run = async () => {
      const w = (ms: number) => wait(ms);

      // Fade in
      await w(80);
      if (cancelledRef.current) return;
      setOpacity(1);

      // ── Screen 1: Matrícula ───────────────────────
      await w(1200);
      if (cancelledRef.current) return;

      for (let i = 1; i <= MATRICULA.length; i++) {
        await w(200);
        if (cancelledRef.current) return;
        setTypedText(MATRICULA.slice(0, i));
      }

      await w(700);
      if (cancelledRef.current) return;
      setEntraState("active");

      await w(1400);
      if (cancelledRef.current) return;
      setEntraState("pressed");

      // Fade out → switch screen → fade in
      await w(300);
      if (cancelledRef.current) return;
      setOpacity(0);
      await w(400);
      if (cancelledRef.current) return;
      setScreen(2);
      setEntraState("disabled");
      setTypedText("");
      await w(80);
      if (cancelledRef.current) return;
      setOpacity(1);

      // ── Screen 2: Senha ───────────────────────────
      await w(1100);
      if (cancelledRef.current) return;

      for (let i = 1; i <= SENHA_DOTS; i++) {
        await w(300);
        if (cancelledRef.current) return;
        setDotCount(i);
      }

      await w(700);
      if (cancelledRef.current) return;
      setEntraState("active");

      await w(1400);
      if (cancelledRef.current) return;
      setEntraState("pressed");

      // Fade out → switch screen → fade in
      await w(300);
      if (cancelledRef.current) return;
      setOpacity(0);
      await w(400);
      if (cancelledRef.current) return;
      setScreen(3);
      onReachSelection?.();
      await w(80);
      if (cancelledRef.current) return;
      setOpacity(1);
    };

    run();
    return () => {
      cancelledRef.current = true;
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-white overflow-hidden rounded-[20px]">
      <div className="size-full transition-opacity duration-300" style={{ opacity }}>
        {screen === 1 && <MatriculaScreen typedText={typedText} entraState={entraState} />}
        {screen === 2 && <SenhaScreen dotCount={dotCount} entraState={entraState} />}
        {screen === 3 && <SelectionScreen />}
      </div>
    </div>
  );
}
