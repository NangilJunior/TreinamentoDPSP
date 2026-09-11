import imgFoto from "../../imports/AberturaCaixaLogin/foto-farmaceutica.png";
import imgMarca from "../../imports/AberturaCaixaLogin/marca-drogarias-pacheco.svg";
import imgMarcaDestaque from "../../imports/AberturaCaixaLogin/brilho-retangulo.svg";
import imgIconeEntrar from "../../imports/AberturaCaixaLogin/icone-entrar.svg";
import imgIconeRelogio from "../../imports/AberturaCaixaLogin/icone-relogio.svg";

// Recorte em formato de cruz que revela a foto nítida (camada B), enquanto o
// restante do painel mostra a mesma foto desfocada e tingida de âmbar
// (camada A) — reproduz o efeito "Subtract" do Figma (node 999:10439) sem
// depender do asset exportado (que embute o blur via foreignObject e não
// renderiza via <img>). O recorte usa só o subcaminho da cruz (não o
// composto "retângulo menos cruz"), evitando ambiguidade de fill-rule.
const CRUZ_PATH =
  'path("M434.045 156.196C381.954 156.196 340.017 198.087 340.017 250.121V343.167H246.868C194.777 343.167 152.84 385.058 152.84 437.092C152.84 489.126 194.777 531.017 246.868 531.017H340.017V624.063C340.017 676.098 381.954 717.988 434.045 717.988C486.136 717.988 528.073 676.098 528.073 624.063V531.017H621.222C673.313 531.017 715.25 489.126 715.25 437.092C715.25 385.058 673.313 343.167 621.222 343.167H528.073V250.121C528.073 198.087 486.136 156.196 434.045 156.196Z")';

const FOTO_ESTILO_BASE = { width: "1563px", height: "876px", maxWidth: "none", maxHeight: "none", objectFit: "cover" as const };

function PainelFoto() {
  return (
    <div className="relative w-[646px] h-full overflow-hidden shrink-0 bg-[#3a2a1a]">
      {/* Camada A: foto desfocada + tingida de âmbar, preenchendo o painel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute"
          style={{ ...FOTO_ESTILO_BASE, left: "-709px", top: "0px", filter: "blur(9.3px)" }}
          src={imgFoto}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(247,148,51,0.3)" }} />
      </div>

      {/* Camada B: mesma foto, nítida, recortada apenas na janela em cruz */}
      <div
        className="absolute overflow-hidden pointer-events-none"
        style={{ left: "-118px", top: "-15px", width: "870px", height: "856px", clipPath: CRUZ_PATH }}
      >
        <img alt="" className="absolute" style={{ ...FOTO_ESTILO_BASE, left: "-591px", top: "15px" }} src={imgFoto} />
      </div>

      <img
        alt=""
        className="absolute pointer-events-none"
        style={{ left: "61.4375px", top: "173.84px", width: "164.13px", height: "162.84px" }}
        src={imgMarcaDestaque}
      />
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
