import { ReactNode } from "react";
import { ArrowLeftRight, Check, X, Store, CalendarClock, ReceiptText, Computer } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import { RodapeVoltaEntra } from "./ConsultaPrecoScreens";
import type { ItemCancelamento } from "./CancelamentoParcialScreens";
import iconeDinheiro from "../../imports/FormasPagamentoIcons/dinheiro.svg";
import iconePix from "../../imports/FormasPagamentoIcons/pix.svg";
import iconeDebito from "../../imports/FormasPagamentoIcons/debit.svg";
import iconeCredito from "../../imports/FormasPagamentoIcons/credit.svg";
import iconeConvenio from "../../imports/FormasPagamentoIcons/convenio.svg";
import iconePbm from "../../imports/FormasPagamentoIcons/pbm.svg";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// Nova venda em andamento na qual o cliente fará a troca (node 7831:39130
// do Figma): a mercadoria nova já registrada, antes do pagamento.
export const ITENS_TROCA_MERCADORIA: ItemCancelamento[] = [
  { numero: 1, nome: "Dipirona 500mg", ref: "30039069", cod: "646156", quantidade: 1, precoUnit: 10.0, descontoPct: "-0%", desconto: 0, precoFinal: 10.0 },
  { numero: 2, nome: "Soro Fisiológico 500ml", ref: "30039069", cod: "646156", quantidade: 1, precoUnit: 8.0, descontoPct: "-0%", desconto: 0, precoFinal: 8.0 },
];
export const CPF_CLIENTE_TROCA = "***.261.950-**";

// Dados da venda original digitados pelo operador para localizá-la
// (passos 93 a 96). A data é digitada só com os números e exibida com
// as barras.
export const LOJA_TROCA_EXEMPLO = "1111";
export const DATA_TROCA_EXEMPLO = "01092026";
export const PDV_TROCA_EXEMPLO = "50";
export const NOTA_TROCA_EXEMPLO = "111222333";

// Itens da venda original localizada (node 7845:40851), navegáveis pelas
// teclas V/K. O Paracetamol vale R$ 20,00 (no Figma, R$ 9,90) para simular
// o cenário em que o item devolvido supera o total da nova compra.
export interface ItemVendaOriginal {
  codigo: string;
  produto: string;
  valor: number;
}
export const ITENS_VENDA_ORIGINAL: ItemVendaOriginal[] = [
  { codigo: "646156", produto: "DIPIRONA 500MG", valor: 10.0 },
  { codigo: "10006", produto: "SORO FISIOLOGICO 500ML", valor: 8.0 },
  { codigo: "679917", produto: "PARACETAMOL 750MG", valor: 20.0 },
];
// Total da nova compra (Dipirona + Soro), base dos dois cenários.
export const TOTAL_NOVA_COMPRA_TROCA = ITENS_TROCA_MERCADORIA.reduce((soma, item) => soma + item.precoFinal, 0);

const formatarValor = (valor: number) => valor.toFixed(2).replace(".", ",");

export const formatarDataTroca = (digitos: string) =>
  [digitos.slice(0, 2), digitos.slice(2, 4), digitos.slice(4, 8)].filter(Boolean).join("/");

