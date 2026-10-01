import { ReactNode } from "react";
import { BanknoteArrowDown, QrCode, CreditCard, FileSpreadsheet, LoaderCircle, Check, ReceiptText, CalendarClock } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import { RodapeVoltaEntra } from "./ConsultaPrecoScreens";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// Valor estornado no exemplo (R$ 8,50), em centavos, e o ID impresso no
// comprovante da venda original, digitados pelo operador nas etapas de
// PIX e de Crédito.
export const VALOR_ESTORNO_EXEMPLO_CENTS = 850;
export const ID_ESTORNO_EXEMPLO = "111222333";

const formatarCentavos = (cents: number) => (cents / 100).toFixed(2).replace(".", ",");

export type MetodoEstorno = "pix" | "credito";

// Identidade visual de cada forma de estorno nas telas de valor, ID e
// resultado (nodes 3121:44900/44966/45068 para PIX e 3121:44578/44644/44443
// para Crédito). O subtítulo da tela de ID do Crédito no Figma repete o
// texto do PIX; aqui ele foi adaptado ao comprovante do cartão.
const METODOS: Record<MetodoEstorno, {
  titulo: string;
  icone: ReactNode;
  iconeFundo: string;
  subtituloId: string;
  rotuloId: string;
  tituloResultado: string;
  meioPagamento: string;
  iconeMeio: ReactNode;
}> = {
  pix: {
    titulo: "PIX",
    icone: <QrCode size={32} className="text-[#0088ae]" strokeWidth={1.8} />,
    iconeFundo: "#f2f7fb",
    subtituloId: "NSU/EndToEnd ID impresso no comprovante do PIX",
    rotuloId: "ID impresso no comprovante do PIX:",
    tituloResultado: "Reembolso realizado",
    meioPagamento: "PIX",
    iconeMeio: <QrCode size={24} className="text-[#707070]" strokeWidth={1.8} />,
  },
  credito: {
    titulo: "Crédito",
    icone: <CreditCard size={32} className="text-[#9400ae]" strokeWidth={1.8} />,
    iconeFundo: "#fbf2f8",
    subtituloId: "NSU impresso no comprovante do Crédito",
    rotuloId: "ID impresso no comprovante do Crédito:",
    tituloResultado: "Estorno realizado",
    meioPagamento: "Cartão Visa",
    iconeMeio: <CreditCard size={24} className="text-[#707070]" strokeWidth={1.8} />,
  },
};

// Cabeçalho comum às telas do Estorno: header do PDV e a trilha com o ícone
// banknote-arrow-down.
function EstornoCabecalho({ trilha }: { trilha: string }) {
  return (
    <>
      <PDVHeader trilha={[]} />
      <div className="flex items-center gap-[24px] p-[24px] shrink-0 drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        <BanknoteArrowDown size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />
        <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#4d4d4d] tracking-[3px] uppercase whitespace-nowrap">
          {trilha}
        </p>
      </div>
    </>
  );
}

// Banner preto ao pé do PDV (mesmo padrão dos fluxos de DDG e Cancelamento
// Parcial), com a ilustração opcional da tecla a ser pressionada.
export function BannerEstorno({ titulo, children, tecla }: { titulo: string; children: ReactNode; tecla?: ReactNode }) {
  return (
    <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
      <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
        <div className="flex items-start pt-[4px] shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
            <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col gap-[8px] flex-1">
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={fontVariation}>
            {titulo}
          </p>
          <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={fontVariation}>
            {children}
          </p>
        </div>
        {tecla}
      </div>
    </div>
  );
}

// Ilustração de tecla com letra e rótulo (ex.: [I] Estorno Pgto), usada à
// direita do banner.
export function TeclaIlustracao({ letra, rotulo }: { letra: string; rotulo: ReactNode }) {
  return (
    <div className="bg-[#2258e6] flex flex-col justify-between h-[123px] items-start p-[10px] relative rounded-[8px] w-[142px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <div className="font-['Chivo_Mono',sans-serif] font-medium text-[14px] text-white leading-[16px]">{letra}</div>
      <div className="font-['Geist',sans-serif] font-bold text-[16px] text-center text-white w-full leading-[16px]">{rotulo}</div>
    </div>
  );
}

// Ilustração de tecla numérica (ex.: [1]), igual à do passo 73 do DDG.
export function TeclaNumericaIlustracao({ numero }: { numero: string }) {
  return (
    <div className="bg-[#2258e6] flex items-center justify-center h-[123px] relative rounded-[8px] w-[142px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Nunito_Sans',sans-serif] font-black text-[28px] leading-[1.2] text-white" style={fontVariation}>{numero}</p>
    </div>
  );
}

