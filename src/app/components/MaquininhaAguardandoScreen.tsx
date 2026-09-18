import iconeSmartphoneNfc from "../../imports/FormasPagamentoIcons/smartphone-nfc.svg";

// Modal "Aguardando Cliente" (node 2242:37448-37456 do Figma): sobreposto,
// com backdrop escurecido/desfocado, sobre a tela de valor ainda visível
// por trás — não é uma tela cheia própria.
export default function MaquininhaAguardandoScreen({ metodo }: { metodo: "debito" | "credito" }) {
  return (
    <>
      <div className="fade-in-delay absolute inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[4px] rounded-[20px] z-[45]" />
      <div className="fade-in-delay absolute bottom-0 left-0 right-0 z-[50] bg-white flex flex-col items-center px-[40px] py-[32px] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[16px] w-[720px] pointer-events-none">
          <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-white leading-[1.2]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Aguardando o pagamento
              </p>
              <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                O cliente insere ou aproxima o cartão de {metodo === "debito" ? "débito" : "crédito"} no Pinpad e realiza o pagamento. Após o processamento, o sistema avança automaticamente.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-0">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
          </div>
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
            Aguardando o cliente realizar o pagamento no Pinpad...
          </p>
        </div>
      </div>
    </>
  );
}
