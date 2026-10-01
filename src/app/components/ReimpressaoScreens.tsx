import { ReactNode, useEffect, useRef, useState } from "react";
import { ReceiptText, MessageCircleMore } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import { RodapeVoltaEntra } from "./ConsultaPrecoScreens";
import imgBordaSuperior from "../../imports/ReimpressaoComprovantes/borda-superior.svg";
import imgBordaInferior from "../../imports/ReimpressaoComprovantes/borda-inferior.svg";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// Funções da Fita Detalhe (node 5952:71026) e opções de reimpressão (node
// 2825:47648), navegáveis pelas teclas V/K. O exemplo segue por
// [3] Reimprimir Cupom Fiscal e por [2] NR-NF.
export const FUNCOES_FITA_DETALHE = ["Reimprimir TEF", "Fita Detalhe", "Reimprimir Cupom Fiscal"];
export const OPCOES_REIMPRESSAO = ["NSU", "NR-NF"];

// Data da compra e número da nota digitados no exemplo. A data é digitada
// só com os números e exibida com as barras.
export const DATA_REIMPRESSAO_EXEMPLO = "01092026";
export const NOTA_REIMPRESSAO_EXEMPLO = "111222333";

export const formatarDataReimpressao = (digitos: string) =>
  [digitos.slice(0, 2), digitos.slice(2, 4), digitos.slice(4, 8)].filter(Boolean).join("/");

