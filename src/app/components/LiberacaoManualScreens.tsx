import { FileSpreadsheet } from "lucide-react";
import svgH5 from "../../imports/Home-5/svg-bveu4s30mg";
import { BottomSheetFooter } from "./ConvenioScreens";

// Cabeçalho idêntico ao do PDV (mesmo usado em EntradaOperadorScreen.tsx),
// mas com a identidade do operador que está com a sessão aberta no
// terminal — o gerente apenas autoriza a operação, sem fazer login.
function Header() {
  return (
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
  );
}

type CampoGerente = "matricula" | "senha";

const CAMPO_LABEL: Record<CampoGerente, string> = {
  matricula: "Matrícula Gerencial",
  senha: "Senha Gerencial",
};

const CAMPO_PLACEHOLDER: Record<CampoGerente, string> = {
  matricula: "Digite a matrícula gerencial",
  senha: "Digite a senha gerencial",
};

// Autorização do gerente para liberar um medicamento controlado sem receita
// (node 7071:40163 do Figma) — reaproveita a mesma simulação de digitação de
// matrícula/senha (auto-preenchida) já usada no fluxo de Abertura de Caixa,
// mas com um cabeçalho e um aviso próprios, já que a operação ocorre no meio
// de uma venda (o operador já está logado no terminal).
export default function AutorizacaoGerenteMedicamentoScreen({ campo = "matricula", valor = "", entraState = "disabled" }: { campo?: CampoGerente; valor?: string; entraState?: "disabled" | "active" | "pressed" }) {
  const entraAtivo = entraState !== "disabled";
  return (
    <div className="relative bg-white overflow-hidden rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] border border-[#d4d4d4] flex flex-col w-[1280px] h-[800px]">
      <Header />
      <div className="bg-[#bdbdbd] h-px shrink-0 w-full" />

      <div className="shrink-0 w-full drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        <div className="flex gap-[24px] items-center p-[24px]">
          <FileSpreadsheet className="size-[24px] text-[#4d4d4d]" strokeWidth={1.8} />
          <p className="font-['Geist',sans-serif] font-medium text-[#4d4d4d] text-[14px] tracking-[3px] uppercase whitespace-nowrap">
            Medicação Sem Receita Médica
          </p>
        </div>
      </div>

      <div className="bg-white flex-1 flex flex-col items-center p-[20px] w-full">
        <div className="flex flex-col gap-[18px] h-[202px] items-center justify-center px-[240px] w-full">
          <div className="flex items-center w-full">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              {CAMPO_LABEL[campo]}
            </p>
          </div>
          <div className="flex gap-[10px] items-center w-full">
            {campo === "matricula" && (
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>F -</p>
            )}
            <div className="flex-1 h-[72px]">
              <div className="bg-white rounded-[8px] h-full relative flex items-center px-[16px] border border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                {valor ? (
                  campo === "senha" ? (
                    <p className="font-['Nunito_Sans',sans-serif] font-normal text-[#404040] text-[20px] tracking-[8px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      {"●".repeat(valor.length)}
                    </p>
                  ) : (
                    <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px] tracking-[6px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                      {valor}
                    </p>
                  )
                ) : (
                  <p className="font-['Nunito_Sans',sans-serif] font-medium text-[#737373] text-[20px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                    {CAMPO_PLACEHOLDER[campo]}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[24px] pb-[24px] w-full shrink-0">
        <BottomSheetFooter entraAtivo={entraAtivo} />
      </div>
    </div>
  );
}
