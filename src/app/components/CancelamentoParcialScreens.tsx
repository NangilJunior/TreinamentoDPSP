import { ReactNode, useEffect, useRef } from "react";
import { PackageX, MessageCircleMore, OctagonMinus, SquareMousePointer } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";
import { RodapeVoltaEntra } from "./ConsultaPrecoScreens";
import pdvSvgPaths from "../../imports/Home/svg-3nwk8k5aou";
import iconeUserRoundCheck from "../../imports/ClienteCadastrado/icone-user-round-check.svg";
import iconeTrophy from "../../imports/ClienteCadastrado/icone-trophy.svg";
import iconeEntrar from "../../imports/AberturaCaixaLogin/icone-entrar.svg";

const fontVariation = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

export interface ItemCancelamento {
  numero: number;
  nome: string;
  ref: string;
  cod: string;
  quantidade: number;
  precoUnit: number;
  descontoPct: string;
  desconto: number;
  precoFinal: number;
}

// Itens da venda em andamento usados em todo o fluxo de Cancelamento
// Parcial (nodes 1272:20421 e 1272:21011 do Figma). As referências foram
// escolhidas para que a digitação de "300" (passo 59) filtre a lista em
// tempo real: "3" e "30" ainda mostram Dipirona e Paracetamol, e "300"
// deixa somente a Dipirona.
export const ITENS_CANCELAMENTO_PARCIAL: ItemCancelamento[] = [
  { numero: 1, nome: "Dipirona 500mg", ref: "30039069", cod: "646156", quantidade: 2, precoUnit: 8.5, descontoPct: "-0%", desconto: 0, precoFinal: 17.0 },
  { numero: 2, nome: "Soro Fisiológico 500ml", ref: "41027735", cod: "712408", quantidade: 1, precoUnit: 8.5, descontoPct: "-6%", desconto: 0.5, precoFinal: 8.0 },
  { numero: 3, nome: "Paracetamol 750mg", ref: "30171542", cod: "655723", quantidade: 1, precoUnit: 9.9, descontoPct: "-0%", desconto: 0, precoFinal: 9.9 },
  { numero: 4, nome: "Sinvastat 20ci 30cp", ref: "52984410", cod: "803117", quantidade: 1, precoUnit: 10.0, descontoPct: "-0%", desconto: 0, precoFinal: 10.0 },
];

// Código digitado no exemplo de seleção por digitação (passo 59).
export const CODIGO_CANCELAMENTO_EXEMPLO = "300";

// Motivos exibidos na tela "Selecione o Motivo do Cancelamento" (node
// 1272:20954 do Figma), navegáveis pelas teclas V/K.
export const MOTIVOS_CANCELAMENTO = [
  "Desistência do cliente",
  "Erro de digitação / Operação",
  "Substituição do método de pagamento",
];

// Motivos do Cancelamento Total (node 1832:41506 do Figma) — lista mais
// longa, exibida em uma área com rolagem.
export const MOTIVOS_CANCELAMENTO_VENDA = [
  "Falha no equipamento",
  "Falta de numerário",
  "Desistência",
  "Cartão não autorizado",
  "Convênio não autorizado",
  "Convênio laboratório não autorizado",
  "Erro de operação",
];

export const filtrarItensCancelamento = (codigo: string) =>
  codigo.length === 0
    ? ITENS_CANCELAMENTO_PARCIAL
    : ITENS_CANCELAMENTO_PARCIAL.filter((item) => item.ref.startsWith(codigo));

const formatarValorBR = (valor: number) => valor.toFixed(2).replace(".", ",");