// Cabeçalho comum: header do PDV, trilha com o ícone receipt-text e o título
// da etapa, com o indicador de etapas (3 pontos) quando houver.
function CabecalhoReimpressao({ trilha, titulo, etapa }: { trilha: string; titulo: string; etapa?: 1 | 2 | 3 }) {
  return (
    <>
      <PDVHeader trilha={[]} />
      <div className="flex items-center gap-[24px] p-[24px] shrink-0 drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        <ReceiptText size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />
        <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#4d4d4d] tracking-[3px] uppercase whitespace-nowrap">
          {trilha}
        </p>
      </div>
      <div className="flex items-center justify-between px-[129px] py-[4px] shrink-0">
        <div className="flex gap-[10px] items-center">
          <MessageCircleMore size={24} className="text-[#61bae8]" strokeWidth={1.8} />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25.008px] leading-[1.2] text-[#7e7e7e] whitespace-nowrap" style={fontVariation}>
            {titulo}
          </p>
        </div>
        {etapa && (
          <div className="flex gap-[10px] items-center">
            {[1, 2, 3].map((n) => (
              <div key={n} className={`size-[13px] rounded-full ${n <= etapa ? "bg-[#2258e6]" : "bg-[#d9d9d9]"}`} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// Passos 104 e 107 (nodes 5952:71026 e 2825:47648) — lista numerada com a
// linha destacada acompanhando as teclas V/K, e a tooltip opcional logo
// abaixo da lista.
export function ReimpressaoListaScreen({
  trilha,
  titulo,
  etapa,
  opcoes,
  selecionadoIndex,
  margemTopo = 0,
  tooltip,
}: {
  trilha: string;
  titulo: string;
  etapa?: 1 | 2 | 3;
  opcoes: string[];
  selecionadoIndex: number;
  margemTopo?: number;
  tooltip?: ReactNode;
}) {
  const selecionadoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    selecionadoRef.current?.scrollIntoView({ block: "nearest" });
  }, [selecionadoIndex]);
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <CabecalhoReimpressao trilha={trilha} titulo={titulo} etapa={etapa} />
      <div className="flex-1 min-h-0 px-[128px] pt-[20px]" style={{ marginTop: margemTopo }}>
        <div className="relative border border-[#e5e5e5] flex flex-col p-[20px] rounded-[20px] w-full">
          {tooltip && (
            <div className="fade-in-delay absolute top-full left-1/2 -translate-x-1/2 mt-[8px] pointer-events-none z-[45]">
              {tooltip}
            </div>
          )}
          {opcoes.map((opcao, idx) => {
            const fundo = idx === selecionadoIndex ? "bg-[#e4f6ff]" : idx % 2 === 1 ? "bg-[#f5f5f5]" : "bg-white";
            return (
              <div key={opcao} ref={idx === selecionadoIndex ? selecionadoRef : undefined} className={`flex items-stretch w-full transition-colors ${fundo}`}>
                <div className="border-b border-[#e5e5e5] flex items-center justify-center px-[8px] py-[16px] w-[48px] shrink-0">
                  <p className="font-['Geist',sans-serif] text-[16px] leading-[24px] text-[#0a0a0a]">{idx + 1}</p>
                </div>
                <div className="border-b border-[#e5e5e5] flex flex-1 min-w-0 items-center px-[8px] py-[16px]">
                  <p className="font-['Geist',sans-serif] text-[16px] leading-[24px] text-[#0a0a0a] whitespace-nowrap">{opcao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={true} />
    </div>
  );
}

// Passos 105 e 108 (nodes 5952:71138 e 2825:47758) — campo único, em estado
// Default até o primeiro dígito e Active a partir dele, com a tooltip logo
// abaixo.
export function ReimpressaoCampoScreen({
  trilha,
  titulo,
  etapa,
  rotulo,
  placeholder,
  valor,
  completo,
  larguraCampo,
  margemTopo = 0,
  fonteCampo,
  tooltip,
}: {
  trilha: string;
  titulo: string;
  etapa?: 1 | 2 | 3;
  rotulo: string;
  placeholder: string;
  valor: string;
  completo: boolean;
  larguraCampo: number;
  margemTopo?: number;
  fonteCampo: string;
  tooltip?: ReactNode;
}) {
  const digitando = valor.length > 0;
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <CabecalhoReimpressao trilha={trilha} titulo={titulo} etapa={etapa} />
      <div className="flex-1 min-h-0 flex flex-col items-center pt-[20px]" style={{ marginTop: margemTopo }}>
        <div className="flex flex-col gap-[18px] items-start" style={{ width: larguraCampo }}>
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[1.2] text-[#404040] whitespace-nowrap" style={fontVariation}>
            {rotulo}
          </p>
          <div className="relative w-full">
            <div
              className={`bg-white border flex h-[72px] items-center px-[16px] rounded-[8px] w-full transition-all ${
                digitando ? "border-[#2258e6] shadow-[0px_0px_0px_3px_#d4d4d4]" : "border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              }`}
            >
              <p className={`${fonteCampo} whitespace-nowrap ${digitando ? "text-[#0a0a0a]" : "text-[#737373]"}`} style={fontVariation}>
                {digitando ? valor : placeholder}
              </p>
            </div>
            {tooltip && (
              <div className="fade-in-delay absolute top-full left-1/2 -translate-x-1/2 mt-[8px] pointer-events-none z-[45]">
                {tooltip}
              </div>
            )}
          </div>
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={completo} />
    </div>
  );
}

// Conteúdo fictício da Fita Detalhe do PDV 57 na data do exemplo: abertura,
// suprimento, quatro vendas (a primeira é a NF 111222333, reimpressa no
// fim do fluxo), uma sangria e o resumo do dia. Substitui a imagem de
// recibo genérica do Figma.
type LinhaFita =
  | { tipo: "titulo"; texto: string }
  | { tipo: "texto"; texto: string; destaque?: boolean }
  | { tipo: "valor"; rotulo: string; valor: string; destaque?: boolean; recuo?: boolean }
  | { tipo: "separador" };

const VENDAS_FITA: { hora: string; nf: string; itens: [string, string, string][]; extras?: [string, string][]; total: string; pagamento: [string, string][] }[] = [
  {
    hora: "09:14:05",
    nf: "111222333",
    itens: [["DIPIRONA 500MG", "2 x 8,50", "17,00"], ["SORO FISIOLOGICO 500ML", "1 x 8,50", "8,50"]],
    extras: [["DESCONTO", "-0,50"]],
    total: "25,00",
    pagamento: [["DINHEIRO", "30,00"], ["TROCO", "5,00"]],
  },
  {
    hora: "10:32:51",
    nf: "111222334",
    itens: [["PARACETAMOL 750MG", "1 x 9,90", "9,90"]],
    total: "9,90",
    pagamento: [["PIX", "9,90"]],
  },
  {
    hora: "11:47:19",
    nf: "111222335",
    itens: [["SINVASTATINA 20MG 30CP", "1 x 10,00", "10,00"], ["DIPIRONA 500MG", "1 x 8,50", "8,50"]],
    total: "18,50",
    pagamento: [["CARTAO DEBITO", "18,50"], ["NSU 009281772", ""]],
  },
  {
    hora: "14:20:03",
    nf: "111222336",
    itens: [["AMOXICILINA 500MG 21CAP", "1 x 45,30", "45,30"], ["IBUPROFENO 600MG 20CP", "1 x 39,00", "39,00"]],
    total: "84,30",
    pagamento: [["CARTAO CREDITO 2X", "84,30"]],
  },
];

const LINHAS_FITA: LinhaFita[] = [
  { tipo: "titulo", texto: "DROGARIAS PACHECO" },
  { tipo: "texto", texto: "LOJA 0573 - PDV 57" },
  { tipo: "texto", texto: "CNPJ 12.345.678/0573-90" },
  { tipo: "texto", texto: "RUA DAS FLORES, 120 - CENTRO - RIO DE JANEIRO/RJ" },
  { tipo: "separador" },
  { tipo: "titulo", texto: "FITA DETALHE" },
  { tipo: "valor", rotulo: "DATA", valor: "01/09/2026" },
  { tipo: "valor", rotulo: "OPERADOR", valor: "JOAO SILVA - MAT. 12345" },
  { tipo: "separador" },
  { tipo: "valor", rotulo: "07:58:12 ABERTURA DE CAIXA", valor: "" },
  { tipo: "valor", rotulo: "08:02:40 SUPRIMENTO INICIAL", valor: "R$ 200,00" },
  { tipo: "separador" },
  ...VENDAS_FITA.flatMap((venda, idx): LinhaFita[] => [
    { tipo: "valor", rotulo: `${venda.hora} VENDA`, valor: `NF ${venda.nf}`, destaque: true },
    ...venda.itens.map(([produto, qtd, valor], i): LinhaFita => ({ tipo: "valor", rotulo: `${String(i + 1).padStart(2, "0")} ${produto}  ${qtd}`, valor, recuo: true })),
    ...(venda.extras ?? []).map(([rotulo, valor]): LinhaFita => ({ tipo: "valor", rotulo, valor, recuo: true })),
    { tipo: "valor", rotulo: "TOTAL", valor: `R$ ${venda.total}`, destaque: true, recuo: true },
    ...venda.pagamento.map(([rotulo, valor]): LinhaFita => ({ tipo: "valor", rotulo, valor: valor ? `R$ ${valor}` : "", recuo: true })),
    { tipo: "separador" },
    ...(idx === 2 ? ([{ tipo: "valor", rotulo: "13:05:44 SANGRIA", valor: "R$ 150,00" }, { tipo: "separador" }] as LinhaFita[]) : []),
  ]),
  { tipo: "titulo", texto: "RESUMO DO DIA" },
  { tipo: "valor", rotulo: "VENDAS REALIZADAS", valor: "4" },
  { tipo: "valor", rotulo: "DINHEIRO", valor: "R$ 25,00" },
  { tipo: "valor", rotulo: "PIX", valor: "R$ 9,90" },
  { tipo: "valor", rotulo: "CARTAO DEBITO", valor: "R$ 18,50" },
  { tipo: "valor", rotulo: "CARTAO CREDITO", valor: "R$ 84,30" },
  { tipo: "valor", rotulo: "TOTAL VENDIDO", valor: "R$ 137,70", destaque: true },
  { tipo: "separador" },
  { tipo: "texto", texto: "*** FIM DA FITA DETALHE ***" },
];

function ReciboFitaDetalhe() {
  return (
    <div className="relative w-[472px] shrink-0">
      <div className="bg-white my-[14px] px-[32px] py-[36px] flex flex-col gap-[6px] font-['Chivo_Mono',monospace] text-[13px] leading-[18px] text-[#2d2d2d]">
        {LINHAS_FITA.map((linha, idx) => {
          if (linha.tipo === "separador") return <div key={idx} className="border-t border-dashed border-[#2d2d2d] my-[8px]" />;
          if (linha.tipo === "titulo") return <p key={idx} className="text-center font-bold text-[16px] leading-[22px]">{linha.texto}</p>;
          if (linha.tipo === "texto") return <p key={idx} className="text-center">{linha.texto}</p>;
          return (
            <div key={idx} className={`flex justify-between gap-[16px] ${linha.recuo ? "pl-[12px]" : ""} ${linha.destaque ? "font-bold" : ""}`}>
              <p className="min-w-0">{linha.rotulo}</p>
              <p className="shrink-0 whitespace-nowrap">{linha.valor}</p>
            </div>
          );
        })}
      </div>
      <img alt="" className="absolute left-0 top-0 block h-[27.334px] w-[472.065px]" src={imgBordaSuperior} />
      <img alt="" className="absolute left-0 bottom-0 block h-[27.334px] w-[472.065px]" src={imgBordaInferior} />
    </div>
  );
}

// Passo 106 (node 5952:71200) — extrato das operações do PDV na data
// informada, em uma área rolável. A barra de rolagem nativa fica oculta e o
// indicador do Figma, à direita, acompanha a posição da rolagem.
export function FitaDetalheCupomScreen({ trilha }: { trilha: string }) {
  const [progressoRolagem, setProgressoRolagem] = useState(0);
  const atualizarRolagem = (el: HTMLDivElement) => {
    const maximo = el.scrollHeight - el.clientHeight;
    setProgressoRolagem(maximo > 0 ? el.scrollTop / maximo : 0);
  };
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <CabecalhoReimpressao trilha={trilha} titulo="Cupom" etapa={3} />
      <div className="flex flex-1 min-h-0 mt-[20px]">
        <div
          onScroll={(e) => atualizarRolagem(e.currentTarget)}
          className="bg-[#eee] flex flex-1 min-w-0 flex-col items-end overflow-y-auto overflow-x-hidden px-[240px] py-[32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <ReciboFitaDetalhe />
        </div>
        <div className="bg-[#eee] relative h-full w-[195px] shrink-0">
          <div className="absolute bg-white h-[127px] left-[34px] rounded-full top-[163px] w-[9px]" />
          <div className="absolute bg-[#2258e6] h-[24.268px] left-[34px] rounded-full w-[9px]" style={{ top: 163 + progressoRolagem * (127 - 24.268) }} />
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={true} />
    </div>
  );
}