// Grade de formas de pagamento (node 7831:39320), exibida abaixo do Resumo
// da Venda após o [Sub Total] — mesmo layout da grade do fluxo de Formas
// de Pagamento. Meramente ilustrativa: a troca segue pela tecla [A] Troca.
export function GradeFormasPagamento() {
  const linhas = [
    [
      { label: "Dinheiro", subtitulo: "Recebimento em espécie", icone: iconeDinheiro, bg: "#f2fbf9" },
      { label: "PIX", subtitulo: "Pagamento instantâneo", icone: iconePix, bg: "#f2f7fb" },
    ],
    [
      { label: "Débito", subtitulo: "Cartão", icone: iconeDebito, bg: "#f2f8fb" },
      { label: "Crédito", subtitulo: "Cartão", icone: iconeCredito, bg: "#fbf2f8" },
    ],
    [
      { label: "Convênio", subtitulo: "Benefício corporativo", icone: iconeConvenio, bg: "#f6fbf2" },
      { label: "PBM", subtitulo: "Benefício empresarial", icone: iconePbm, bg: "#f2fbf6" },
    ],
  ];
  return (
    <div className="flex flex-col gap-[12px] p-[16px]">
      {linhas.map((linha, linhaIdx) => (
        <div key={linhaIdx} className="flex gap-[12px] items-start">
          {linha.map((opcao) => (
            <div key={opcao.label} className="flex-1 flex items-center gap-[24px] px-[12px] py-[8px] rounded-[8px] border border-[#e5e5e5] bg-white">
              <div className="shrink-0 flex items-center justify-center p-[10px] rounded-[8px]" style={{ backgroundColor: opcao.bg }}>
                <img src={opcao.icone} alt="" className="size-[32px]" />
              </div>
              <div className="flex flex-col gap-[4px] items-start min-w-0">
                <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[18px] leading-[1.2] text-[#1a1a1a]" style={fontVariation}>{opcao.label}</p>
                <p className="font-['Nunito_Sans',sans-serif] text-[10.8px] leading-[1.2] text-[#747474] whitespace-nowrap" style={fontVariation}>{opcao.subtitulo}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Telas de identificação da venda original (nodes 7845:40140, 7845:40635,
// 7845:40679 e 7845:40807): trilha "Troca de Item" e um único campo, que
// fica em estado Default até o primeiro dígito e só então passa a Active.
// O Figma varia a largura e a posição do campo entre as telas; aqui elas
// foram padronizadas em 720px.
export function TrocaCampoScreen({
  rotulo,
  placeholder,
  valor,
  completo,
  tooltip,
}: {
  rotulo: string;
  placeholder: string;
  valor: string;
  completo: boolean;
  tooltip?: ReactNode;
}) {
  const digitando = valor.length > 0;
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PDVHeader trilha={[]} />
      <div className="flex items-center gap-[24px] p-[24px] shrink-0 drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        <ArrowLeftRight size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />
        <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#4d4d4d] tracking-[3px] uppercase whitespace-nowrap">
          Troca de Item
        </p>
      </div>
      <div className="flex-1 min-h-0 flex flex-col items-center p-[20px]">
        <div className="flex flex-col gap-[18px] items-start w-[720px]">
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[1.2] text-[#404040] whitespace-nowrap" style={fontVariation}>
            {rotulo}
          </p>
          <div className="relative w-full">
            <div
              className={`bg-white border flex h-[72px] items-center px-[16px] rounded-[8px] w-full transition-all ${
                digitando ? "border-[#2258e6] shadow-[0px_0px_0px_3px_#d4d4d4]" : "border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              }`}
            >
              <p
                className={`font-['Nunito_Sans',sans-serif] font-medium text-[20px] leading-[1.2] whitespace-nowrap ${digitando ? "text-[#0a0a0a]" : "text-[#737373]"}`}
                style={fontVariation}
              >
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

function CabecalhoTroca() {
  return (
    <>
      <PDVHeader trilha={[]} />
      <div className="flex items-center gap-[24px] p-[24px] shrink-0 drop-shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        <ArrowLeftRight size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />
        <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#4d4d4d] tracking-[3px] uppercase whitespace-nowrap">
          Troca de Item
        </p>
      </div>
    </>
  );
}

const celulaCabecalho = "font-['Geist',sans-serif] font-semibold text-[16px] leading-[24px] text-[#666] whitespace-nowrap";
const celulaForte = "font-['Geist',sans-serif] font-semibold text-[16px] leading-[24px] text-[#0a0a0a] whitespace-nowrap";
const celulaFraca = "font-['Geist',sans-serif] text-[16px] leading-[24px] text-[#757575] whitespace-nowrap";

// Passos 97 e 99 (node 7845:40851) — itens da venda original. A linha
// destacada (com o checkbox marcado) acompanha as teclas V/K, e [Entra]
// escolhe o item a ser trocado.
export function TrocaItensVendaOriginalScreen({ selecionadoIndex }: { selecionadoIndex: number }) {
  const colunas = (
    destaque: boolean,
    zebra: boolean,
  ) => `border-b border-[#e5e5e5] px-[8px] py-[16px] flex items-center ${destaque ? "bg-[#e4f6ff]" : zebra ? "bg-[#f5f5f5]" : "bg-white"}`;
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <CabecalhoTroca />
      <div className="flex-1 min-h-0 px-[20px] py-[20px]">
        <div className="border border-[#e5e5e5] flex flex-col p-[20px] rounded-[20px] w-full">
          <div className="flex items-stretch w-full">
            <div className={`${colunas(false, true)} w-[48px] justify-center`} />
            <div className={`${colunas(false, true)} w-[133px]`}><p className={celulaCabecalho}>Qtd VENDA</p></div>
            <div className={`${colunas(false, true)} w-[92px]`}><p className={celulaCabecalho}>U.M.</p></div>
            <div className={`${colunas(false, true)} flex-1 min-w-0`}><p className={celulaCabecalho}>CÓDIGO</p></div>
            <div className={`${colunas(false, true)} w-[344px]`}><p className={celulaCabecalho}>PRODUTO</p></div>
            <div className={`${colunas(false, true)} flex-1 min-w-0`}><p className={celulaCabecalho}>VALOR ITEM</p></div>
            <div className={`${colunas(false, true)} flex-1 min-w-0`}><p className={celulaCabecalho}>DESC ITEM</p></div>
            <div className={`${colunas(false, true)} flex-1 min-w-0`}><p className={celulaCabecalho}>TOTAL</p></div>
          </div>
          {ITENS_VENDA_ORIGINAL.map((item, idx) => {
            const destaque = idx === selecionadoIndex;
            const zebra = idx % 2 === 1;
            return (
              <div key={item.codigo} className="flex items-stretch w-full">
                <div className={`${colunas(destaque, zebra)} w-[48px] justify-center`}>
                  {destaque ? (
                    <div className="bg-[#2258e6] border border-[#2258e6] rounded-[2px] size-[16px] flex items-center justify-center">
                      <Check size={14} className="text-white" strokeWidth={2.5} />
                    </div>
                  ) : (
                    <div className="bg-white border border-[#d4d4d4] rounded-[2px] size-[14px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                  )}
                </div>
                <div className={`${colunas(destaque, zebra)} w-[133px]`}><p className={celulaForte}>1</p></div>
                <div className={`${colunas(destaque, zebra)} w-[92px]`}><p className={`${celulaForte} text-[#404040]`}>UN</p></div>
                <div className={`${colunas(destaque, zebra)} flex-1 min-w-0`}><p className={celulaFraca}>{item.codigo}</p></div>
                <div className={`${colunas(destaque, zebra)} w-[344px]`}><p className={celulaFraca}>{item.produto}</p></div>
                <div className={`${colunas(destaque, zebra)} flex-1 min-w-0`}><p className={celulaForte}>R$ {formatarValor(item.valor)}</p></div>
                <div className={`${colunas(destaque, zebra)} flex-1 min-w-0`}><p className={celulaForte}>R$ 0,00</p></div>
                <div className={`${colunas(destaque, zebra)} flex-1 min-w-0`}><p className={celulaForte}>R$ {formatarValor(item.valor)}</p></div>
              </div>
            );
          })}
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={true} />
    </div>
  );
}

// Passo 98 (node 7831:40451) — linhas acrescentadas ao Resumo da Venda
// quando o Vale Troca é aplicado e a nova compra é maior: o valor do item
// devolvido e a diferença a receber do cliente, em vermelho.
export function ResumoValeTroca({ valeTroca }: { valeTroca: number }) {
  return (
    <>
      <div className="h-px bg-[#bdbdbd]" />
      <div className="flex justify-between">
        <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={fontVariation}>Vale Troca:</p>
        <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={fontVariation}>R$ {formatarValor(valeTroca)}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#ed403d]" style={fontVariation}>A receber:</p>
        <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#ed403d]" style={fontVariation}>R$ {formatarValor(TOTAL_NOVA_COMPRA_TROCA - valeTroca)}</p>
      </div>
    </>
  );
}

function DetalheBloqueio({ icone, rotulo, valor }: { icone: ReactNode; rotulo: string; valor: string }) {
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

// Passo 100 (node 7849:40411) — troca bloqueada: o item devolvido vale mais
// que o total da nova compra. Os valores do Figma (R$ 10,00 / R$ 5,00)
// foram trocados pelos do exemplo (Paracetamol R$ 20,00 / compra R$ 18,00).
// A tooltip fica acima do ícone de X, sobrepondo o header do PDV.
export function TrocaBloqueadaScreen({ item, tooltip }: { item: ItemVendaOriginal; tooltip?: ReactNode }) {
  const icone = (Icone: typeof Store) => <Icone size={24} className="text-[#707070]" strokeWidth={1.8} />;
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <CabecalhoTroca />
      <div className="flex-1 min-h-0 flex flex-col gap-[32px] items-center justify-center px-[129px] py-[14px]">
        <div className="flex flex-col gap-[10px] items-center w-[760px]">
          <div className="relative bg-[#ffd8d7] flex items-center justify-center p-[5px] rounded-full size-[64px]">
            <X size={48} className="text-[#ed403d]" strokeWidth={1.8} />
            {tooltip && (
              <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[18px] pointer-events-none z-[45]">
                {tooltip}
              </div>
            )}
          </div>
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[31.248px] leading-[1.2] text-[#333] whitespace-nowrap" style={fontVariation}>
            Troca não permitida
          </p>
          <div className="font-['Nunito_Sans',sans-serif] text-[18px] leading-[1.2] text-[#747474] text-center" style={fontVariation}>
            <p>O valor da nova compra é inferior ao item selecionado na venda original.</p>
            <p>A troca não pode ser realizada; a devolução deve ocorrer fora do PDV Core.</p>
          </div>
        </div>
        <div className="bg-white border border-[#dbdbdb] flex flex-col gap-[8px] py-[20px] rounded-[8px] w-[740px]">
          <div className="flex gap-[8px] w-full">
            <DetalheBloqueio icone={icone(Store)} rotulo="ITEM SELECIONADO" valor={`R$ ${formatarValor(item.valor)}`} />
            <DetalheBloqueio icone={icone(CalendarClock)} rotulo="TOTAL DA NOVA COMPRA" valor={`R$ ${formatarValor(TOTAL_NOVA_COMPRA_TROCA)}`} />
          </div>
          <div className="flex gap-[8px] w-full">
            <DetalheBloqueio icone={icone(ReceiptText)} rotulo="PRODUTO DEVOLVIDO" valor={item.produto} />
            <DetalheBloqueio icone={icone(Computer)} rotulo="DIFERENÇA" valor={`- R$ ${formatarValor(item.valor - TOTAL_NOVA_COMPRA_TROCA)}`} />
          </div>
        </div>
        <p className="font-['Nunito_Sans',sans-serif] text-[18px] leading-[1.2] text-[#747474] text-center w-[740px]" style={fontVariation}>
          Pressione a tecla [ENTRA] para continuar. O Vale Troca não será aplicado e a nova venda não será persistida como troca.
        </p>
      </div>
      <RodapeVoltaEntra entraAtivo={true} />
    </div>
  );
}
