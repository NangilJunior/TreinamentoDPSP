import type { ReactNode } from "react";
import iconeSmartphoneNfc from "../../imports/FormasPagamentoIcons/smartphone-nfc.svg";
import { TutorialTooltip } from "./TutorialTooltip";

// Modal "Aguardando Cliente" (node 2242:37448-37456 do Figma): sobreposto,
// com backdrop escurecido/desfocado, sobre a tela de valor ainda visível
// por trás — não é uma tela cheia própria. O texto da tooltip e a descrição
// podem ser substituídos (ex.: Estorno, em que o cartão autoriza a devolução
// em vez de um pagamento); sem eles, valem os textos de Formas de Pagamento.
export default function MaquininhaAguardandoScreen({ metodo, tooltip, descricao }: { metodo: "debito" | "credito"; tooltip?: ReactNode; descricao?: string }) {
  return (
    <>
      <div className="fade-in-delay absolute inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[4px] rounded-[20px] z-[45]" />
      <div className="fade-in-delay absolute bottom-0 left-0 right-0 z-[50] bg-white flex flex-col items-center px-[40px] py-[32px] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[16px] pointer-events-none">
          <TutorialTooltip width={720}>
            {tooltip ?? (
              <div className="flex flex-col gap-[4px]">
                <p className="font-bold leading-[1.2]">Aguardando o pagamento</p>
                <p>O cliente insere ou aproxima o cartão de {metodo === "debito" ? "débito" : "crédito"} no Pinpad e realiza o pagamento. Após o processamento, o sistema avança automaticamente.</p>
              </div>
            )}
          </TutorialTooltip>
        </div>
        <div className="flex flex-col gap-[16px] items-center w-full">
          <div className="flex flex-col gap-[16px] items-center">
            <div className="bg-[#fbf2d7] flex items-center justify-center p-[10px] rounded-full">
              <img src={iconeSmartphoneNfc} alt="" className="size-[32px]" />
            </div>
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#7e7e7e] text-[25.008px] leading-[1.2]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Aguardando Cliente
            </p>
          </div>
          <p className="font-['Nunito_Sans',sans-serif] text-[#a3a3a3] text-[18px] text-center leading-[1.2] max-w-[532px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            {descricao ?? "Aguardando o cliente realizar o pagamento no Pinpad..."}
          </p>
        </div>
      </div>
    </>
  );
}