function OpcaoEstorno({ tecla, rotulo, className }: { tecla: string; rotulo: string; className: string }) {
  return (
    <div className={`border border-[#ddd] flex gap-[20px] h-[70px] items-center px-[18px] py-[10px] rounded-[6px] ${className}`}>
      <div className="border border-[#2258e6] flex items-center justify-center px-[24px] py-[10px] rounded-[8px] w-[60px] shrink-0">
        <p className="font-['Inter',sans-serif] font-semibold text-[24px] leading-[1.2] text-[#2258e6]">{tecla}</p>
      </div>
      <p className="font-['Geist',sans-serif] font-medium text-[12px] leading-[20px] text-[#707070] tracking-[3px] uppercase whitespace-nowrap">{rotulo}</p>
    </div>
  );
}

// Passo 78 (node 5767:59844) — tipo de estorno: [1] TEF, [2] Farmácia
// Popular ou [3] Convênio. O exemplo segue pela tecla [1].
export function EstornoTipoScreen() {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <EstornoCabecalho trilha="Estorno convênio" />
      <div className="flex flex-col p-[20px]">
        <div className="flex gap-[18px] items-center justify-center px-[180px] py-[12px]">
          <OpcaoEstorno tecla="1" rotulo="TEF" className="flex-1 min-w-0" />
          <OpcaoEstorno tecla="2" rotulo="Farmácia Popular" className="flex-1 min-w-0" />
        </div>
        <div className="flex items-center px-[180px] py-[12px]">
          <OpcaoEstorno tecla="3" rotulo="Convênio" className="w-[431px] shrink-0" />
        </div>
      </div>
    </div>
  );
}

function CardFormaEstorno({ icone, iconeFundo, titulo, descricao, tecla }: { icone: ReactNode; iconeFundo: string; titulo: string; descricao: string; tecla: string }) {
  return (
    <div className="border border-[#e5e5e5] flex flex-1 min-w-0 items-center px-[12px] py-[16px] rounded-[8px]">
      <div className="flex flex-1 min-w-0 flex-col gap-[24px] items-start justify-center">
        <div className="flex items-center p-[10px] rounded-[8px] shrink-0" style={{ backgroundColor: iconeFundo }}>
          {icone}
        </div>
        <div className="flex flex-col gap-[4px] w-full leading-[1.2]">
          <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[18px] text-[#1a1a1a]" style={fontVariation}>{titulo}</p>
          <p className="font-['Nunito_Sans',sans-serif] text-[10.8px] text-[#747474]" style={fontVariation}>{descricao}</p>
        </div>
        <div className="bg-[rgba(34,88,230,0.18)] flex items-center justify-center px-[8px] py-[4px] rounded-[4px] shrink-0">
          <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2] text-[#2258e6] whitespace-nowrap" style={fontVariation}>{tecla}</p>
        </div>
      </div>
    </div>
  );
}

// Passos 79 e 84 (node 3121:45374) — forma de pagamento da venda original:
// [Voucher] para PIX, [Débito] e [Crédito].
export function EstornoFormaScreen() {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <EstornoCabecalho trilha="Estorno convênio / TEF" />
      <div className="flex-1 min-h-0 flex flex-col justify-center p-[20px]">
        <div className="flex gap-[18px] items-center justify-center px-[240px]">
          <CardFormaEstorno
            icone={<QrCode size={32} className="text-[#0088ae]" strokeWidth={1.8} />}
            iconeFundo="#f2f7fb"
            titulo="Cancelamento de PIX"
            descricao="Estorno imediato via chave de endereçamento ou QR Code estático."
            tecla="Voucher"
          />
          <CardFormaEstorno
            icone={<CreditCard size={32} className="text-[#006bae]" strokeWidth={1.8} />}
            iconeFundo="#f2f8fb"
            titulo="Débito"
            descricao="Reversão de transação à vista. Requer presença física do cartão."
            tecla="Débito"
          />
          <CardFormaEstorno
            icone={<CreditCard size={32} className="text-[#9400ae]" strokeWidth={1.8} />}
            iconeFundo="#fbf2f8"
            titulo="Crédito"
            descricao="Cancelamento total ou parcial de vendas realizadas no cartão de crédito."
            tecla="Crédito"
          />
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={true} />
    </div>
  );
}

