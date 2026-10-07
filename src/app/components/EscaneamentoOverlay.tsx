import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// Larguras relativas (×2 px) das barras e dos espaços do código de barras ilustrativo,
// alternando barra/espaço. Fixas para o desenho ser sempre o mesmo.
const BARRAS = [4, 2, 2, 2, 6, 2, 2, 4, 2, 2, 4, 2, 6, 2, 2, 2, 4, 4, 2, 2, 2, 4, 6, 2, 2, 2, 4, 2, 2, 4, 2, 2, 6, 4, 2, 2, 4, 2, 2, 2, 6, 2, 4];

const DURACAO_LEITURA_MS = 2200;
const DURACAO_TOTAL_MS = 3200;

const ESTILOS = `
  @keyframes escaneamento-laser {
    0% { top: 6%; }
    50% { top: 90%; }
    100% { top: 6%; }
  }
  @keyframes escaneamento-check {
    0% { transform: scale(0.4); opacity: 0; }
    70% { transform: scale(1.12); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes escaneamento-entrada {
    0% { transform: scale(0.94); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
`;

// Simulação do escaneamento de um produto: um card sobre a tela do PDV com um
// código de barras e um laser vermelho que o varre duas vezes; ao terminar,
// aparece o check verde com "Produto identificado" (o código continua preto)
// e o card chama onConcluido para o fluxo seguir.
export function EscaneamentoOverlay({ onConcluido }: { onConcluido: () => void }) {
  const [lido, setLido] = useState(false);
  useEffect(() => {
    const timers = [
      setTimeout(() => setLido(true), DURACAO_LEITURA_MS),
      setTimeout(onConcluido, DURACAO_TOTAL_MS),
    ];
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute inset-0 z-[60] flex items-center justify-center rounded-[20px] bg-[rgba(0,0,0,0.4)] backdrop-blur-[4px]">
      <style>{ESTILOS}</style>
      <div className="bg-white flex flex-col items-center gap-[24px] px-[56px] pt-[40px] pb-[32px] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] animate-[escaneamento-entrada_200ms_ease-out]">
        <div className="relative px-[24px] py-[16px]">
          <div className="flex items-stretch h-[120px]">
            {BARRAS.map((largura, i) => (
              <div
                key={i}
                style={{ width: largura * 2, backgroundColor: i % 2 === 0 ? "#262626" : "transparent" }}
              />
            ))}
          </div>
          <p className="text-center font-['Chivo_Mono',sans-serif] text-[14px] tracking-[4px] text-[#404040] mt-[8px]">
            7 891234 567890
          </p>
          {!lido && (
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 h-[2px] rounded-full bg-[#ef3346] shadow-[0_0_8px_2px_rgba(239,51,70,0.7)] animate-[escaneamento-laser_1100ms_ease-in-out_2]"
            />
          )}
        </div>
        <div className="flex items-center gap-[10px] h-[32px]">
          {lido ? (
            <>
              <div className="bg-[#f2fbf9] flex items-center justify-center rounded-full size-[32px] animate-[escaneamento-check_300ms_ease-out]">
                <Check size={20} className="text-[#00ae8e]" strokeWidth={2.2} />
              </div>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[1.2] text-[#00ae8e]" style={fontVariation}>
                Produto identificado
              </p>
            </>
          ) : (
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[1.2] text-[#404040]" style={fontVariation}>
              Escaneando produto...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
