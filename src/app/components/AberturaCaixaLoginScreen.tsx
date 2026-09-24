import imgFoto from "../../imports/Login/foto-farmacia.png";
import imgMarca from "../../imports/AberturaCaixaLogin/marca-drogarias-pacheco.svg";
import imgIconeEntrar from "../../imports/AberturaCaixaLogin/icone-entrar.svg";
import imgIconeRelogio from "../../imports/AberturaCaixaLogin/icone-relogio.svg";

export function PainelFoto() {
  return (
    <div className="relative w-[646px] h-full overflow-hidden shrink-0">
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgFoto} />
    </div>
  );
}

function StatusDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px] shrink-0">
      <div className="size-[9px] rounded-full shrink-0" style={{ backgroundColor: color }} />
      <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#787878] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        {label}
      </p>
    </div>
  );
}

function RodapeStatus() {
  return (
    <div className="flex items-center justify-between px-[32px] py-[16px] w-full">
      <StatusDot color="#06AC73" label="PDV 57* Loja 0573" />
      <div className="h-[32px] w-px bg-[#B9B9B9]" />
      <StatusDot color="#ED403D" label="Caixa Fechado" />
      <div className="h-[32px] w-px bg-[#B9B9B9]" />
      <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px] shrink-0">
        <img alt="" className="size-[24px]" src={imgIconeRelogio} />
        <div className="flex flex-col gap-[2px] items-start text-[#404040] leading-[1.2]">
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            31/MAR/26
          </p>
          <p className="font-['Nunito_Sans',sans-serif] font-normal text-[12.8px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            10:17:03
          </p>
        </div>
      </div>
    </div>
  );
}

export type EntraState = "disabled" | "active" | "pressed";
export type CampoLogin = "matricula" | "senha";

interface AberturaCaixaLoginScreenProps {
  /** Campo exibido: Matrícula Gerencial (tela de login) ou Senha Gerencial (tela seguinte). */
  campo?: CampoLogin;
  /** Valor já digitado (simulação de preenchimento pelo gerente). */
  valor?: string;
  entraState?: EntraState;
}

const CAMPO_LABEL: Record<CampoLogin, string> = {
  matricula: "Matrícula Gerencial",
  senha: "Senha Gerencial",
};

const CAMPO_PLACEHOLDER: Record<CampoLogin, string> = {
  matricula: "Digite a matrícula do gerente",
  senha: "Digite sua senha",
};

export default function AberturaCaixaLoginScreen({ campo = "matricula", valor = "", entraState = "disabled" }: AberturaCaixaLoginScreenProps) {
  const entraAtivo = entraState !== "disabled";
  return (
    <div className="relative bg-white overflow-hidden rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] border border-[#d4d4d4] flex w-[1280px] h-[800px]">
      <PainelFoto />

      <div className="flex flex-col flex-1 min-w-px h-full">
        {/* Header */}
        <div className="bg-white flex gap-[12px] items-center justify-center px-[20px] py-[32px] w-full shrink-0">
          <img alt="Drogarias Pacheco" className="h-[40px] w-[160px] object-contain" src={imgMarca} />
        </div>

        <div className="px-[32px] w-full shrink-0">
          <div className="bg-[#bdbdbd] h-px w-full" />
        </div>

        {/* Conteúdo - Matrícula Gerencial */}
        <div className="bg-white flex flex-col flex-1 min-h-px gap-[72px] items-center px-[72px] py-[86px] w-full">
          <div className="flex flex-col gap-[8px] items-center text-center">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#383838] text-[31.248px] leading-[1.2] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Sistema PDV
            </p>
            <p className="font-['Nunito_Sans',sans-serif] font-normal text-[#6c6c6c] text-[16px] leading-[1.2] w-[287px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Entre com suas credenciais para acessar
            </p>
          </div>

          <div className="flex flex-col gap-[32px] items-start w-full">
            <div className="flex flex-col gap-[18px] items-center justify-center w-full">
              <div className="flex items-center w-full">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                  {CAMPO_LABEL[campo]}
                </p>
              </div>
              <div className="flex gap-[18px] items-start justify-center w-full">
                <div className="bg-white border border-[#e5e5e5] flex-1 h-[72px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center px-[16px]">
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

            <button
              disabled={!entraAtivo}
              className="flex gap-[8px] h-[72px] items-center justify-center rounded-[8px] w-full transition-all duration-200"
              style={{
                backgroundColor: entraAtivo ? "#2258e6" : "#cfcfcf",
                opacity: entraState === "disabled" ? 0.5 : 1,
                transform: entraState === "pressed" ? "scale(0.97)" : "scale(1)",
              }}
            >
              <img alt="" className="size-[16px]" src={imgIconeEntrar} />
              <span className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center text-white" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                Entra
              </span>
            </button>
          </div>
        </div>

        <div className="px-[32px] w-full shrink-0">
          <div className="bg-[#bdbdbd] h-px w-full" />
        </div>

        <RodapeStatus />
      </div>
    </div>
  );
}