function CardMetodoEstorno({ metodo, subtitulo, children }: { metodo: MetodoEstorno; subtitulo: string; children: ReactNode }) {
  const m = METODOS[metodo];
  return (
    <div className="flex-1 min-h-0 flex flex-col items-center p-[16px]">
      <div className="border border-[#e5e5e5] flex flex-col gap-[24px] items-center px-[12px] py-[18px] rounded-[8px] w-[617.5px]">
        <div className="flex gap-[12px] items-center w-full">
          <div className="flex items-center p-[10px] rounded-[8px] shrink-0" style={{ backgroundColor: m.iconeFundo }}>
            {m.icone}
          </div>
          <div className="flex flex-col items-start leading-[1.2]">
            <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[20px] text-[#1a1a1a]" style={fontVariation}>{m.titulo}</p>
            <p className="font-['Nunito_Sans',sans-serif] text-[12.8px] text-[#747474] whitespace-nowrap" style={fontVariation}>{subtitulo}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

// Campo de digitação das telas de valor e ID: placeholder com cursor até o
// primeiro dígito, e então o conteúdo digitado. O campo fica em estado
// Default até o primeiro dígito, e só então passa a Active. A tooltip fica abaixo do
// campo (seta para cima), no espaço livre da tela, sem cobrir o card.
function CampoEstorno({ rotulo, placeholder, valor, tooltip }: { rotulo: string; placeholder: string; valor: string; tooltip?: ReactNode }) {
  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[1.2] text-[#404040] whitespace-nowrap" style={fontVariation}>{rotulo}</p>
      <div className="relative w-full">
        {tooltip && (
          <div className="fade-in-delay absolute top-full left-1/2 -translate-x-1/2 mt-[8px] pointer-events-none z-[45]">
            {tooltip}
          </div>
        )}
        <div
          className={`bg-white border flex h-[56px] items-center px-[16px] rounded-[8px] w-full transition-all ${
            valor ? "border-[#2258e6] shadow-[0px_0px_0px_3px_#d4d4d4]" : "border-[#a3a3a3]"
          }`}
        >
          <p className="font-['Geist',sans-serif] text-[14px] leading-[20px] text-[#0a0a0a] whitespace-nowrap">
            {valor ? valor : <>{"| "}<span className="text-[#7c7c7c]">{placeholder}</span></>}
          </p>
        </div>
      </div>
    </div>
  );
}

// Passos 80 e 85 (nodes 3121:44900 e 3121:44578) — valor a ser estornado.
export function EstornoValorScreen({ metodo, valorCents, tooltip }: { metodo: MetodoEstorno; valorCents: number; tooltip?: ReactNode }) {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <EstornoCabecalho trilha="Estorno convênio / TEF" />
      <CardMetodoEstorno metodo={metodo} subtitulo="Digite o valor a ser estornado">
        <CampoEstorno
          rotulo="Valor:"
          placeholder="Digite o valor do reembolso"
          valor={valorCents > 0 ? `R$ ${formatarCentavos(valorCents)}` : ""}
          tooltip={tooltip}
        />
      </CardMetodoEstorno>
      <RodapeVoltaEntra entraAtivo={valorCents === VALOR_ESTORNO_EXEMPLO_CENTS} />
    </div>
  );
}

// Passos 81, 86 e 87 (nodes 3121:44966 e 3121:44644) — resumo com o valor
// informado e o ID impresso no comprovante da venda original.
export function EstornoIdScreen({ metodo, id, tooltip }: { metodo: MetodoEstorno; id: string; tooltip?: ReactNode }) {
  const m = METODOS[metodo];
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <EstornoCabecalho trilha="Estorno convênio / TEF" />
      <CardMetodoEstorno metodo={metodo} subtitulo={m.subtituloId}>
        <div className="bg-[#f6f6f6] flex flex-col gap-[16px] items-start p-[20px] rounded-[8px] w-full">
          <div className="flex gap-[12px] items-center">
            <FileSpreadsheet size={24} className="text-[#7b629f]" strokeWidth={1.8} />
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[1.2] text-[#404040] whitespace-nowrap" style={fontVariation}>Resumo da Venda</p>
          </div>
          <div className="flex items-start justify-between w-full font-['Nunito_Sans',sans-serif] font-extrabold text-[20px] leading-[1.2] text-[#404040] whitespace-nowrap" style={fontVariation}>
            <p>Valor:</p>
            <p>R$ {formatarCentavos(VALOR_ESTORNO_EXEMPLO_CENTS)}</p>
          </div>
        </div>
        <CampoEstorno rotulo={m.rotuloId} placeholder="Digite o número do documento" valor={id} tooltip={tooltip} />
      </CardMetodoEstorno>
      <RodapeVoltaEntra entraAtivo={id === ID_ESTORNO_EXEMPLO} />
    </div>
  );
}

// Passos 82 e 88 (nodes 3121:45046 e 3121:44421) — processamento do estorno.
export function EstornoProcessandoScreen() {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <EstornoCabecalho trilha="Estorno convênio / TEF" />
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-[32px] p-[20px]">
        <div className="bg-[#f2f9fe] flex items-center p-[20px] rounded-[16px]">
          <LoaderCircle size={32} className="text-[#0090eb] animate-spin" strokeWidth={1.8} />
        </div>
        <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25.008px] leading-[1.2] text-black text-center w-[508px]" style={fontVariation}>
          Realizando o reembolso...
        </p>
      </div>
    </div>
  );
}