export function ItemVendaCard({ item, destacado, cancelado, tooltip }: { item: ItemCancelamento; destacado?: boolean; cancelado?: boolean; tooltip?: ReactNode }) {
  const semDesconto = item.desconto === 0;
  return (
    <div className="relative">
      {/* Tooltip ancorada à direita do card, apontando para o Preço Final
          (ex.: variação de preço após o DDG). */}
      {tooltip && (
        <div className="fade-in-delay absolute bottom-full right-0 mb-[8px] pointer-events-none z-[45] [&>div>div:last-child]:justify-end [&>div>div:last-child]:pr-[55px]">
          {tooltip}
        </div>
      )}
      <div className={`border border-[#dddddd] flex items-stretch justify-between overflow-hidden rounded-[8px] w-full ${destacado ? "bg-[#e4f6ff]" : "bg-white"} ${cancelado ? "opacity-40" : ""}`}>
        <div className={`flex flex-col items-center justify-center shrink-0 w-[27px] ${destacado ? "bg-[#009ae9]" : "bg-[#f6f6f6]"}`}>
          <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center ${destacado ? "text-white" : "text-[#7a7a7a]"}`} style={fontVariation}>
            {item.numero}
          </p>
        </div>
        <div className="flex flex-1 items-center justify-between gap-[16px] px-[20px] py-[12px] leading-[1.2]">
          <div className="flex flex-col gap-[4px] shrink-0 w-[220px] min-w-0">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-[#404040] truncate" style={fontVariation}>
              {item.nome}
            </p>
            <div className="flex gap-[12px] font-['Nunito_Sans',sans-serif] text-[12.8px] text-[#757575] whitespace-nowrap" style={fontVariation}>
              <p>Ref: {item.ref}</p>
              <p>Cód: {item.cod}</p>
            </div>
          </div>
          <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[16px] text-[#404040] shrink-0 w-[20px] text-center" style={fontVariation}>
            {item.quantidade}
          </p>
          <div className="flex flex-col items-end shrink-0 w-[90px]">
            <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[12.8px] text-[#757575] whitespace-nowrap text-right" style={fontVariation}>
              Preço Unit.
            </p>
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-[#404040] text-right" style={fontVariation}>
              R$ {formatarValorBR(item.precoUnit)}
            </p>
          </div>
          <div className="flex gap-[8px] items-center justify-end shrink-0 w-[140px]">
            <div className={`flex items-center justify-center px-[5px] py-[5px] rounded-[8px] ${semDesconto ? "bg-[#fafafa]" : "bg-[#f2fbf9]"}`}>
              <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[14px] whitespace-nowrap ${semDesconto ? "text-[#ccc]" : "text-[#00ae8e]"}`} style={fontVariation}>
                {item.descontoPct}
              </p>
            </div>
            <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[14px] whitespace-nowrap ${semDesconto ? "text-[#ccc]" : "text-[#00ae8e]"}`} style={fontVariation}>
              {semDesconto ? "" : "-"}R$ {formatarValorBR(item.desconto)}
            </p>
          </div>
          <div className="flex flex-col items-end shrink-0 w-[90px]">
            <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[12.8px] text-[#757575] whitespace-nowrap text-right" style={fontVariation}>
              Preço Final
            </p>
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-[#404040] text-right" style={fontVariation}>
              R$ {formatarValorBR(item.precoFinal)}
            </p>
          </div>
        </div>
      </div>
      {/* Selo "Cancelado" (node 1272:21171 do Figma) — fora do card
          esmaecido, para manter a cor cheia, com a dobra escura que dá o
          efeito de fita presa à borda direita. */}
      {cancelado && (
        <>
          <div className="absolute right-[-8px] top-[-6px] bg-[#ed403d] flex items-center justify-center px-[12px] py-[4px] rounded-tl-[1px] rounded-tr-[1px] rounded-bl-[1px] w-[104px] shadow-[0px_1px_1.5px_rgba(0,0,0,0.25),0px_1px_1px_rgba(0,0,0,0.25)]">
            <p className="font-['Geist',sans-serif] font-bold text-[12px] leading-[1.2] text-white whitespace-nowrap">Cancelado</p>
          </div>
          <div className="absolute right-[-8px] top-[16px] w-0 h-0 border-t-[6px] border-t-[#9e2321] border-r-[8px] border-r-transparent" />
        </>
      )}
    </div>
  );
}

function IconeIdentificacao() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[9.38%_13.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 19.5">
          <path d={pdvSvgPaths.p26801f80} fill="#1FA49D" />
          <path d={pdvSvgPaths.p7259480} fill="#1FA49D" />
        </svg>
      </div>
    </div>
  );
}

function IconeEntradaProdutos() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[9.38%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
          <path d={pdvSvgPaths.pd3fd780} fill="#61BAE8" />
          <path d={pdvSvgPaths.p1f208980} fill="#61BAE8" />
          <path d={pdvSvgPaths.p17088a00} fill="#61BAE8" />
          <path d={pdvSvgPaths.p83baa80} fill="#61BAE8" />
          <path d={pdvSvgPaths.p1db75000} fill="#61BAE8" />
          <path d={pdvSvgPaths.p37e4d1b0} fill="#61BAE8" />
          <path d={pdvSvgPaths.p2d7097f0} fill="#61BAE8" />
          <path d={pdvSvgPaths.p394bdd00} fill="#61BAE8" />
          <path d={pdvSvgPaths.p1c6b6b00} fill="#61BAE8" />
          <path d={pdvSvgPaths.p19176d00} fill="#61BAE8" />
          <path d={pdvSvgPaths.pbe69f00} fill="#61BAE8" />
          <path d={pdvSvgPaths.p1b8a3100} fill="#61BAE8" />
        </svg>
      </div>
    </div>
  );
}

function IconeItensVenda() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[5.42%_4.83%_5.21%_5.42%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5402 21.45">
          <path d={pdvSvgPaths.p3e4f570} fill="#696969" />
          <path d={pdvSvgPaths.p18f47b00} fill="#696969" />
          <path d={pdvSvgPaths.p2b91c580} fill="#696969" />
        </svg>
      </div>
    </div>
  );
}

function IconeResumo() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[5.21%_13.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
          <path d={pdvSvgPaths.p2875e500} fill="#7B629F" />
          <path d={pdvSvgPaths.p1f6535f0} fill="#7B629F" />
          <path d={pdvSvgPaths.p3ca17d80} fill="#7B629F" />
          <path d={pdvSvgPaths.p19ffb080} fill="#7B629F" />
          <path d={pdvSvgPaths.pb765700} fill="#7B629F" />
          <path d={pdvSvgPaths.p4cc0440} fill="#7B629F" />
        </svg>
      </div>
    </div>
  );
}

function BotaoTotalizarVenda() {
  return (
    <div className="flex flex-col items-center justify-center py-[15px]">
      <div className="bg-[#2258e6] flex gap-[8px] items-center justify-center px-[24px] py-[10px] h-[53px] rounded-[8px] w-[460px]">
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute inset-[5.21%_13.54%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.4997">
              <path d={pdvSvgPaths.p3851fa80} fill="white" />
              <path d={pdvSvgPaths.p25478480} fill="white" />
              <path d={pdvSvgPaths.pae5ba00} fill="white" />
              <path d={pdvSvgPaths.p8335080} fill="white" />
            </svg>
          </div>
        </div>
        <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#fafafa]" style={fontVariation}>
          Totalizar Venda
        </p>
        <div className="bg-[rgba(255,255,255,0.2)] px-[8px] py-[4px] rounded-[4px]">
          <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#fafafa]" style={fontVariation}>
            SUB TOTAL
          </p>
        </div>
      </div>
    </div>
  );
}

// Tela de venda em andamento do fluxo de Cancelamento Parcial. Em
// modo "venda" replica a tela inicial do PDV (mesmo layout da tela de
// boas-vindas de Formas de Pagamento), e em modo "cancelar" vira a Home de
// Cancelamento (node 1272:20281 do Figma): a seção "Entrada de Produtos" dá
// lugar a "Cancelar Produto", cujo campo aceita o código do item a cancelar.
export function CancelamentoVendaScreen({
  modo,
  valorCampo = "",
  itensVenda = ITENS_CANCELAMENTO_PARCIAL,
  itens = itensVenda,
  destacadoNumero,
  canceladoNumero,
  tooltipCampo,
  tooltipItens,
  avisoItens,
  tooltipItem,
  children,
}: {
  modo: "venda" | "cancelar";
  valorCampo?: string;
  // Itens de toda a venda (base do Resumo da Venda) e itens exibidos na
  // lista — diferentes quando a lista está filtrada.
  itensVenda?: ItemCancelamento[];
  itens?: ItemCancelamento[];
  destacadoNumero?: number;
  canceladoNumero?: number;
  tooltipCampo?: ReactNode;
  tooltipItens?: ReactNode;
  // Mensagem em azul à direita do título "Itens da Venda" (ex.: DDG,
  // node 1260:14744 do Figma).
  avisoItens?: ReactNode;
  tooltipItem?: { numero: number; conteudo: ReactNode };
  children?: ReactNode;
}) {
  // Os valores do resumo consideram a venda inteira (não apenas os itens
  // filtrados na lista), descontando o item já cancelado.
  const itensAtivos = itensVenda.filter((item) => item.numero !== canceladoNumero);
  const subtotal = itensAtivos.reduce((soma, item) => soma + item.precoUnit * item.quantidade, 0);
  const total = itensAtivos.reduce((soma, item) => soma + item.precoFinal, 0);
  const economizou = itensAtivos.reduce((soma, item) => soma + item.desconto, 0);

  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PDVHeader trilha={[]} />
      <div className="flex flex-1 min-h-0">
        <div className="flex flex-col w-[774px]">
          <div className="bg-[#f6f6f6] p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <IconeIdentificacao />
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#404040]" style={fontVariation}>
                Identificação do Cliente
              </p>
            </div>
            <div className="flex items-stretch w-full isolate">
              <div className="bg-[#61bae8] w-[8px] rounded-l-[4px] shrink-0" />
              <div className="bg-white border border-[#dadada] flex-1 flex items-center justify-between gap-[24px] px-[24px] py-[15px] rounded-r-[4px]">
                <div className="flex gap-[24px] items-center">
                  <div className="bg-[#e8f7ff] flex items-center justify-center rounded-full size-[32px] shrink-0">
                    <img alt="" className="size-[24px]" src={iconeUserRoundCheck} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-[16px] text-[#231f20]">Pedro Nalini</p>
                    <p className="text-[12px] text-[#929292]">CPF: ***.222.333-**</p>
                  </div>
                </div>
                <div className="bg-[#f9edbf] border border-[#ae964a] flex gap-[10px] items-center justify-center px-[18px] py-[6px] rounded-full shrink-0">
                  <img alt="" className="size-[18px]" src={iconeTrophy} />
                  <p className="font-semibold text-[12px] text-[#ae964a] whitespace-nowrap">Exclusivo Cliente Drogaria Pacheco</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#bdbdbd] shrink-0" />

          <div className="bg-white p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              {modo === "cancelar" ? <OctagonMinus size={24} className="text-[#ed403d]" strokeWidth={1.8} /> : <IconeEntradaProdutos />}
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#404040]" style={fontVariation}>
                {modo === "cancelar" ? "Cancelar Produto" : "Entrada de Produtos"}
              </p>
            </div>
            <div className="relative">
              {tooltipCampo && (
                <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] pointer-events-none z-[45]">
                  {tooltipCampo}
                </div>
              )}
              {modo === "cancelar" ? (
                <div className="bg-white h-[56px] rounded-[8px] px-[16px] flex items-center border border-[#61bae8] shadow-[0px_0px_0px_3px_#bfe9ff]">
                  <p className="font-['Geist',sans-serif] text-[14px] text-[#0a0a0a] whitespace-nowrap">
                    {valorCampo || "SKU do produto - Escaneie o código do produto, digite ou selecione na lista"}
                  </p>
                </div>
              ) : (
                <div className="bg-white h-[56px] rounded-[8px] px-[16px] flex items-center border border-[#a3a3a3]">
                  <p className="font-['Geist',sans-serif] text-[14px] text-[#757575] whitespace-nowrap">
                    SKU do produto - Escaneie o código do produto ou digite
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="h-px bg-[#bdbdbd] shrink-0" />

          <div className="bg-[#f6f6f6] p-[20px] flex items-center justify-between">
            <div className="flex gap-[12px] items-center">
              <IconeItensVenda />
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#404040]" style={fontVariation}>
                Itens da Venda
              </p>
            </div>
            {avisoItens && (
              <div className="flex gap-[12px] items-center">
                <SquareMousePointer size={24} className="text-[#009ae9]" strokeWidth={1.8} />
                <p className="font-['Geist',sans-serif] font-medium text-[14px] leading-[20px] text-[#009ae9]">{avisoItens}</p>
              </div>
            )}
          </div>

          <div className="h-px bg-[#bdbdbd] shrink-0" />

          <div className="bg-white flex-1 min-h-0 p-[20px] relative">
            {tooltipItens && (
              <div className="fade-in-delay absolute top-[12px] left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-[45]">
                {tooltipItens}
              </div>
            )}
            <div className="flex flex-col gap-[8px]">
              {itens.map((item) => (
                <ItemVendaCard key={item.numero} item={item} destacado={item.numero === destacadoNumero} cancelado={item.numero === canceladoNumero} tooltip={tooltipItem?.numero === item.numero ? tooltipItem.conteudo : undefined} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-px bg-[#bdbdbd]" />

        <div className="flex flex-col w-[500px]">
          <div className="bg-[#f6f6f6] p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <IconeResumo />
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#404040]" style={fontVariation}>
                Resumo da Venda
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={fontVariation}>Subtotal:</p>
              <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={fontVariation}>R$ {formatarValorBR(subtotal)}</p>
            </div>
            <div className="h-px bg-[#bdbdbd]" />
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[20px] text-[#404040]" style={fontVariation}>Total:</p>
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[20px] text-[#404040]" style={fontVariation}>R$ {formatarValorBR(total)}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#00ae8e]" style={fontVariation}>Economizou</p>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#00ae8e]" style={fontVariation}>R$ {formatarValorBR(economizou)}</p>
            </div>
          </div>
          <div className="h-px bg-[#bdbdbd]" />
          <BotaoTotalizarVenda />
        </div>
      </div>
      {children}
    </div>
  );
}

// Modal "Cancelamento de Item" (node 1358:18792 do Figma) — avisa que a
// operação exige a autorização do gerente. O avanço acontece pela tecla
// [Entra] do teclado virtual; os botões do modal são apenas ilustrativos.
// Reaproveitado no Cancelamento Total como "Cancelamento de Venda" (node
// 1358:19042).
export function CancelamentoItemModal({
  titulo = "Cancelamento de Item",
  texto = "Para realizar o cancelamento do item será necessária a autorização do gerente. Pressione [ENTRA] para confirmar ou [VOLTA] para cancelar.",
  icone = <PackageX size={32} className="text-[#ed403d]" strokeWidth={1.8} />,
  iconeFundo = "#fef5f5",
}: { titulo?: string; texto?: string; icone?: ReactNode; iconeFundo?: string } = {}) {
  return (
    <>
      <div className="fade-in-delay absolute inset-0 bg-black/50 backdrop-blur-sm rounded-[20px] z-[20]" />
      <div className="fade-in-delay absolute bottom-0 left-0 right-0 z-[30] rounded-tl-[24px] rounded-tr-[24px] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.25)] bg-white flex flex-col gap-[32px] px-[40px] py-[32px]">
        <div className="flex gap-[32px] items-center w-full">
          <div className="flex items-center justify-center p-[10px] rounded-full shrink-0" style={{ backgroundColor: iconeFundo }}>
            {icone}
          </div>
          <div className="flex flex-col gap-[10px] flex-1 text-[#7e7e7e]">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25px] leading-[1.2]" style={fontVariation}>
              {titulo}
            </p>
            <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2]" style={fontVariation}>
              {texto}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="bg-white border border-[#d4d4d4] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[185px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="#ed403d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#ed403d]" style={fontVariation}>
              Volta
            </p>
          </div>
          <div className="bg-[#2258e6] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] w-[185px]">
            <img alt="" className="size-[16px]" src={iconeEntrar} />
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={fontVariation}>
              Entra
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Tela "Selecione o Motivo do Cancelamento" (node 1272:20954 do Figma).
// No Cancelamento Total (node 1832:41506) não há item exibido, e a lista de
// motivos, mais longa, rola para manter o motivo destacado sempre visível.
export function CancelamentoMotivoScreen({
  selectedIndex,
  item,
  tooltip,
  trilha = "Cancelamento de Ítem",
  titulo = "Selecione o Motivo do Cancelamento",
  motivos = MOTIVOS_CANCELAMENTO,
}: {
  selectedIndex: number;
  item?: ItemCancelamento;
  tooltip?: ReactNode;
  trilha?: string;
  titulo?: string;
  motivos?: string[];
}) {
  const motivoSelecionadoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    motivoSelecionadoRef.current?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);
  const listaRolavel = motivos.length > MOTIVOS_CANCELAMENTO.length;
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PDVHeader trilha={[]} />
      <div className="flex items-center gap-[24px] p-[24px] shrink-0 drop-shadow-[0px_4px_8px_rgba(0,0,0,0.06)]">
        <PackageX size={24} className="text-[#a6a6a6]" strokeWidth={1.8} />
        <p className="font-['Geist',sans-serif] font-medium text-[14px] text-[#4d4d4d] tracking-[3px] uppercase whitespace-nowrap">
          {trilha}
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-[16px] p-[20px] min-h-0">
        <div className="relative flex items-center gap-[10px] px-[129px] py-[4px]">
          {tooltip && (
            <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] pointer-events-none z-[45]">
              {tooltip}
            </div>
          )}
          <MessageCircleMore size={24} className="text-[#61bae8]" strokeWidth={1.8} />
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25px] leading-[1.2] text-[#7e7e7e] whitespace-nowrap" style={fontVariation}>
            {titulo}
          </p>
        </div>
        <div className="flex flex-col gap-[18px] px-[128px]">
          {item && <ItemVendaCard item={item} />}
          <div className="border border-[#e5e5e5] flex flex-col p-[20px] rounded-[20px] w-full">
            <div className={listaRolavel ? "h-[308px] overflow-y-auto" : undefined}>
            {motivos.map((motivo, idx) => (
              <div
                key={motivo}
                ref={idx === selectedIndex ? motivoSelecionadoRef : undefined}
                className={`border-b border-[#e5e5e5] flex items-center px-[8px] py-[16px] transition-colors ${idx === selectedIndex ? "bg-[#e4f6ff]" : idx % 2 === 1 ? "bg-[#f5f5f5]" : ""}`}
              >
                <p className="font-['Geist',sans-serif] text-[16px] leading-[24px] text-[#0a0a0a] whitespace-nowrap">{motivo}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={true} />
    </div>
  );
}
