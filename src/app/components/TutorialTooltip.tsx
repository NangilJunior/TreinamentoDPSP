import { ReactNode } from "react";

interface TutorialTooltipProps {
  children: ReactNode;
  /** Largura fixa em pixels. Quando omitida, a tooltip preenche o espaço do wrapper posicionador. */
  width?: number;
  /** Encolhe ao conteúdo (uma linha só), em vez de preencher a largura do wrapper. */
  fitContent?: boolean;
}

export function TutorialTooltip({ children, width, fitContent }: TutorialTooltipProps) {
  return (
    <div className={fitContent ? "whitespace-nowrap" : undefined} style={width ? { width } : undefined}>
      <div className="bg-[#111] text-white text-[18px] font-['Nunito_Sans',sans-serif] leading-[1.6] px-[20px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {children}
      </div>
      <div className="flex justify-center">
        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#111]" />
      </div>
    </div>
  );
}