function DetalheEstorno({ icone, rotulo, valor }: { icone: ReactNode; rotulo: string; valor: string }) {
  return (
    <div className="flex flex-1 min-w-0 gap-[20px] h-[70px] items-center px-[64px] py-[10px]">
      <div className="shrink-0">{icone}</div>
      <div className="flex flex-col items-start whitespace-nowrap">
        <p className="font-['Geist',sans-serif] font-medium text-[12px] leading-[20px] text-[#707070] tracking-[3px]">{rotulo}</p>
        <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[16px] leading-[1.2] text-[#707070]" style={fontVariation}>{valor}</p>
      </div>
    </div>
  );
}

// Passos 83 e 89 (nodes 3121:45068 e 3121:44443) — comprovação do estorno.
export function EstornoResultadoScreen({ metodo }: { metodo: MetodoEstorno }) {
  const m = METODOS[metodo];
  const iconeRecibo = <ReceiptText size={24} className="text-[#707070]" strokeWidth={1.8} />;
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <EstornoCabecalho trilha="Estorno convênio / TEF" />
      <div className="flex-1 min-h-0 flex flex-col gap-[32px] items-center justify-center px-[129px] py-[14px]">
        <div className="flex flex-col gap-[10px] items-center">
          <div className="bg-[#e7f4e2] flex items-center justify-center p-[5px] rounded-full size-[64px]">
            <Check size={48} className="text-[#048c0d]" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col gap-[8px] items-center whitespace-nowrap">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[31.248px] leading-[1.2] text-[#333]" style={fontVariation}>{m.tituloResultado}</p>
            <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#747474] tracking-[3px]">OPERAÇÃO REALIZADA COM SUCESSO</p>
          </div>
        </div>
        <div className="bg-white border border-[#dbdbdb] flex flex-col gap-[8px] items-start py-[20px] rounded-[8px] w-[740px]">
          <div className="bg-[#e7f4e2] flex flex-col items-center justify-center px-[64px] py-[10px] w-full">
            <p className="font-['Geist',sans-serif] font-medium text-[12px] leading-[20px] text-[#048c0d] tracking-[3px] whitespace-nowrap">VALOR ESTORNADO</p>
            <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[39.056px] leading-[1.2] text-[#048c0d] whitespace-nowrap" style={fontVariation}>
              R$ {formatarCentavos(VALOR_ESTORNO_EXEMPLO_CENTS)}
            </p>
          </div>
          <div className="flex gap-[8px] items-start w-full">
            <DetalheEstorno icone={iconeRecibo} rotulo="NSU ORIGINAL" valor="009281772" />
            <DetalheEstorno icone={iconeRecibo} rotulo="NSU CANCELAMENTO" valor="009281772" />
          </div>
          <div className="flex gap-[8px] items-start w-full">
            <DetalheEstorno icone={<CalendarClock size={24} className="text-[#707070]" strokeWidth={1.8} />} rotulo="DATA E HORA DO REGISTRO" valor="24/05/2024 - 15:34:12" />
            <DetalheEstorno icone={m.iconeMeio} rotulo="MEIO DE PAGAMENTO" valor={m.meioPagamento} />
          </div>
        </div>
      </div>
      {/* Rodapé vazio do Figma (112px), ampliado para o resumo não ficar sob
          o banner do tutorial. */}
      <div className="h-[150px] shrink-0" />
    </div>
  );
}
