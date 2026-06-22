import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/**
 * Escala proporcionalmente um conteúdo de largura fixa (`designWidth`) para
 * caber na largura disponível do contêiner, sem distorcer os componentes.
 * Reserva a altura já escalada para que o fluxo da página continue correto.
 * Usado para o simulador de PDV exibido inline na página.
 */
export function ScaleToFit({
  designWidth,
  children,
  className,
}: {
  designWidth: number;
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const update = () => {
      const available = container.clientWidth;
      const s = Math.min(1, available / designWidth);
      setScale(s);
      setHeight(content.offsetHeight * s);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    ro.observe(content);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ height, display: "flex", justifyContent: "center" }}
    >
      <div
        ref={contentRef}
        style={{
          width: designWidth,
          flex: "none",
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Calcula um fator de escala (≤ `max`) para encaixar um "canvas" de design
 * (`designWidth` × `designHeight`) na viewport, descontando as margens
 * informadas. Reage a `resize`. Usado nas telas que são cards fixos
 * centralizados (Login e o modo treinamento em tela cheia).
 */
export function useFitScale(
  designWidth: number,
  designHeight: number,
  opts?: { paddingX?: number; paddingY?: number; max?: number },
) {
  const { paddingX = 48, paddingY = 48, max = 1 } = opts ?? {};

  const compute = () => {
    if (typeof window === "undefined") return max;
    const availW = window.innerWidth - paddingX * 2;
    const availH = window.innerHeight - paddingY * 2;
    return Math.max(0, Math.min(max, availW / designWidth, availH / designHeight));
  };

  const [scale, setScale] = useState(compute);

  useLayoutEffect(() => {
    const onResize = () => setScale(compute());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [designWidth, designHeight, paddingX, paddingY, max]);

  return scale;
}
