import { useNavigate, useParams } from "react-router";
import { CheckCircle2, Mail, Printer, FileBadge2 } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import Frame19675 from "../../imports/Frame19675/Frame19675";
import ProfileMenu from "./ProfileMenu";
import Footer from "./Footer";
import svgPaths from "../../imports/ManutencaoDeLojas-1/svg-ygln4qhrvj";
import pdvSvgPaths from "../../imports/Home/svg-3nwk8k5aou";
import peripheralSvgPaths from "../../imports/Frame19555/svg-8dfs6vtjpy";
import VirtualKeyboard from "../../imports/VirtualKeyboard/VirtualKeyboard";
import Inicio from "../../imports/Inicio/Inicio";
import Frame19557 from "../../imports/Frame19557/Frame19557";
import Frame19591 from "../../imports/Frame19591/index";
import SangriaFlow from "./SangriaFlow";
import Home4, { MOTIVOS_SANGRIA } from "../../imports/Home-4/index";
import Home6 from "../../imports/Home-6/index";
import ValorRetiradaScreen from "./ValorRetiradaScreen";
import SuprimentoResumoScreen from "./SuprimentoResumoScreen";
import SuprimentoValorScreen from "./SuprimentoValorScreen";
import SuprimentoComprovanteScreen from "./SuprimentoComprovanteScreen";
import ComprovanteScreen from "./ComprovanteScreen";
import AberturaCaixaLoginScreen from "./AberturaCaixaLoginScreen";
import EntradaOperadorScreen from "./EntradaOperadorScreen";
import PagamentoValorScreen, { type MetodoPagamento } from "./PagamentoValorScreen";
import GavetaTrocoScreen from "./GavetaTrocoScreen";
import ObrigadoScreen from "./ObrigadoScreen";
import PixAguardandoScreen from "./PixAguardandoScreen";
import MaquininhaAguardandoScreen from "./MaquininhaAguardandoScreen";
import CreditoCategoriasScreen, { CATEGORIAS_PROMOCIONAIS } from "./CreditoCategoriasScreen";
import CreditoParcelasScreen, { OPCOES_PARCELAS } from "./CreditoParcelasScreen";
import SelecionePedidoScreen from "./SelecionePedidoScreen";
import InformeOVScreen from "./InformeOVScreen";
import { ConvenioEscolhaScreen, OutrosConveniosScreen, ConvenioCpfScreen, ConvenioCarregandoScreen, ConvenioAguardandoScreen } from "./ConvenioScreens";
import { ScaleToFit, useFitScale } from "./ScaleToFit";
import { secoesCategorias, type CategoriaSecaoData } from "../data/secoesCategorias";
import iconeEntrar from "../../imports/AberturaCaixaLogin/icone-entrar.svg";
import iconeIdCard from "../../imports/ClienteCadastrado/icone-id-card.svg";
import iconeUserRoundCheck from "../../imports/ClienteCadastrado/icone-user-round-check.svg";
import iconeTrophy from "../../imports/ClienteCadastrado/icone-trophy.svg";
import iconeUserRoundMinus from "../../imports/ClienteCadastrado/icone-user-round-minus.svg";
import iconeArrowLeft from "../../imports/ClienteCadastrado/icone-arrow-left.svg";
import iconeEscanearProduto from "../../imports/RegistroDeProdutos/icone-escanear-produto.svg";
import iconeDinheiro from "../../imports/FormasPagamentoIcons/dinheiro.svg";
import iconePix from "../../imports/FormasPagamentoIcons/pix.svg";
import iconeDebito from "../../imports/FormasPagamentoIcons/debit.svg";
import iconeCredito from "../../imports/FormasPagamentoIcons/credit.svg";
import iconeConvenio from "../../imports/FormasPagamentoIcons/convenio.svg";
import iconePbm from "../../imports/FormasPagamentoIcons/pbm.svg";

// Mesma imagem de fundo utilizada na categoria "Gestão do Caixa" em /dashboard
const imgGestaoDoCaixa = "https://www.eliteeducacao.com.br/wp-content/uploads/2025/10/Atendente-de-Farmacia-com-Operador-de-Caixa.webp";

interface FuncionalidadeContent {
  titulo: string;
  conteudo: string;
  hasPDV?: boolean;
}

const funcionalidadesContent: Record<string, FuncionalidadeContent> = {
  "suprimento-inicial": {
    titulo: "Suprimento Inicial",
    conteudo: "O Suprimento Inicial é a entrada de dinheiro no PDV antes do início das vendas, garantindo ao operador cédulas e moedas suficientes para realizar os primeiros trocos.",
    hasPDV: true
  },
  "abertura-de-caixa": {
    titulo: "Abertura de Caixa",
    conteudo: "A abertura de caixa é o protocolo de segurança que autoriza o início das atividades de um operador no PDV. O processo exige a validação prévia de um gerente, seguida da autenticação do operador, garantindo rastreabilidade e prevenção de acessos não autorizados ao caixa.",
    hasPDV: true
  },
  "sangria-de-caixa": {
    titulo: "Sangria de Caixa",
    conteudo: "A sangria de caixa é um procedimento de segurança que consiste na retirada do excesso de dinheiro (notas físicas) do caixa durante o expediente. Este processo visa reduzir riscos de assaltos e garantir que o caixa mantenha apenas o valor necessário para o troco das operações diárias.",
    hasPDV: true
  },
  "suprimento-complementar": {
    titulo: "Suprimento Complementar",
    conteudo: "O Suprimento Complementar é a entrada adicional de dinheiro no PDV durante a operação, realizada quando é necessário reforçar o caixa para continuar dando troco.",
    hasPDV: true
  },
  "cliente-cadastrado-e-nao-cadastrado": {
    titulo: "Cliente Cadastrado e Não Cadastrado",
    conteudo: "Para iniciar o atendimento, o operador pode informar o CPF ou CNPJ do cliente caso este deseje ser identificado na venda.",
    hasPDV: true
  },
  "registro-de-produtos": {
    titulo: "Registro de Produtos",
    conteudo: "Etapa em que produtos são adicionados à venda. O registro pode ser feito pelo código de barras, utilizando um leitor ou digitando sua numeração. Após a identificação, os dados do produto são exibidos na tela.",
    hasPDV: true
  },
  "formas-de-pagamento": {
    titulo: "Formas de Pagamento",
    conteudo: "Na etapa de pagamento, o operador seleciona o método escolhido pelo cliente e realiza o recebimento em dinheiro ou por meio de algum outro método (como crédito, débito ou PIX).",
    hasPDV: true
  },
  "envio-e-impressao-de-cupom": {
    titulo: "Envio e Impressão de Cupom",
    conteudo: "Ao finalizar a venda, o operador pode selecionar a forma de emissão do cupom fiscal, que pode ser enviado para o e-mail cadastrado do cliente ou impresso na hora.",
    hasPDV: true
  },
  "registro-de-itens-de-pedidos": {
    titulo: "Registro de Itens de Pedidos",
    conteudo: "Quando os produtos do pedido já foram registrados pelo farmacêutico, o operador consegue carregá-los no caixa para realizar o pagamento, sem a necessidade de escaneá-los.",
    hasPDV: true
  },
  "localizar-pedido-do-delivery": {
    titulo: "Localizar Pedido do Delivery",
    conteudo: "Quando entregadores se dirigem ao caixa para fazer uma retirada, eles informam o número da ordem de venda, que permite localizar os dados do pedido.",
    hasPDV: true
  },
  "convenio": {
    titulo: "Convênios",
    conteudo: "Para que as condições do Convênio, como promoções e descontos, sejam aplicadas à venda, é necessário realizar uma autenticação com o provedor.",
    hasPDV: true
  },
  "liberacao-com-receita": {
    titulo: "Liberação com Receita",
    conteudo: "Ao registrar um medicamento controlado, o operador informa o número da receita para que o sistema realize sua autenticação antes de adicionar o item à venda.",
    hasPDV: true
  },
  "liberacao-manual": {
    titulo: "Liberação Manual",
    conteudo: "Quando um medicamento controlado não possui receita, sua liberação no PDV depende da autorização de um gerente antes que o item possa ser adicionado à venda.",
    hasPDV: true
  },
  "entrada-saida-operador": {
    titulo: "Entrada/Saída de Operador",
    conteudo: "O processo de Entrada e Saída de Operador é fundamental para o controle e rastreabilidade das operações no sistema. Permite identificar qual operador está utilizando cada terminal e registrar horários de início e término de turnos."
  },
  "consulta-produto-offline": {
    titulo: "Consulta de Produto Offline",
    conteudo: "A funcionalidade de Consulta de Produto Offline permite que os operadores visualizem informações de produtos mesmo quando o sistema está sem conexão com o servidor central. Isso garante a continuidade das operações e melhor atendimento aos clientes."
  },
  "pausa-sistema": {
    titulo: "Pausa do Sistema",
    conteudo: "A Pausa do Sistema permite interromper temporariamente as operações do PDV para realizar manutenções, contagens de caixa ou resolver situações específicas sem encerrar completamente o sistema. É importante para a gestão eficiente do ponto de venda."
  }
};

// Sugestões exibidas na tela de conclusão (estilo "próximos vídeos"). Textos e
// imagem padronizados para coincidir com os cards de Sangria de Caixa e
// Suprimento Complementar em /dashboard.
const proximosTreinamentos = [
  {
    slug: "sangria-de-caixa",
    titulo: "Sangria de Caixa",
    descricao: "A sangria de caixa é um procedimento de segurança que consiste na retirada do excesso de dinheiro (notas físicas) do caixa durante o expediente. Este processo visa reduzir riscos de assaltos e garantir que o caixa mantenha apenas o valor necessário para o troco das operações diárias.",
    imagem: imgGestaoDoCaixa,
  },
  {
    slug: "suprimento-complementar",
    titulo: "Suprimento Complementar",
    descricao: "O suprimento complementar é a operação de entrada de dinheiro na gaveta do PDV para garantir que o operador tenha cédulas e moedas suficientes para dar troco aos clientes.",
    imagem: imgGestaoDoCaixa,
  },
];

function Frame5() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/dashboard")} className="h-[34px] w-[80px] cursor-pointer">
      <Frame19675 />
    </button>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full border-b border-gray-100">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="w-full max-w-[1440px] mx-auto px-[96px] py-[20px]">
          <div className="grid grid-cols-12 gap-[32px] items-center">
            <div className="col-span-6 lg:col-span-8 flex items-center">
              <Frame5 />
            </div>
            <div className="col-span-6 lg:col-span-4 flex items-center justify-end">
              <ProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4({ titulo }: { titulo: string }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#383838] text-[31.248px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">{titulo}</p>
      </div>
    </div>
  );
}

function ContentHeader({ titulo, onBack }: { titulo: string; onBack: () => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="w-full max-w-[1440px] mx-auto px-[96px] py-[20px]">
          <div className="grid grid-cols-12 gap-[32px] items-center">
            <div className="col-span-3 flex items-center">
              <button
                onClick={onBack}
                className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[8px] rounded-[8px] hover:bg-gray-50 transition-colors cursor-pointer"
                data-name="Button"
              >
                <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[30.21%_5.21%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 6.33326">
                      <g id="Vector">
                        <path d={svgPaths.p2939f080} fill="#0A0A0A" />
                        <path d={svgPaths.p2b6dff40} fill="#0A0A0A" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Geist',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">Voltar</p>
                </div>
              </button>
            </div>
            <div className="col-span-6 flex items-center justify-center">
              <Frame4 titulo={titulo} />
            </div>
            <div className="col-span-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Matrícula e senha simuladas nas telas de "Ação do Gerente" da Abertura de
// Caixa — mesmos valores e cadência (200ms/dígito, 300ms/dígito da senha)
// usados em SangriaFlow.tsx.
const MATRICULA_GERENTE = "5732465";
const SENHA_GERENTE_DIGITOS = 7;

// CPF de exemplo digitado no teclado virtual no passo 2 do fluxo de Cliente
// Cadastrado e Não Cadastrado (111.222.333-00, sem máscara).
const CPF_EXEMPLO = "11122233300";

// Número da OV (pedido) de exemplo digitado no teclado virtual no passo 39
// do fluxo de Localizar Pedido do Delivery.
const OV_EXEMPLO = "1112223330";

// Código do convênio de exemplo (Unimed Nacional) digitado no teclado
// virtual no passo 42 do fluxo de Convênio, e a lista de convênios exibida
// naquela tela (nodes 2210:30197 / 4961:50139 do Figma).
const CONVENIO_CODIGO_EXEMPLO = "1111";
interface ConvenioItem { sigla: string; nome: string; codigo: string; }
const CONVENIOS_LISTA: ConvenioItem[] = [
  { sigla: "BR", nome: "Bradesco", codigo: "5662" },
  { sigla: "AM", nome: "Amil", codigo: "5994" },
  { sigla: "CO", nome: "Exclusivo colaborador", codigo: "2293" },
  { sigla: "UN", nome: "Unimed Nacional", codigo: CONVENIO_CODIGO_EXEMPLO },
];

// Código de barras de exemplo digitado manualmente no teclado virtual na
// etapa de registro manual do fluxo de Registro de Produtos.
const SKU_MANUAL_EXEMPLO = "11122233";

// Aplica a máscara de CPF (XXX.XXX.XXX-XX) progressivamente, conforme os
// dígitos (sem pontuação) já digitados.
function formatCpf(digitos: string): string {
  const d = digitos.slice(0, 11);
  let resultado = d.slice(0, 3);
  if (d.length > 3) resultado += "." + d.slice(3, 6);
  if (d.length > 6) resultado += "." + d.slice(6, 9);
  if (d.length > 9) resultado += "-" + d.slice(9, 11);
  return resultado;
}

// Cada fluxo tem seu próprio áudio de boas-vindas, tocado assim que a
// primeira tela do treinamento é exibida — independentemente de qual tela
// seja (banner de boas-vindas genérico, tela de login da Abertura de Caixa,
// etc.). Por enquanto só o áudio de Sangria de Caixa foi gravado; os demais
// fluxos já estão preparados para receber e reproduzir o arquivo
// correspondente assim que ele for entregue.
const AUDIO_BOAS_VINDAS_POR_FLUXO: Record<string, string> = {
  "abertura-de-caixa": "abertura-de-caixa.mp3",
  "suprimento-inicial": "suprimento-inicial.mp3",
  "suprimento-complementar": "suprimento-complementar.mp3",
  "sangria-de-caixa": "sangria-de-caixa.mp3",
  "cliente-cadastrado-e-nao-cadastrado": "cliente-cadastrado-e-nao-cadastrado.mp3",
  "registro-de-produtos": "registro-de-produtos.mp3",
  "formas-de-pagamento": "formas-de-pagamento.mp3",
  "envio-e-impressao-de-cupom": "envio-e-impressao-de-cupom.mp3",
  "registro-de-itens-de-pedidos": "registro-de-itens-de-pedidos.mp3",
  "localizar-pedido-do-delivery": "localizar-pedido-do-delivery.mp3",
  "convenio": "convenio.mp3"
};

function PDVSimulator({ slug }: { slug?: string }) {
  const navigate = useNavigate();
  const isSuprimentoInicial = slug === "suprimento-inicial";
  const isSuprimentoAdicional = slug === "suprimento-complementar" || isSuprimentoInicial;
  const isAberturaDeCaixa = slug === "abertura-de-caixa";
  // Aviso de limite de valores/recomendação de sangria só faz sentido no
  // próprio fluxo de Sangria de Caixa — os fluxos de Atendimento e Vendas
  // reaproveitam esse simulador como placeholder, mas não devem exibi-lo.
  const isSangriaDeCaixa = slug === "sangria-de-caixa";
  const isClienteCadastrado = slug === "cliente-cadastrado-e-nao-cadastrado";
  const isRegistroDeProdutos = slug === "registro-de-produtos";
  const isFormasDePagamento = slug === "formas-de-pagamento";
  const isEnvioImpressaoCupom = slug === "envio-e-impressao-de-cupom";
  const isRegistroDeItensDePedidos = slug === "registro-de-itens-de-pedidos";
  const isLocalizarPedidoDoDelivery = slug === "localizar-pedido-do-delivery";
  const isConvenio = slug === "convenio";
  const isLiberacaoComReceita = slug === "liberacao-com-receita";
  const isLiberacaoManual = slug === "liberacao-manual";
  // Tela do tooltip "limite de valores atingido" (step 1) só faz sentido no
  // fluxo de Sangria de Caixa — Suprimento já pulava essa tela, e Cliente
  // Cadastrado e Não Cadastrado, Registro de Produtos, Formas de Pagamento,
  // Registro de Itens de Pedidos e Localizar Pedido do Delivery também não
  // devem exibi-la.
  const pulaTelaLimiteCaixa = isSuprimentoAdicional || isClienteCadastrado || isRegistroDeProdutos || isFormasDePagamento || isRegistroDeItensDePedidos || isLocalizarPedidoDoDelivery || isConvenio || isLiberacaoComReceita || isLiberacaoManual;
  // Próxima etapa após a tela de boas-vindas (step 0): Formas de Pagamento
  // não reaproveita o step 2 (informativo genérico de Sangria/Registro),
  // partindo direto para o carrinho de exemplo (step 21). Registro de itens
  // de pedidos reserva o step 35, e Localizar Pedido do Delivery o step 38,
  // ambos ainda a serem detalhados.
  const proximaEtapaAposBoasVindas = isFormasDePagamento ? 21 : isEnvioImpressaoCupom ? 31 : isRegistroDeItensDePedidos ? 35 : isLocalizarPedidoDoDelivery ? 38 : pulaTelaLimiteCaixa ? 2 : 1;
  const welcomeTitulo = isSuprimentoInicial
    ? "Olá, boas vindas ao tutorial de Suprimento Inicial."
    : isSuprimentoAdicional
    ? "Olá, boas vindas ao tutorial de Suprimento Complementar."
    : isAberturaDeCaixa
    ? "Olá, boas vindas ao tutorial de Abertura de Caixa"
    : isClienteCadastrado
    ? "Olá, boas vindas ao tutorial de Cliente Cadastrado e Não Cadastrado."
    : isRegistroDeProdutos
    ? "Olá, boas vindas ao tutorial de Registro de Produtos."
    : isFormasDePagamento
    ? "Olá, boas vindas ao tutorial de Formas de Pagamento."
    : isEnvioImpressaoCupom
    ? "Olá, boas vindas ao tutorial de Envio e Impressão de Cupom."
    : isRegistroDeItensDePedidos
    ? "Olá, boas vindas ao tutorial de Registro de Itens de Pedidos."
    : isLocalizarPedidoDoDelivery
    ? "Olá, boas vindas ao tutorial de Localizar Pedido do Delivery."
    : isConvenio
    ? "Olá, boas vindas ao tutorial de Convênios."
    : isLiberacaoComReceita
    ? "Olá, boas vindas ao tutorial de Liberação com Receita."
    : isLiberacaoManual
    ? "Olá, boas vindas ao tutorial de Liberação Manual."
    : undefined;
  const welcomeDescricao = isSuprimentoInicial
    ? "O Suprimento Inicial é a operação de entrada de dinheiro na gaveta do PDV antes do início das vendas. Esse valor, também conhecido como Fundo de Troco, é disponibilizado para que o operador comece o atendimento com cédulas e moedas suficientes para realizar o troco aos clientes. O valor definido para o suprimento inicial deve permanecer disponível no caixa durante a operação, garantindo as condições necessárias para o funcionamento das vendas."
    : isSuprimentoAdicional
    ? "O Suprimento Complementar é a operação de entrada adicional de dinheiro na gaveta do PDV durante o período de operação. Ele é utilizado quando o caixa precisa de mais cédulas ou moedas para continuar realizando trocos, evitando que a falta de dinheiro interrompa ou dificulte o atendimento. O aporte complementa o valor disponível no caixa e pode ser realizado sempre que houver necessidade de reforçar o fundo de troco."
    : isAberturaDeCaixa
    ? "A Abertura de Caixa é o processo que permite ao operador iniciar suas atividades em um PDV (Ponto de Venda). Para abrir o caixa, primeiro é necessária a autorização de um usuário com perfil de gerente, por meio de senha. Em seguida, o operador realiza sua própria autenticação. O sistema verifica se o caixa está disponível para abertura e registra a operação, garantindo segurança e rastreabilidade durante o atendimento."
    : isClienteCadastrado
    ? "Ao iniciar uma venda, o operador pode prosseguir sem identificar o cliente ou informar seu CPF ou CNPJ para vinculá-lo à operação. Também é possível definir se a identificação do cliente deve ser informada na nota fiscal. Após selecionar a opção desejada, o fluxo segue com o registro dos produtos."
    : isRegistroDeProdutos
    ? "O Registro de Produtos é a etapa em que os itens são adicionados à venda. Para tal, o operador deve utilizar o leitor, posicionando-o sobre o código de barras do produto, ou, alternativamente, digitar o número do código no campo indicado e confirmar a operação. Após a identificação, o item é incluído na venda com suas informações e quantidades correspondentes. O processo deve ser repetido para cada produto da compra."
    : isFormasDePagamento
    ? "Após o registro dos produtos, é hora de receber o pagamento do cliente. O sistema aceita várias formas de pagamento, que podem ser selecionadas pelo teclado do PDV. Cada uma possui um fluxo próprio de confirmação. Neste tutorial, vamos cobrir o pagamento feito em dinheiro, PIX, débito e crédito."
    : isEnvioImpressaoCupom
    ? "Após a finalização da venda, o operador pode escolher como o cliente deseja receber o cupom fiscal. É possível enviá-lo para o e-mail cadastrado do cliente, imprimir uma cópia na hora ou selecionar as duas opções. O envio por e-mail utiliza o endereço já registrado no cadastro do cliente."
    : isRegistroDeItensDePedidos
    ? "Quando o cliente solicita itens ao farmacêutico, este os registra em um pedido vinculado ao CPF. Ao chegar ao caixa, o cliente informa seu CPF, permitindo que o operador localize o pedido. Os itens são carregados automaticamente, sem a necessidade de escanear ou digitar os códigos de barras. O operador pode então seguir para a etapa de pagamento e finalizar a venda."
    : isLocalizarPedidoDoDelivery
    ? "Quando o entregador chegar à loja para retirar um pedido de Delivery, ele deve informar ao operador o número da ordem de venda. O operador digita o número para localizar o pedido. Após a identificação, os dados do cliente e os itens da venda são carregados automaticamente na tela, permitindo conferir as informações e prosseguir com a retirada do pedido."
    : isConvenio
    ? "Quando o cliente quiser informar o seu convênio no pedido, é necessário identificá-lo pelo CPF ou número da carteirinha. O sistema realiza a autenticação junto ao provedor e, após a validação, os descontos são automaticamente aplicados aos itens da venda."
    : isLiberacaoComReceita
    ? "Ao registrar um medicamento controlado, o sistema solicita o número da receita. O operador deve informar o número indicado no documento e aguardar a autenticação. Se a receita for autorizada, o medicamento será adicionado à venda e o operador poderá continuar o atendimento."
    : isLiberacaoManual
    ? "Ao registrar um medicamento controlado sem receita, o sistema solicitará a liberação por um gerente. O operador deve acionar o responsável para que ele realize a autorização necessária. Após a liberação, o medicamento será adicionado à venda e o operador poderá continuar o atendimento."
    : undefined;
  const valorAlvo = isSuprimentoAdicional ? 20000 : 100000;
  const [isTrainingMode, setIsTrainingMode] = useState(false);
  // Escala o PDV em tela cheia (1280×800) durante o treinamento para caber em
  // resoluções menores. A folga vertical (paddingY) garante espaço para o card
  // de tutorial que aparece abaixo do PDV.
  const trainingScale = useFitScale(1280, 800, { paddingX: 32, paddingY: 90 });
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [keyboardReady, setKeyboardReady] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showAberturaLogin, setShowAberturaLogin] = useState(false);
  const [showAberturaAutorizacao, setShowAberturaAutorizacao] = useState(false);
  const [showAberturaGerenteMatricula, setShowAberturaGerenteMatricula] = useState(false);
  const [showAberturaGerenteSenha, setShowAberturaGerenteSenha] = useState(false);
  const [aberturaMatricula, setAberturaMatricula] = useState("");
  const [aberturaSenha, setAberturaSenha] = useState("");
  const [showEntradaOperadorMatricula, setShowEntradaOperadorMatricula] = useState(false);
  const [showEntradaOperadorSenha, setShowEntradaOperadorSenha] = useState(false);
  const [showAberturaIdentificacao, setShowAberturaIdentificacao] = useState(false);
  const [operadorMatricula, setOperadorMatricula] = useState("");
  const [operadorSenha, setOperadorSenha] = useState("");
  const [aberturaEntraState, setAberturaEntraState] = useState<"disabled" | "active" | "pressed">("disabled");
  // Telas de demonstração (steps 15 a 17) do fluxo de Registro de Produtos:
  // não usadas por nenhum outro fluxo, para não colidir com os steps 0-14
  // já existentes.
  // Envio e Impressão de Cupom não tem uma tela inicial própria: começa
  // direto na tela "Pagamento realizado" (passo 31), então a pré-visualização
  // (antes de "Iniciar Treinamento") já deve nascer nesse passo.
  const [tutorialStep, setTutorialStep] = useState(isEnvioImpressaoCupom ? 31 : 0);
  const [isFirstAccess, setIsFirstAccess] = useState(true);
  const [cpf, setCpf] = useState("");
  // Número da OV (pedido) digitado no fluxo de Localizar Pedido do Delivery
  // (passo 39).
  const [ovNumero, setOvNumero] = useState("");
  // Código do convênio digitado no fluxo de Convênio (passo 42).
  const [convenioCodigo, setConvenioCodigo] = useState("");
  const [convenioCpf, setConvenioCpf] = useState("");
  // Indica que o passo 2 está sendo revisitado após a tela "O cliente foi
  // identificado" (step 12), para exibir o exemplo de venda sem identificar
  // o cliente com uma tooltip e posicionamento diferentes da primeira visita.
  const [demoSemIdentificar, setDemoSemIdentificar] = useState(false);
  const [sku, setSku] = useState("");
  const [items, setItems] = useState<Array<{ sku: string; name: string; qty: number; price: number }>>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [activeInput, setActiveInput] = useState<"cpf" | "sku" | null>(null);
  const [valorRetirada, setValorRetirada] = useState(0);
  const [motivoIndex, setMotivoIndex] = useState(0);
  // Fluxo de Formas de Pagamento: índice do método sendo demonstrado (0 =
  // Dinheiro, 1 = PIX, 2 = Débito, 3 = Crédito), valor sendo digitado no
  // teclado (em centavos) e os índices selecionados nas telas de categoria
  // promocional e parcelamento do Crédito.
  const [pagamentoEtapaIndex, setPagamentoEtapaIndex] = useState(0);
  const [valorPagamento, setValorPagamento] = useState(0);
  const [categoriaPromocionalIndex, setCategoriaPromocionalIndex] = useState(0);
  const [parcelaIndex, setParcelaIndex] = useState(0);
  // Fluxo de Envio e Impressão de Cupom: 0 = demonstração da impressão do
  // cupom (com matrícula/senha do operador), 1 = demonstração do envio por
  // e-mail — as duas opções guiadas pelo tutorial, na tela de escolha do
  // comprovante (passo 31).
  const [cupomEtapaIndex, setCupomEtapaIndex] = useState(0);
  // Fluxo de Registro de Itens de Pedidos: indica se o Pedido #4521 já foi
  // marcado na tela "Selecione o Pedido" (passo 36), habilitando o [Entra]
  // para carregar seus itens no carrinho.
  const [pedidoSelecionado, setPedidoSelecionado] = useState(true);
  const cpfInputRef = useRef<HTMLInputElement>(null);
  const skuInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioBlobUrl = useRef<string | null>(null);

  // Primeira tela do fluxo de treinamento — pode ser o banner de boas-vindas
  // genérico (demais fluxos, exibido sobre a tela de fundo independentemente
  // de qual tutorialStep ela representa — ex.: Envio e Impressão de Cupom
  // inicia direto no passo 31) ou a tela de login (Abertura de Caixa).
  const isPrimeiraTelaTreinamento = showAberturaLogin || showTutorial;
  const audioArquivo = slug ? AUDIO_BOAS_VINDAS_POR_FLUXO[slug] : undefined;

  useEffect(() => {
    if (!audioArquivo) return;
    fetch(`${import.meta.env.BASE_URL}${audioArquivo}`)
      .then(r => (r.ok ? r.blob() : Promise.reject()))
      .then(blob => { audioBlobUrl.current = URL.createObjectURL(blob); })
      .catch(() => {});
    return () => {
      if (audioBlobUrl.current) {
        URL.revokeObjectURL(audioBlobUrl.current);
        audioBlobUrl.current = null;
      }
    };
  }, [audioArquivo]);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  const exitTraining = () => {
    stopAudio();
    setShowKeyboard(false);
    setShowTutorial(false);
    setShowAberturaLogin(false);
    setShowAberturaAutorizacao(false);
    setShowAberturaGerenteMatricula(false);
    setShowAberturaGerenteSenha(false);
    setShowEntradaOperadorMatricula(false);
    setShowEntradaOperadorSenha(false);
    setShowAberturaIdentificacao(false);
    setOperadorMatricula("");
    setOperadorSenha("");
    setAberturaMatricula("");
    setAberturaSenha("");
    setAberturaEntraState("disabled");
    setTutorialStep(0);
    setIsTrainingMode(false);
    setIsFirstAccess(true);
    setMotivoIndex(0);
    setCpf("");
    setOvNumero("");
    setConvenioCodigo("");
    setConvenioCpf("");
    setActiveInput(null);
    setDemoSemIdentificar(false);
    setPagamentoEtapaIndex(0);
    setValorPagamento(0);
    setCategoriaPromocionalIndex(0);
    setParcelaIndex(0);
  };

  const goToTraining = (slug: string) => {
    exitTraining();
    navigate(`/funcionalidade/${slug}`);
  };

  const playWelcomeAudio = () => {
    if (!audioArquivo) return;
    stopAudio();
    const src = audioBlobUrl.current ?? `${import.meta.env.BASE_URL}${audioArquivo}`;
    const audio = new Audio(src);
    audioRef.current = audio;
    audio.play().catch(() => {});
  };

  // Toca o áudio de boas-vindas sempre que a primeira tela do treinamento é
  // exibida — seja na entrada inicial, seja ao voltar para ela com o botão
  // "Anterior". Assim, cada fluxo controla seu próprio áudio (ou a ausência
  // dele, enquanto o arquivo não é entregue) sem depender de qual tela é a
  // primeira.
  useEffect(() => {
    if (isPrimeiraTelaTreinamento) {
      playWelcomeAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPrimeiraTelaTreinamento]);

  // Simulação da Ação do Gerente na tela de login da Abertura de Caixa:
  // digita a matrícula e libera o botão Entra, na mesma cadência usada em
  // SangriaFlow.tsx, encerrando com a transição para a simulação da senha.
  useEffect(() => {
    if (!showAberturaGerenteMatricula) return;
    let cancelled = false;
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    const run = async () => {
      await wait(1200);
      if (cancelled) return;
      for (let i = 1; i <= MATRICULA_GERENTE.length; i++) {
        await wait(200);
        if (cancelled) return;
        setAberturaMatricula(MATRICULA_GERENTE.slice(0, i));
      }

      await wait(700);
      if (cancelled) return;
      setAberturaEntraState("active");

      await wait(1400);
      if (cancelled) return;
      setAberturaEntraState("pressed");

      await wait(600);
      if (cancelled) return;
      setShowAberturaGerenteMatricula(false);
      setAberturaMatricula("");
      setAberturaEntraState("disabled");
      setShowAberturaGerenteSenha(true);
    };

    run();
    return () => {
      cancelled = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAberturaGerenteMatricula]);

  // Simulação da Ação do Gerente digitando a Senha Gerencial (oculta), na
  // mesma cadência usada em SangriaFlow.tsx, encerrando com a transição
  // para o restante do fluxo (tela de boas-vindas).
  useEffect(() => {
    if (!showAberturaGerenteSenha) return;
    let cancelled = false;
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    const run = async () => {
      await wait(1100);
      if (cancelled) return;
      for (let i = 1; i <= SENHA_GERENTE_DIGITOS; i++) {
        await wait(300);
        if (cancelled) return;
        setAberturaSenha("•".repeat(i));
      }

      await wait(700);
      if (cancelled) return;
      setAberturaEntraState("active");

      await wait(1400);
      if (cancelled) return;
      setAberturaEntraState("pressed");

      await wait(600);
      if (cancelled) return;
      setShowAberturaGerenteSenha(false);
      setAberturaSenha("");
      setAberturaEntraState("disabled");
      setShowEntradaOperadorMatricula(true);
    };

    run();
    return () => {
      cancelled = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAberturaGerenteSenha]);

  // Direciona a digitação do teclado virtual para o campo de CPF assim que
  // o passo 2 do fluxo de Cliente Cadastrado e Não Cadastrado é exibido,
  // sem exigir que o operador clique manualmente no input primeiro.
  useEffect(() => {
    if ((isClienteCadastrado && tutorialStep === 2) || (isRegistroDeItensDePedidos && tutorialStep === 35)) {
      setActiveInput("cpf");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClienteCadastrado, isRegistroDeItensDePedidos, tutorialStep]);

  // Etapas em que o botão "Exibir Teclado" fica oculto — nenhuma delas
  // depende do teclado virtual para avançar, então ele nunca deveria
  // permanecer visível ali (nem mesmo se já estivesse aberto ao chegar
  // nessas telas, seja avançando ou voltando pelo botão "Anterior").
  const keyboardOcultoNestaEtapa =
    !showEntradaOperadorMatricula && !showEntradaOperadorSenha && (
      tutorialStep <= 1 || tutorialStep === 4 || tutorialStep === 8 || tutorialStep === 9 || tutorialStep === 10 ||
      (isClienteCadastrado && (tutorialStep === 12 || tutorialStep === 14)) ||
      (isRegistroDeProdutos && (tutorialStep === 2 || tutorialStep === 15 || tutorialStep === 17 || tutorialStep === 19 || tutorialStep === 20)) ||
      (isFormasDePagamento && (tutorialStep === 24 || tutorialStep === 26 || tutorialStep === 27 || tutorialStep === 28)) ||
      (isEnvioImpressaoCupom && ((tutorialStep === 31 && showTutorial) || tutorialStep === 34)) ||
      (isRegistroDeItensDePedidos && tutorialStep === 35 && showTutorial) ||
      (isLocalizarPedidoDoDelivery && ((tutorialStep === 38 && showTutorial) || tutorialStep === 40)) ||
      (isConvenio && (tutorialStep === 44 || tutorialStep === 45 || tutorialStep === 46))
    );

  // Garante que o teclado virtual feche automaticamente ao entrar em uma
  // etapa onde ele não deveria estar disponível, independentemente de como
  // a navegação ocorreu (avançando, voltando pelo "Anterior", ou por uma
  // tecla do próprio teclado como [Volta]).
  useEffect(() => {
    if (keyboardOcultoNestaEtapa) {
      setShowKeyboard(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardOcultoNestaEtapa]);

  const handleKeyPress = (key: string) => {
    // Identificar CPF/CNPJ na nota? — Entra: quer identificar (segue para a
    // pergunta de reaproveitar o CPF). Volta: não quer identificar (pula
    // direto para a tela padrão, sem modal).
    if (isClienteCadastrado && tutorialStep === 11) {
      if (key === "ENTRA" || key === "Enter") {
        setShowKeyboard(false);
        setTutorialStep(13);
      } else if (key === "VOLTA") {
        setShowKeyboard(false);
        setTutorialStep(12);
      }
      return;
    }
    // Usar o mesmo CPF/CNPJ da identificação? — Entra: confirma e segue
    // direto para a tela padrão. Volta: retorna à pergunta anterior.
    if (isClienteCadastrado && tutorialStep === 13) {
      if (key === "ENTRA" || key === "Enter") {
        setShowKeyboard(false);
        setTutorialStep(12);
      } else if (key === "VOLTA") {
        setShowKeyboard(false);
        setTutorialStep(11);
      }
      return;
    }
    // Revisita ao passo 2 (exemplo de venda sem identificar o cliente) —
    // tanto Volta quanto Entra seguem para a tela sem identificação, sem
    // exigir digitação de CPF.
    if (isClienteCadastrado && tutorialStep === 2 && demoSemIdentificar) {
      if (key === "ENTRA" || key === "Enter" || key === "VOLTA") {
        setShowKeyboard(false);
        setTutorialStep(14);
      }
      return;
    }
    if (isClienteCadastrado && tutorialStep === 2 && activeInput === "cpf") {
      if (key === "ENTRA" || key === "Enter") {
        if (cpf.length === CPF_EXEMPLO.length) {
          setShowKeyboard(false);
          setTutorialStep(11);
        }
      } else if (key === "LIMPA") {
        setCpf("");
      } else if (key === "VOLTA") {
        setCpf(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) && key !== "00" && cpf.length < CPF_EXEMPLO.length && key === CPF_EXEMPLO[cpf.length]) {
        setCpf(prev => prev + key);
      }
      return;
    }
    // Informe do CPF do cliente (passo 35 do fluxo de Registro de Itens de
    // Pedidos) — mesmo mecanismo de digitação do fluxo de Cliente Cadastrado
    // e Não Cadastrado, mas ao concluir segue para a tela "Selecione o
    // Pedido" (passo 36) em vez da tela de cliente identificado.
    if (isRegistroDeItensDePedidos && tutorialStep === 35 && activeInput === "cpf") {
      if (key === "ENTRA" || key === "Enter") {
        if (cpf.length === CPF_EXEMPLO.length) {
          setShowKeyboard(false);
          setTutorialStep(36);
        }
      } else if (key === "LIMPA") {
        setCpf("");
      } else if (key === "VOLTA") {
        setCpf(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) && key !== "00" && cpf.length < CPF_EXEMPLO.length && key === CPF_EXEMPLO[cpf.length]) {
        setCpf(prev => prev + key);
      }
      return;
    }
    // Informe do número da OV (pedido) no fluxo de Localizar Pedido do
    // Delivery (passo 39) — mesmo mecanismo de digitação do CPF, mas ao
    // concluir o cliente já é identificado (CPF de exemplo fixo, reaproveita
    // o painel padrão) e o pedido é carregado (passo 40).
    if (isLocalizarPedidoDoDelivery && tutorialStep === 39) {
      if (key === "ENTRA" || key === "Enter") {
        if (ovNumero.length === OV_EXEMPLO.length) {
          setShowKeyboard(false);
          setCpf(CPF_EXEMPLO);
          setTutorialStep(40);
        }
      } else if (key === "LIMPA") {
        setOvNumero("");
      } else if (key === "VOLTA") {
        setOvNumero(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) && key !== "00" && ovNumero.length < OV_EXEMPLO.length && key === OV_EXEMPLO[ovNumero.length]) {
        setOvNumero(prev => prev + key);
      }
      return;
    }
    // Escolha entre "Cliente Exc. Drog. Pacheco" e "Outros Convênios" (passo
    // 41 do fluxo de Convênio) — só a opção 2 é demonstrada neste exemplo.
    if (isConvenio && tutorialStep === 41) {
      if (key === "2") {
        setShowKeyboard(false);
        setTutorialStep(42);
      }
      return;
    }
    // Código do convênio (passo 42) — mesmo mecanismo de digitação guiada
    // usado para OV/CPF; ao concluir, [Entra] confirma o convênio e segue
    // para a identificação do conveniado (passo 43).
    if (isConvenio && tutorialStep === 42) {
      if (key === "ENTRA" || key === "Enter") {
        if (convenioCodigo.length === CONVENIO_CODIGO_EXEMPLO.length) {
          setShowKeyboard(false);
          setTutorialStep(43);
        }
      } else if (key === "LIMPA") {
        setConvenioCodigo("");
      } else if (key === "VOLTA") {
        setConvenioCodigo(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) && key !== "00" && convenioCodigo.length < CONVENIO_CODIGO_EXEMPLO.length && key === CONVENIO_CODIGO_EXEMPLO[convenioCodigo.length]) {
        setConvenioCodigo(prev => prev + key);
      }
      return;
    }
    // CPF do conveniado (passo 43) — mesmo mecanismo de digitação do CPF em
    // outros fluxos, mas com estado próprio (convenioCpf) em vez de reaproveitar
    // `cpf`, que também está vinculado ao campo de busca de "Identificação do
    // Cliente" visível ao fundo — digitar aqui não deve atualizar aquele campo.
    if (isConvenio && tutorialStep === 43) {
      if (key === "ENTRA" || key === "Enter") {
        if (convenioCpf.length === CPF_EXEMPLO.length) {
          setShowKeyboard(false);
          setTutorialStep(44);
        }
      } else if (key === "LIMPA") {
        setConvenioCpf("");
      } else if (key === "VOLTA") {
        setConvenioCpf(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) && key !== "00" && convenioCpf.length < CPF_EXEMPLO.length && key === CPF_EXEMPLO[convenioCpf.length]) {
        setConvenioCpf(prev => prev + key);
      }
      return;
    }
    // Seleção do pedido (passo 36): [K] marca o Pedido #4521 (único
    // detalhado na tela) e [Entra] carrega os itens no carrinho (passo 37).
    // [Volta] retorna à digitação do CPF.
    if (isRegistroDeItensDePedidos && tutorialStep === 36) {
      if (key === "ENTRA" || key === "Enter") {
        if (pedidoSelecionado) {
          setShowKeyboard(false);
          setTutorialStep(37);
        }
      } else if (key === "VOLTA") {
        setPedidoSelecionado(true);
        setCpf("");
        setTutorialStep(35);
      }
      return;
    }
    // Escolha do comprovante (passo 31 do fluxo de Envio e Impressão de
    // Cupom): [1] envia por e-mail e vai direto para "Obrigado"; [2] ou [3]
    // exigem a matrícula/senha do operador antes de imprimir; [Volta] pula
    // a emissão de comprovante e também vai direto para "Obrigado".
    if (isEnvioImpressaoCupom && tutorialStep === 31 && !showEntradaOperadorMatricula && !showEntradaOperadorSenha) {
      if (key === "1") {
        setShowKeyboard(false);
        setTutorialStep(34);
      } else if (key === "2" || key === "3") {
        setShowKeyboard(false);
        setShowEntradaOperadorMatricula(true);
      } else if (key === "VOLTA") {
        setShowKeyboard(false);
        setTutorialStep(34);
      }
      return;
    }
    if (showEntradaOperadorMatricula) {
      if (key === "ENTRA" || key === "Enter") {
        if (operadorMatricula.length === 6) {
          setShowKeyboard(false);
          setShowEntradaOperadorMatricula(false);
          setOperadorMatricula("");
          setShowEntradaOperadorSenha(true);
        }
      } else if (key === "LIMPA") {
        setOperadorMatricula("");
      } else if (key === "VOLTA") {
        setOperadorMatricula(prev => prev.slice(0, -1));
      } else if (key === "0") {
        setOperadorMatricula(prev => (prev.length < 6 ? prev + "0" : prev));
      }
      return;
    }
    if (showEntradaOperadorSenha) {
      if (key === "ENTRA" || key === "Enter") {
        if (operadorSenha.length === 6) {
          setShowKeyboard(false);
          setShowEntradaOperadorSenha(false);
          setOperadorSenha("");
          if (isEnvioImpressaoCupom) { setTutorialStep(34); }
          else { setShowAberturaIdentificacao(true); }
        }
      } else if (key === "LIMPA") {
        setOperadorSenha("");
      } else if (key === "VOLTA") {
        setOperadorSenha(prev => prev.slice(0, -1));
      } else if (key === "0") {
        setOperadorSenha(prev => (prev.length < 6 ? prev + "•" : prev));
      }
      return;
    }
    if (tutorialStep === 7) {
      if (key === "ENTRA" || key === "Enter") {
        if (valorRetirada === valorAlvo) { setTutorialStep(8); setShowKeyboard(false); if (!isSuprimentoAdicional) setValorRetirada(0); }
      } else if (key === "LIMPA") {
        setValorRetirada(0);
      } else if (key === "VOLTA") {
        setValorRetirada(prev => Math.floor(prev / 10));
      } else if (!isNaN(Number(key)) || key === "00") {
        setValorRetirada(prev => Math.min(key === "00" ? prev * 100 : prev * 10 + Number(key), 99999999));
      }
      return;
    }
    // Valor do pagamento (passo 23 do fluxo de Formas de Pagamento): aceita
    // qualquer valor digitado, mas só libera o avanço quando o valor bater
    // com o alvo do método atual (R$ 50,00 para Dinheiro, R$ 46,54 para
    // PIX/Débito/Crédito, mesmo valor Total exibido na tela inicial).
    if (isFormasDePagamento && tutorialStep === 23) {
      const valorAlvo = pagamentoEtapaIndex === 0 ? 5000 : 4654;
      const digitosAtuaisPagamento = valorPagamento === 0 ? 0 : String(valorPagamento).length;
      const digitosAlvoPagamentoLen = String(valorAlvo).length;
      if (key === "ENTRA" || key === "Enter") {
        if (valorPagamento === valorAlvo) {
          setShowKeyboard(false);
          if (pagamentoEtapaIndex === 0) setTutorialStep(24);
          else if (pagamentoEtapaIndex === 1) setTutorialStep(27);
          else if (pagamentoEtapaIndex === 2) setTutorialStep(28);
          else setTutorialStep(29);
        }
      } else if (key === "LIMPA") {
        setValorPagamento(0);
      } else if (key === "VOLTA") {
        setValorPagamento(prev => Math.floor(prev / 10));
      } else if (key === "00") {
        if (digitosAtuaisPagamento + 2 <= digitosAlvoPagamentoLen) {
          setValorPagamento(prev => Math.min(prev * 100, 99999999));
        }
      } else if (!isNaN(Number(key))) {
        if (digitosAtuaisPagamento < digitosAlvoPagamentoLen) {
          setValorPagamento(prev => Math.min(prev * 10 + Number(key), 99999999));
        }
      }
      return;
    }
    // Categoria promocional (passo 29) e parcelamento (passo 30) do Crédito:
    // a navegação entre opções é feita pelas teclas V/K (ver handleVPress e
    // handleKPress), Entra apenas confirma a opção já destacada.
    if (isFormasDePagamento && tutorialStep === 29) {
      if (key === "ENTRA" || key === "Enter") setTutorialStep(30);
      return;
    }
    if (isFormasDePagamento && tutorialStep === 30) {
      if (key === "ENTRA" || key === "Enter") { setTutorialStep(28); setShowKeyboard(false); }
      return;
    }
    // Registro manual (passo 16 do fluxo de Registro de Produtos): só aceita
    // o próximo dígito correto de SKU_MANUAL_EXEMPLO, replicando o mesmo
    // guiamento usado no exemplo de CPF do fluxo de Cliente Cadastrado.
    if (isRegistroDeProdutos && tutorialStep === 16) {
      if (key === "ENTRA" || key === "Enter") {
        if (sku.length === SKU_MANUAL_EXEMPLO.length) {
          setShowKeyboard(false);
          setTutorialStep(17);
          setSku("");
        }
      } else if (key === "LIMPA") {
        setSku("");
      } else if (key === "VOLTA") {
        setSku(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) && key !== "00" && sku.length < SKU_MANUAL_EXEMPLO.length && key === SKU_MANUAL_EXEMPLO[sku.length]) {
        setSku(prev => prev + key);
      }
      return;
    }
    // Multiplicando produtos (passo 18 do fluxo de Registro de Produtos): só
    // aceita o dígito "3" (quantidade do exemplo); a confirmação acontece ao
    // pressionar a tecla Multiplica (ver onMultiplicaPress no VirtualKeyboard).
    if (isRegistroDeProdutos && tutorialStep === 18) {
      if (key === "LIMPA") {
        setSku("");
      } else if (key === "VOLTA") {
        setSku(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) && key !== "00" && sku.length === 0 && key === "3") {
        setSku(prev => prev + key);
      }
      return;
    }
    if (activeInput === "cpf") {
      if (key === "ENTRA" || key === "Enter") {
        skuInputRef.current?.focus();
        setActiveInput("sku");
      } else if (key === "LIMPA") {
        setCpf("");
      } else if (key === "VOLTA") {
        setCpf(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) || key === "00") {
        setCpf(prev => prev + key);
      }
    } else if (activeInput === "sku") {
      if (key === "ENTRA" || key === "Enter") {
        handleAddProduct();
      } else if (key === "LIMPA") {
        setSku("");
      } else if (key === "VOLTA") {
        setSku(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) || key === "00") {
        setSku(prev => prev + key);
      }
    }
  };

  const handleAddProduct = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && e.key !== "Enter") return;

    if (sku.trim()) {
      const mockProducts: Record<string, { name: string; price: number }> = {
        "7891234567890": { name: "Café Pilão 500g", price: 15.90 },
        "7898765432109": { name: "Arroz Tio João 1kg", price: 8.50 },
        "7896543210987": { name: "Feijão Camil 1kg", price: 9.30 },
        "7891111222333": { name: "Açúcar União 1kg", price: 4.20 },
        "7894444555666": { name: "Óleo Liza 900ml", price: 7.80 },
      };

      const product = mockProducts[sku] || { name: `Produto ${sku}`, price: 10.00 };

      const existingItem = items.find(item => item.sku === sku);
      if (existingItem) {
        const updatedItems = items.map(item =>
          item.sku === sku ? { ...item, qty: item.qty + 1 } : item
        );
        setItems(updatedItems);
        setSubtotal(updatedItems.reduce((sum, item) => sum + item.price * item.qty, 0));
      } else {
        const newItems = [...items, { sku, name: product.name, qty: 1, price: product.price }];
        setItems(newItems);
        setSubtotal(newItems.reduce((sum, item) => sum + item.price * item.qty, 0));
      }

      setSku("");
    }
  };

  useEffect(() => {
    if (isTrainingMode) {
      // Pequeno delay para preparar o teclado sem animação
      const timer = setTimeout(() => {
        setKeyboardReady(true);
      }, 50);

      const handleKeyboard = (e: KeyboardEvent) => {
        e.preventDefault();
        const key = e.key;
        if (key === "Enter") {
          handleKeyPress("ENTRA");
        } else if (key === "Backspace") {
          handleKeyPress("VOLTA");
        } else if (key === "Delete") {
          handleKeyPress("LIMPA");
        } else if (!isNaN(Number(key))) {
          handleKeyPress(key);
        }
      };

      window.addEventListener("keydown", handleKeyboard);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("keydown", handleKeyboard);
      };
    } else {
      setKeyboardReady(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTrainingMode]);

  // Navegação dos motivos da sangria (step 6) pelas teclas V (↑) e K (↓)
  // do teclado virtual do PDV.
  const handleVPress = useCallback(() => {
    if (isFormasDePagamento && tutorialStep === 29) { setCategoriaPromocionalIndex((i) => Math.max(0, i - 1)); return; }
    if (isFormasDePagamento && tutorialStep === 30) { setParcelaIndex((i) => Math.max(0, i - 1)); return; }
    setMotivoIndex((i) => Math.max(0, i - 1));
  }, [isFormasDePagamento, tutorialStep]);
  const handleKPress = useCallback(() => {
    if (isRegistroDeItensDePedidos && tutorialStep === 36) { setPedidoSelecionado(true); return; }
    if (isFormasDePagamento && tutorialStep === 29) { setCategoriaPromocionalIndex((i) => Math.min(CATEGORIAS_PROMOCIONAIS.length - 1, i + 1)); return; }
    if (isFormasDePagamento && tutorialStep === 30) { setParcelaIndex((i) => Math.min(OPCOES_PARCELAS.length - 1, i + 1)); return; }
    setMotivoIndex((i) => Math.min(MOTIVOS_SANGRIA.length - 1, i + 1));
  }, [isFormasDePagamento, isRegistroDeItensDePedidos, tutorialStep]);

  // Próximo dígito do CPF de exemplo a ser destacado no teclado virtual
  // (passo 2 do fluxo de Cliente Cadastrado e Não Cadastrado).
  const proximoDigitoCpf =
    (isClienteCadastrado && tutorialStep === 2 && !demoSemIdentificar && cpf.length < CPF_EXEMPLO.length) ||
    (isRegistroDeItensDePedidos && tutorialStep === 35 && cpf.length < CPF_EXEMPLO.length)
      ? CPF_EXEMPLO[cpf.length]
      : null;

  // Próximo dígito do CPF de exemplo no fluxo de Convênio (passo 43) — estado
  // próprio (convenioCpf), não reaproveita `cpf` para não refletir no campo
  // de busca de "Identificação do Cliente" visível ao fundo.
  const proximoDigitoConvenioCpf =
    isConvenio && tutorialStep === 43 && convenioCpf.length < CPF_EXEMPLO.length
      ? CPF_EXEMPLO[convenioCpf.length]
      : null;

  // Próximo dígito do código de barras de exemplo a ser destacado no teclado
  // virtual (passo 16 - registro manual - do fluxo de Registro de Produtos).
  const proximoDigitoSkuManual =
    isRegistroDeProdutos && tutorialStep === 16 && sku.length < SKU_MANUAL_EXEMPLO.length
      ? SKU_MANUAL_EXEMPLO[sku.length]
      : null;

  // Próximo dígito do número da OV de exemplo a ser destacado no teclado
  // virtual (passo 39 do fluxo de Localizar Pedido do Delivery).
  const proximoDigitoOv =
    isLocalizarPedidoDoDelivery && tutorialStep === 39 && ovNumero.length < OV_EXEMPLO.length
      ? OV_EXEMPLO[ovNumero.length]
      : null;

  // Próximo dígito do código do convênio de exemplo a ser destacado no
  // teclado virtual (passo 42 do fluxo de Convênio).
  const proximoDigitoConvenio =
    isConvenio && tutorialStep === 42 && convenioCodigo.length < CONVENIO_CODIGO_EXEMPLO.length
      ? CONVENIO_CODIGO_EXEMPLO[convenioCodigo.length]
      : null;

  // Fluxo de Formas de Pagamento: método sendo demonstrado no momento e o
  // valor (em centavos) que deve ser digitado no passo 23 para aquele
  // método — R$ 50,00 recebidos em Dinheiro, ou o Total exato da compra
  // (R$ 46,54) para PIX, Débito e Crédito.
  const METODOS_PAGAMENTO: MetodoPagamento[] = ["dinheiro", "pix", "debito", "credito"];
  const metodoPagamentoAtual = METODOS_PAGAMENTO[pagamentoEtapaIndex];
  const METODO_LABEL_RESUMO: Record<MetodoPagamento, string> = { dinheiro: "Dinheiro", pix: "PIX", debito: "Débito", credito: "Crédito" };
  const valorAlvoPagamento = pagamentoEtapaIndex === 0 ? 5000 : 4654;
  // Próximo dígito do valor de pagamento a ser destacado no teclado virtual
  // (passo 23): calculado a partir da posição do próximo dígito no valor
  // alvo (ex.: R$ 50,00 → dígitos "5","0","0","0"), não apenas do primeiro,
  // já que os métodos além do Dinheiro (R$ 46,54) têm dígitos não repetidos.
  const digitosAlvoPagamento = String(valorAlvoPagamento);
  const digitosDigitadosPagamento = valorPagamento === 0 ? 0 : String(valorPagamento).length;
  const proximoDigitoPagamento =
    isFormasDePagamento && tutorialStep === 23 && digitosDigitadosPagamento < digitosAlvoPagamento.length
      ? digitosAlvoPagamento[digitosDigitadosPagamento]
      : null;

  // Telas de demonstração do fluxo de Registro de Produtos que reaproveitam
  // o card do item "Dipirona 500 mg" já escaneado (steps 15 a 17), e telas
  // do fluxo de Formas de Pagamento que reaproveitam o carrinho completo de
  // 3 itens (já a partir da tela inicial/pré-visualização — step 0 — e nos
  // steps 21 e 22, antes da seleção da forma de pagamento), evitando exibir
  // a tela inicial do sistema com o carrinho vazio.
  const mostrarCardDipirona =
    (isRegistroDeProdutos && tutorialStep >= 15 && tutorialStep <= 20) ||
    (isFormasDePagamento && (tutorialStep === 0 || tutorialStep === 21 || tutorialStep === 22 || tutorialStep === 25)) ||
    (isEnvioImpressaoCupom && (tutorialStep === 0 || tutorialStep === 31)) ||
    (isRegistroDeItensDePedidos && tutorialStep === 37) ||
    (isLocalizarPedidoDoDelivery && tutorialStep === 40) ||
    (isConvenio && tutorialStep === 46);
  const quantidadeCardsDipirona =
    (isFormasDePagamento && (tutorialStep === 0 || tutorialStep === 21 || tutorialStep === 22 || tutorialStep === 25)) || (isEnvioImpressaoCupom && (tutorialStep === 0 || tutorialStep === 31))
      ? 3
      : isRegistroDeItensDePedidos && tutorialStep === 37 ? 3
      : isLocalizarPedidoDoDelivery && tutorialStep === 40 ? 1
      : isConvenio && tutorialStep === 46 ? 4
      : tutorialStep === 20 ? 3 : tutorialStep === 17 || tutorialStep === 18 || tutorialStep === 19 ? 2 : 1;
  // Formata um número no padrão brasileiro (vírgula como separador decimal).
  const formatarValorBR = (valor: number) => valor.toFixed(2).replace(".", ",");
  const itensDemoRegistroDeProdutos = [
    { nome: "Dipirona 500 mg", ref: "30039069", cod: "646156", quantidade: 1, precoUnit: 8.5, descontoPct: "-10%", desconto: 0.85, precoFinal: 7.65 },
    { nome: "Nimesulida 50 mg", ref: "40051267", cod: "719284", quantidade: 1, precoUnit: 30.46, descontoPct: "-51%", desconto: 15.54, precoFinal: 14.92 },
    { nome: "Paracetamol 750 mg", ref: "50062348", cod: "832671", quantidade: 3, precoUnit: 16.65, descontoPct: "-52%", desconto: 8.65, precoFinal: 23.97 },
  ];
  // Itens carregados automaticamente do Pedido #4521 (passo 37 do fluxo de
  // Registro de Itens de Pedidos) — os mesmos 3 itens exibidos na prévia da
  // tela "Selecione o Pedido" (passo 36), sem leitura ou digitação de
  // código de barras.
  const itensDemoRegistroDeItensDePedidos = [
    { nome: "Dipirona Monoidratada 500mg", ref: "646156", cod: "646156", quantidade: 1, precoUnit: 12.9, descontoPct: "-0%", desconto: 0, precoFinal: 12.9 },
    { nome: "Amoxilina 500mg Capsulas - 21 un", ref: "882341", cod: "882341", quantidade: 2, precoUnit: 45.3, descontoPct: "-10%", desconto: 9.06, precoFinal: 81.54 },
    { nome: "Ibuprofeno 600mg - 20 comprimidos", ref: "112093", cod: "112093", quantidade: 1, precoUnit: 39.0, descontoPct: "-6%", desconto: 2.34, precoFinal: 36.66 },
  ];
  // Item do pedido carregado automaticamente ao localizar o OV (passo 40 do
  // fluxo de Localizar Pedido do Delivery), exatamente como no node
  // 3978:57290 do Figma.
  const itensDemoLocalizarPedidoDoDelivery = [
    { nome: "Dipirona 500mg", ref: "30039069", cod: "646156", quantidade: 2, precoUnit: 8.5, descontoPct: "-10%", desconto: 0.85, precoFinal: 8.5 },
  ];
  // Itens carregados automaticamente após a identificação do conveniado
  // (passo 46 do fluxo de Convênio), exatamente como no node 2210:30571 do
  // Figma.
  const itensDemoConvenio = [
    { nome: "Dipirona 500mg", ref: "30039069", cod: "646156", quantidade: 2, precoUnit: 8.5, descontoPct: "-10%", desconto: 1.7, precoFinal: 15.3 },
    { nome: "Soro Fisiológico 500ml", ref: "30039069", cod: "646156", quantidade: 1, precoUnit: 8.5, descontoPct: "-0%", desconto: 0, precoFinal: 8.5 },
    { nome: "Paracetamol 750mg", ref: "30039069", cod: "646156", quantidade: 1, precoUnit: 9.9, descontoPct: "-20%", desconto: 1.98, precoFinal: 7.92 },
    { nome: "Sinvastat 20 30cp", ref: "30039069", cod: "646156", quantidade: 1, precoUnit: 10.0, descontoPct: "-0%", desconto: 0, precoFinal: 10.0 },
  ];
  const itensParaCardGenerico = isRegistroDeItensDePedidos
    ? itensDemoRegistroDeItensDePedidos
    : isLocalizarPedidoDoDelivery
    ? itensDemoLocalizarPedidoDoDelivery
    : isConvenio
    ? itensDemoConvenio
    : itensDemoRegistroDeProdutos;
  const itensVisiveisRegistroDeProdutos = mostrarCardDipirona
    ? itensParaCardGenerico.slice(0, quantidadeCardsDipirona)
    : [];
  const totalRegistroDeProdutos = itensVisiveisRegistroDeProdutos.reduce((soma, item) => soma + item.precoFinal, 0);
  const economizouRegistroDeProdutos = itensVisiveisRegistroDeProdutos.reduce((soma, item) => soma + item.desconto, 0);
  // Subtotal informado individualmente por tela do fluxo de Registro de
  // Produtos; enquanto uma tela não tiver valor definido aqui, usa o Total
  // como aproximação temporária.
  const subtotalPorStepRegistroDeProdutos: Record<number, number> = {
    15: 8.5,
    17: 38.96,
    18: 38.96,
    19: 38.96,
    20: 88.91,
    0: 88.91,
    21: 88.91,
    22: 88.91,
    25: 88.91,
    31: 88.91,
    37: 142.5,
    40: 8.5,
    46: 44.9,
  };
  const subtotalRegistroDeProdutos = subtotalPorStepRegistroDeProdutos[tutorialStep] ?? totalRegistroDeProdutos;
  // Economizou informado individualmente por tela; enquanto uma tela não
  // tiver valor definido aqui, usa a soma dos descontos dos itens visíveis.
  const economizouPorStepRegistroDeProdutos: Record<number, number> = {
    20: 42.37,
    0: 42.37,
    21: 42.37,
    22: 42.37,
    25: 42.37,
    31: 42.37,
    37: 11.4,
    40: 0.85,
    46: 3.68,
  };
  const economizouExibidoRegistroDeProdutos =
    economizouPorStepRegistroDeProdutos[tutorialStep] ?? economizouRegistroDeProdutos;
  // Total informado individualmente por tela; enquanto uma tela não tiver
  // valor definido aqui, usa a soma do preço final dos itens visíveis.
  const totalPorStepRegistroDeProdutos: Record<number, number> = {
    37: 131.1,
    40: 8.5,
    46: 41.22,
  };
  const totalExibidoRegistroDeProdutos =
    totalPorStepRegistroDeProdutos[tutorialStep] ?? totalRegistroDeProdutos;

  const pdvContent = (
    <div className={`bg-white relative flex flex-col w-[1280px] ${isTrainingMode ? `h-[800px] ${isConvenio && tutorialStep === 46 ? "overflow-hidden" : "overflow-y-auto"}` : "overflow-hidden"} rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] border border-[#d4d4d4]`}>
      {/* Header */}
      <div className="bg-white flex items-center justify-between p-[20px] border-b border-[#bdbdbd]">
        <div className="h-[40px] w-[160px] relative">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 40">
            <g>
              <path d={pdvSvgPaths.p1b273200} fill="#ED403D" />
              <path d={pdvSvgPaths.p30032100} fill="#ED403D" />
              <path d={pdvSvgPaths.p31a81900} fill="#61BAE8" />
              <path d={pdvSvgPaths.p29d58b00} fill="white" />
            </g>
          </svg>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
          <div className="size-[9px]">
            <svg className="block size-full" fill="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
            </svg>
          </div>
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#787878]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            PDV 57* Loja 0573
          </p>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
          <div className="size-[9px]">
            <svg className="block size-full" fill="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
            </svg>
          </div>
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#787878]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Caixa Disponível
          </p>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[16px] items-center px-[18px] py-[12px]">
          <div className="overflow-clip relative size-[40px]">
            <div className="absolute bg-[#f5f5f5] left-0 rounded-full size-[40px] top-0" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Geist',sans-serif] text-[#0a0a0a] text-[14px]">
              <p>JS</p>
            </div>
          </div>
          <div className="flex flex-col gap-[3px] text-[#404040]">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              João Silva
            </p>
            <p className="font-['Nunito_Sans',sans-serif] text-[12.8px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Operador • Mat. 12345
            </p>
          </div>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[12px]">
          {/* Scanner */}
          <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
            <div className="size-[9px]">
              <svg className="block size-full" fill="none" viewBox="0 0 9 9">
                <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
              </svg>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[9.38%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                  <g>
                    <path d={peripheralSvgPaths.p1228b80} fill="#525252" />
                    <path d={peripheralSvgPaths.p1e471e00} fill="#525252" />
                    <path d={peripheralSvgPaths.pe868500} fill="#525252" />
                    <path d={peripheralSvgPaths.p1afc9570} fill="#525252" />
                    <path d={peripheralSvgPaths.p28515c40} fill="#525252" />
                    <path d={peripheralSvgPaths.p996db00} fill="#525252" />
                    <path d={peripheralSvgPaths.p3bf0d700} fill="#525252" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Calculator */}
          <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
            <div className="size-[9px]">
              <svg className="block size-full" fill="none" viewBox="0 0 9 9">
                <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
              </svg>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[5.21%_13.54%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
                  <g>
                    <path d={peripheralSvgPaths.p263daa00} fill="#525252" />
                    <path d={peripheralSvgPaths.p10ed4b60} fill="#525252" />
                    <path d={peripheralSvgPaths.p4c65000} fill="#525252" />
                    <path d={peripheralSvgPaths.pe6ca000} fill="#525252" />
                    <path d={peripheralSvgPaths.p3da52900} fill="#525252" />
                    <path d={peripheralSvgPaths.p2d332800} fill="#525252" />
                    <path d={peripheralSvgPaths.p3bf9b400} fill="#525252" />
                    <path d={peripheralSvgPaths.pa671400} fill="#525252" />
                    <path d={peripheralSvgPaths.p6e954c0} fill="#525252" />
                    <path d={peripheralSvgPaths.p2594ff00} fill="#525252" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Printer */}
          <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
            <div className="size-[9px]">
              <svg className="block size-full" fill="none" viewBox="0 0 9 9">
                <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
              </svg>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[5.21%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
                  <g>
                    <path d={peripheralSvgPaths.p2b0c6000} fill="#525252" />
                    <path d={peripheralSvgPaths.p1f60300} fill="#525252" />
                    <path d={peripheralSvgPaths.p3c19300} fill="#525252" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[5.21%_21.88%_5.33%_21.88%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 21.4708">
                <g>
                  <path d={pdvSvgPaths.p1ffceb00} fill="#525252" />
                  <path d={pdvSvgPaths.pd91bf00} fill="#525252" />
                  <path d={pdvSvgPaths.p3ef72a00} fill="#525252" />
                  <path d={pdvSvgPaths.p11d84000} fill="#525252" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-[2px] text-[#404040]">
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              31/MAR/26
            </p>
            <p className="font-['Nunito_Sans',sans-serif] text-[12.8px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              10:17:03
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left Panel - Customer and Products */}
        <div className="flex flex-col w-[774px]">
          {/* Customer Identification */}
          <div className="bg-[#f6f6f6] p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[9.38%_13.54%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 19.5">
                    <g>
                      <path d={pdvSvgPaths.p26801f80} fill="#1FA49D" />
                      <path d={pdvSvgPaths.p7259480} fill="#1FA49D" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Identificação do Cliente
              </p>
            </div>

            {(isClienteCadastrado && tutorialStep >= 11 && tutorialStep <= 13) || isRegistroDeProdutos || isFormasDePagamento || isEnvioImpressaoCupom || (isRegistroDeItensDePedidos && tutorialStep === 37) || (isLocalizarPedidoDoDelivery && tutorialStep === 40) || (isConvenio && tutorialStep === 46) ? (
              /* Cliente já identificado após o CPF informado na etapa anterior
                 (também usado como tela de fundo dos fluxos de Registro de
                 Produtos e Formas de Pagamento, que partem de um cliente já
                 identificado). */
              <div className="flex items-stretch w-full isolate">
                <div className="bg-[#61bae8] w-[8px] rounded-l-[4px] shrink-0" />
                <div className="bg-white border border-[#dadada] flex-1 flex items-center justify-between gap-[24px] px-[24px] py-[15px] rounded-r-[4px] flex-wrap">
                  <div className="flex gap-[24px] items-center">
                    <div className="bg-[#e8f7ff] flex items-center justify-center rounded-full size-[32px] shrink-0">
                      <img alt="" className="size-[24px]" src={iconeUserRoundCheck} />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-[16px] text-[#231f20]">Pedro Nalini</p>
                      <p className="text-[12px] text-[#929292]">
                        CPF: ***.{cpf.slice(3, 6)}.{cpf.slice(6, 9)}-**
                      </p>
                    </div>
                  </div>
                  {isConvenio && tutorialStep === 46 ? (
                    <div className="bg-[#e8f7ff] border border-[#17709e] flex gap-[10px] items-center justify-center px-[18px] py-[6px] rounded-full shrink-0">
                      <FileBadge2 size={18} className="text-[#17709e]" strokeWidth={1.8} />
                      <p className="font-semibold text-[12px] text-[#17709e] whitespace-nowrap">Unimed Nacional</p>
                    </div>
                  ) : (
                    <div className="bg-[#f9edbf] border border-[#ae964a] flex gap-[10px] items-center justify-center px-[18px] py-[6px] rounded-full shrink-0">
                      <img alt="" className="size-[18px]" src={iconeTrophy} />
                      <p className="font-semibold text-[12px] text-[#ae964a] whitespace-nowrap">Exclusivo Cliente Drogaria Pacheco</p>
                    </div>
                  )}
                </div>
              </div>
            ) : isClienteCadastrado && tutorialStep === 14 ? (
              /* Venda seguiu sem identificar o cliente (exemplo a partir da revisita ao passo 2) */
              <div className="flex items-stretch w-full isolate">
                <div className="bg-[#9d9d9d] w-[8px] rounded-l-[4px] shrink-0" />
                <div className="bg-white border border-[#dadada] flex-1 flex items-center gap-[24px] px-[24px] py-[15px] rounded-r-[4px]">
                  <div className="bg-[#e7e7e7] flex items-center justify-center rounded-full size-[32px] shrink-0">
                    <img alt="" className="size-[24px]" src={iconeUserRoundMinus} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-[16px] text-[#231f20]">Sem identificação</p>
                    <p className="text-[12px] text-[#929292]">Pressione a tecla [Convênios] no teclado para identificar o usuário.</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-[#f5f5f5] flex rounded-[12px]">
                  <div className="bg-[#2258e6] flex gap-[8px] items-center justify-center px-[32px] py-[16px] rounded-[10px] w-[256px] shadow-sm">
                    <p className="font-['Geist',sans-serif] font-medium text-[14px] text-white">Com identificação</p>
                  </div>
                  <div className="relative flex gap-[8px] items-center justify-center px-[32px] py-[14px] w-[256px]">
                    {/* Tooltip - step 2 (revisita) do fluxo de Cliente Cadastrado e Não Cadastrado, exemplo de venda sem identificar o cliente */}
                    {tutorialStep === 2 && isClienteCadastrado && demoSemIdentificar && (
                      <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[480px] pointer-events-none z-[45]">
                        <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                            <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            Para seguir sem identificar o cliente, clique em{" "}
                            <span className="font-bold text-white">[Volta]</span> no teclado virtual. Outra opção é clicar em{" "}
                            <span className="font-bold text-white">[Entra]</span> sem ter informado o número do CPF.
                          </p>
                        </div>
                        <div className="flex justify-center mt-0">
                          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                        </div>
                      </div>
                    )}
                    <p className="font-['Geist',sans-serif] font-medium text-[14px] text-[#0a0a0a]">Sem Identificação</p>
                    <img alt="" className="size-[24px]" src={iconeArrowLeft} />
                  </div>
                </div>

                <div className="flex gap-[8px] w-full">
                  <div className="relative flex-1">
                    {/* Tooltip - step 2 (primeira visita) do fluxo de Cliente Cadastrado e Não Cadastrado */}
                    {tutorialStep === 2 && isClienteCadastrado && !demoSemIdentificar && (
                      <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[480px] pointer-events-none z-[45]">
                        <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                            <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            Informe o CPF do cliente. Neste exemplo, insira 111.222.333-00. Digite utilizando o teclado virtual e pressione{" "}
                            <span className="font-bold text-white">[Entra]</span> para continuar.
                          </p>
                        </div>
                        <div className="flex justify-center mt-0">
                          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                        </div>
                      </div>
                    )}
                    {tutorialStep === 35 && isRegistroDeItensDePedidos && !showTutorial && (
                      <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[480px] pointer-events-none z-[45]">
                        <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                            <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            Informe o CPF do cliente para localizar o pedido registrado pelo farmacêutico. Neste exemplo, insira 111.222.333-00. Digite utilizando o teclado virtual e pressione{" "}
                            <span className="font-bold text-white">[Entra]</span> para continuar.
                          </p>
                        </div>
                        <div className="flex justify-center mt-0">
                          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                        </div>
                      </div>
                    )}
                    <input
                      ref={cpfInputRef}
                      type="text"
                      value={formatCpf(cpf)}
                      onChange={(e) => setCpf(e.target.value.replace(/\D/g, "").slice(0, 11))}
                      onFocus={() => setActiveInput("cpf")}
                      placeholder="|Digite o CPF do cliente ou aperte [Volta] para seguir sem identificação"
                      className={`w-full bg-white h-[48px] rounded-[8px] px-[16px] border font-['Geist',sans-serif] text-[14px] text-[#787878] focus:outline-none ${
                        cpf.length > 0
                          ? "border-[#2258e6] shadow-[0px_0px_0px_3px_#d4d4d4]"
                          : "border-[#a3a3a3] focus:border-[#2258e6] focus:shadow-[0px_0px_0px_3px_#d4d4d4]"
                      }`}
                    />
                  </div>
                  <button className="bg-[#171717] opacity-50 flex gap-[8px] items-center justify-center px-[24px] py-[10px] h-[48px] rounded-[8px]">
                    <div className="overflow-clip relative shrink-0 size-[16px]">
                      <div className="absolute inset-[9.38%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9999 12.9999">
                          <g>
                            <path d={pdvSvgPaths.p236d3680} fill="white" />
                            <path d={pdvSvgPaths.p21e32300} fill="white" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Geist',sans-serif] font-medium text-[14px] text-[#fafafa]">Buscar</p>
                    <div className="overflow-clip relative shrink-0 size-[16px]">
                      <div className="absolute inset-[9.38%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                          <g>
                            <path d={pdvSvgPaths.p2010def2} fill="white" />
                            <path d={pdvSvgPaths.p2ef5a800} fill="white" />
                            <path d={pdvSvgPaths.p1d703980} fill="white" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          {/* Product Entry */}
          <div className="bg-white p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[9.38%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                    <g>
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
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Entrada de Produtos
              </p>
            </div>

            <div className="relative">
              <input
                ref={skuInputRef}
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                onKeyDown={handleAddProduct}
                onFocus={() => setActiveInput("sku")}
                placeholder="SKU do produto - Escaneie o código do produto ou digite"
                className={`w-full bg-white h-[56px] rounded-[8px] px-[16px] border font-['Geist',sans-serif] text-[14px] text-[#0a0a0a] focus:outline-none ${
                  sku.length > 0
                    ? "border-[#2258e6] shadow-[0px_0px_0px_3px_#d4d4d4]"
                    : "border-[#a3a3a3] focus:border-[#2258e6] focus:shadow-[0px_0px_0px_3px_#d4d4d4]"
                }`}
              />
            </div>
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          {/* Items List */}
          <div className="bg-[#f6f6f6] p-[20px]">
            <div className="flex gap-[12px] items-center">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[5.42%_4.83%_5.21%_5.42%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5402 21.45">
                    <g>
                      <path d={pdvSvgPaths.p3e4f570} fill="#696969" />
                      <path d={pdvSvgPaths.p18f47b00} fill="#696969" />
                      <path d={pdvSvgPaths.p2b91c580} fill="#696969" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Itens da Venda
              </p>
            </div>
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          {/* Items Display */}
          <div className={`bg-white flex-1 min-h-[200px] ${isConvenio && tutorialStep === 46 ? "max-h-[318px] overflow-y-auto" : ""}`}>
            {mostrarCardDipirona ? (
              /* Item(ns) de exemplo já escaneado(s) (Dipirona 500 mg) - telas
                 15 a 17 do fluxo de Registro de Produtos. */
              <div className="p-[20px] relative">
                {tutorialStep === 15 && (
                  <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[380px] pointer-events-none z-[45]">
                    <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                        <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        O item escaneado ficará listado aqui.
                      </p>
                    </div>
                    <div className="flex justify-center mt-0">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                    </div>
                  </div>
                )}
                {tutorialStep === 17 && (
                  <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[380px] pointer-events-none z-[45]">
                    <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                        <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        Se o código inserido estiver correto, o item entrará na lista.
                      </p>
                    </div>
                    <div className="flex justify-center mt-0">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                    </div>
                  </div>
                )}
                <div className="space-y-[12px]">
                  {Array.from({ length: quantidadeCardsDipirona }).map((_, idx) => {
                    const item = itensParaCardGenerico[idx] ?? itensParaCardGenerico[0];
                    const semDesconto = isConvenio && item.descontoPct === "-0%";
                    return (
                    <div key={idx} className="relative">
                      {isRegistroDeItensDePedidos && tutorialStep === 37 && idx === 0 && (
                        <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[420px] pointer-events-none z-[45]">
                          <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                              <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                              Os itens do pedido foram carregados automaticamente, sem a necessidade de leitura ou digitação dos códigos de barras. Pressione <span className="font-bold text-white">[Sub Total]</span> para seguir com o pagamento.
                            </p>
                          </div>
                          <div className="flex justify-center mt-0">
                            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                          </div>
                        </div>
                      )}
                      {tutorialStep === 20 && idx === 2 && (
                        <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[380px] pointer-events-none z-[45]">
                          <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                              <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                              O item é inserido com a quantidade informada
                            </p>
                          </div>
                          <div className="flex justify-center mt-0">
                            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                          </div>
                        </div>
                      )}
                      <div className="bg-white border border-[#dddddd] flex items-stretch justify-between overflow-hidden rounded-[8px] w-full">
                      <div className="bg-[#f6f6f6] flex flex-col items-center justify-center shrink-0 w-[27px]">
                        <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#7a7a7a] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          {idx + 1}
                        </p>
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-[16px] px-[20px] py-[12px]">
                        <div className="flex flex-col gap-[4px] shrink-0 w-[220px] min-w-0">
                          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-[#404040] truncate" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            {item.nome}
                          </p>
                          <div className="flex gap-[12px] font-['Nunito_Sans',sans-serif] text-[12.8px] text-[#757575] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            <p>Ref: {item.ref}</p>
                            <p>Cód: {item.cod}</p>
                          </div>
                        </div>
                        <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[16px] text-[#404040] shrink-0 w-[20px] text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          {item.quantidade}
                        </p>
                        <div className="flex flex-col items-end shrink-0 w-[90px]">
                          <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[12.8px] text-[#757575] whitespace-nowrap text-right" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            Preço Unit.
                          </p>
                          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-[#404040] text-right" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            R$ {formatarValorBR(item.precoUnit)}
                          </p>
                        </div>
                        <div className="flex gap-[8px] items-center justify-end shrink-0 w-[140px]">
                          <div className={`flex items-center justify-center px-[5px] py-[5px] rounded-[8px] ${semDesconto ? "bg-[#fafafa]" : "bg-[#f2fbf9]"}`}>
                            <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[14px] whitespace-nowrap ${semDesconto ? "text-[#ccc]" : "text-[#00ae8e]"}`} style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                              {item.descontoPct}
                            </p>
                          </div>
                          <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[14px] whitespace-nowrap ${semDesconto ? "text-[#ccc]" : "text-[#00ae8e]"}`} style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            {semDesconto ? "" : "-"}R$ {formatarValorBR(item.desconto)}
                          </p>
                        </div>
                        <div className="flex flex-col items-end shrink-0 w-[90px]">
                          <p className="font-['Nunito_Sans',sans-serif] font-semibold text-[12.8px] text-[#757575] whitespace-nowrap text-right" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            Preço Final
                          </p>
                          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-[#404040] text-right" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            R$ {formatarValorBR(item.precoFinal)}
                          </p>
                        </div>
                      </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="flex items-center justify-center h-full p-[20px]">
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Nenhum produto adicionado
                </p>
              </div>
            ) : (
              <div className="p-[20px]">
                <div className="space-y-[12px]">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-[12px] bg-[#f6f6f6] rounded-[8px]">
                      <div className="flex-1">
                        <p className="font-['Nunito_Sans',sans-serif] font-bold text-[14px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          {item.name}
                        </p>
                        <p className="font-['Nunito_Sans',sans-serif] text-[12px] text-[#787878]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          SKU: {item.sku}
                        </p>
                      </div>
                      <div className="flex gap-[16px] items-center">
                        <p className="font-['Nunito_Sans',sans-serif] text-[14px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          Qtd: {item.qty}
                        </p>
                        <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          R$ {(item.price * item.qty).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-px bg-[#bdbdbd]" />

        {/* Right Panel - Summary */}
        <div className="flex flex-col w-[500px]">
          <div className="bg-[#f6f6f6] p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[5.21%_13.54%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
                    <g>
                      <path d={pdvSvgPaths.p2875e500} fill="#7B629F" />
                      <path d={pdvSvgPaths.p1f6535f0} fill="#7B629F" />
                      <path d={pdvSvgPaths.p3ca17d80} fill="#7B629F" />
                      <path d={pdvSvgPaths.p19ffb080} fill="#7B629F" />
                      <path d={pdvSvgPaths.pb765700} fill="#7B629F" />
                      <path d={pdvSvgPaths.p4cc0440} fill="#7B629F" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Resumo da Venda
              </p>
            </div>

            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Subtotal:
              </p>
              <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                R$ {mostrarCardDipirona ? formatarValorBR(subtotalRegistroDeProdutos) : subtotal.toFixed(2)}
              </p>
            </div>

            <div className="h-px bg-[#bdbdbd]" />

            <div className="flex justify-between">
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Total:
              </p>
              <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                R$ {mostrarCardDipirona ? formatarValorBR(totalExibidoRegistroDeProdutos) : subtotal.toFixed(2)}
              </p>
            </div>

            {mostrarCardDipirona && (
              <div className="flex justify-between">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#00ae8e]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Economizou
                </p>
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#00ae8e]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  R$ {formatarValorBR(economizouExibidoRegistroDeProdutos)}
                </p>
              </div>
            )}

            {isFormasDePagamento && tutorialStep === 25 && (
              <>
                <div className="h-px bg-[#bdbdbd]" />
                <div className="flex justify-between">
                  <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    {METODO_LABEL_RESUMO[metodoPagamentoAtual]}:
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    R$ {formatarValorBR(valorAlvoPagamento / 100)}
                  </p>
                </div>
              </>
            )}

            {isLocalizarPedidoDoDelivery && tutorialStep === 40 && (
              <>
                <div className="h-px bg-[#bdbdbd]" />
                <div className="flex justify-between">
                  <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Débito:
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    R$ 8,50
                  </p>
                </div>
              </>
            )}
          </div>

          {isConvenio && tutorialStep === 46 && (
            <div className="bg-[#e8f7ff] flex gap-[10px] items-center px-[18px] py-[6px] w-full">
              <FileBadge2 size={18} className="text-[#17709e] shrink-0" strokeWidth={1.8} />
              <p className="font-['Nunito_Sans',sans-serif] text-[12px] text-[#17709e]">
                <span className="font-bold">Convênio ativo:</span> Unimed Nacional
              </p>
            </div>
          )}

          <div className="h-px bg-[#bdbdbd]" />

          {isFormasDePagamento && tutorialStep === 22 ? (
            /* Grade de formas de pagamento - passo 22 do fluxo de Formas de
               Pagamento. Substitui o botão "Totalizar Venda" após o
               operador pressionar [SUB TOTAL] no teclado virtual. Layout e
               opções replicam o node 1559:24104 do Figma (2 colunas x 3
               linhas: Dinheiro/PIX, Débito/Crédito, Convênio/PBM) — Convênio
               e PBM aparecem para refletir o PDV real, mas não fazem parte
               deste tutorial (não são clicáveis nem destacáveis). */
            <div className="flex flex-col gap-[12px] p-[16px]">
              {[
                [
                  { metodo: "dinheiro" as MetodoPagamento | null, label: "Dinheiro", subtitulo: "Recebimento em espécie", icone: iconeDinheiro, bg: "#f2fbf9" },
                  { metodo: "pix" as MetodoPagamento | null, label: "PIX", subtitulo: "Pagamento instantâneo", icone: iconePix, bg: "#f2f7fb" },
                ],
                [
                  { metodo: "debito" as MetodoPagamento | null, label: "Débito", subtitulo: "Cartão", icone: iconeDebito, bg: "#f2f8fb" },
                  { metodo: "credito" as MetodoPagamento | null, label: "Crédito", subtitulo: "Cartão", icone: iconeCredito, bg: "#fbf2f8" },
                ],
                [
                  { metodo: null, label: "Convênio", subtitulo: "Benefício corporativo", icone: iconeConvenio, bg: "#f6fbf2" },
                  { metodo: null, label: "PBM", subtitulo: "Benefício empresarial", icone: iconePbm, bg: "#f2fbf6" },
                ],
              ].map((linha, linhaIdx) => (
                <div key={linhaIdx} className="flex gap-[12px] items-start">
                  {linha.map((opcao) => (
                    <div
                      key={opcao.label}
                      className="flex-1 flex items-center gap-[24px] px-[12px] py-[8px] rounded-[8px] border border-[#e5e5e5] bg-white"
                    >
                      <div className="shrink-0 flex items-center justify-center p-[10px] rounded-[8px]" style={{ backgroundColor: opcao.bg }}>
                        <img src={opcao.icone} alt="" className="size-[32px]" />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start min-w-0">
                        <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[18px] leading-[1.2] text-[#1a1a1a]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          {opcao.label}
                        </p>
                        <p className="font-['Nunito_Sans',sans-serif] text-[10.8px] leading-[1.2] text-[#747474] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          {opcao.subtitulo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (isFormasDePagamento && tutorialStep === 25) || (isEnvioImpressaoCupom && tutorialStep === 31) ? (
            /* Pagamento realizado - passo 25 do fluxo de Formas de
               Pagamento (node 1559:24598 do Figma). Substitui o botão
               "Totalizar Venda" com a confirmação de sucesso e as ações de
               comprovante — meramente ilustrativas neste tutorial, já que o
               avanço real acontece ao pressionar [Volta] no teclado virtual.
               Reaproveitada como tela inicial do fluxo de Envio e Impressão
               de Cupom (passo 31), sem a tooltip (específica do fluxo de
               Formas de Pagamento). */
            <div className="flex flex-col items-center justify-center gap-[36px] p-[16px]">
              <div className="flex flex-col gap-[12px] items-center">
                <div className="relative">
                  {isFormasDePagamento && tutorialStep === 25 && (
                  <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[460px] pointer-events-none z-[45]">
                    <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                        <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        As opções de emissão de comprovantes são exibidas. Caso não queira nenhum, basta clicar em <span className="font-bold text-white">[Volta]</span> no teclado virtual.
                      </p>
                    </div>
                    <div className="flex justify-center mt-0">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                    </div>
                  </div>
                  )}
                  {isEnvioImpressaoCupom && tutorialStep === 31 && !showTutorial && isTrainingMode && (
                  <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] w-[460px] pointer-events-none z-[45]">
                    <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                        <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {cupomEtapaIndex === 0 ? (
                        <div className="flex flex-col gap-[12px]">
                          <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            No teclado, ao pressionar <span className="font-bold text-white">[1]</span> o cupom é enviado por e-mail, <span className="font-bold text-white">[2]</span> a impressão é realizada na hora e <span className="font-bold text-white">[3]</span> faz ambos. <span className="font-bold text-white">[Volta]</span> encerra a operação sem escolher nenhuma das opções.
                          </p>
                          <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                            Para este exemplo, pressione <span className="font-bold text-white">[2]</span> no teclado virtual para imprimir o cupom.
                          </p>
                        </div>
                      ) : (
                        <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          Agora vamos simular o envio por e-mail. Pressione <span className="font-bold text-white">[1]</span> no teclado virtual.
                        </p>
                      )}
                    </div>
                    <div className="flex justify-center mt-0">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
                    </div>
                  </div>
                  )}
                  <div className="bg-[#f2fbf9] flex items-center justify-center p-[10px] rounded-full">
                    <CheckCircle2 size={32} className="text-[#00ae8e]" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-center text-center">
                  <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#1a1a1a] text-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Pagamento realizado
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-[#747474] text-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    A transação foi realizada com sucesso
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-start w-full">
                <div className="bg-[#2258e6] flex items-center justify-between px-[24px] py-[16px] rounded-[8px] w-full">
                  <div className="flex gap-[8px] items-center">
                    <Mail size={24} className="text-white" />
                    <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                      Enviar por e-mail
                    </p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.2)] px-[8px] py-[4px] rounded-[4px]">
                    <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-white">1</p>
                  </div>
                </div>
                <div className="bg-white flex items-center justify-between px-[24px] py-[16px] rounded-[8px] w-full">
                  <div className="flex gap-[8px] items-center">
                    <Printer size={24} className="text-[#2258e6]" />
                    <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#2258e6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                      Imprimir
                    </p>
                  </div>
                  <div className="bg-[#d3defa] px-[8px] py-[4px] rounded-[4px]">
                    <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#2258e6]">2</p>
                  </div>
                </div>
                <div className="bg-white flex items-center justify-between px-[24px] py-[16px] rounded-[8px] w-full">
                  <div className="flex gap-[8px] items-center">
                    <Mail size={24} className="text-[#2258e6]" />
                    <Printer size={24} className="text-[#2258e6]" />
                    <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#2258e6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                      Enviar por e-mail e imprimir
                    </p>
                  </div>
                  <div className="bg-[#d3defa] px-[8px] py-[4px] rounded-[4px]">
                    <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#2258e6]">3</p>
                  </div>
                </div>
              </div>
            </div>
          ) : isLocalizarPedidoDoDelivery && tutorialStep === 40 ? (
            /* Pagamento realizado - passo 40 do fluxo de Localizar Pedido do
               Delivery (node 3978:57290 do Figma). O pedido do delivery já
               chega pago (via Débito, feito no momento da compra online),
               então, diferente dos outros fluxos, não há opções de
               comprovante aqui — a venda já está concluída. */
            <div className="flex flex-col items-center justify-center gap-[36px] p-[16px]">
              <div className="flex flex-col gap-[12px] items-center">
                <div className="bg-[#f2fbf9] flex items-center justify-center p-[10px] rounded-full">
                  <CheckCircle2 size={32} className="text-[#00ae8e]" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-[6px] items-center text-center">
                  <p className="font-['Nunito_Sans',sans-serif] font-extrabold text-[#1a1a1a] text-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Pagamento realizado
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-[#747474] text-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    A transação foi realizada com sucesso
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-[15px]">
              <button className="bg-[#2258e6] flex gap-[8px] items-center justify-center px-[24px] py-[10px] h-[53px] rounded-[8px] w-[460px] hover:bg-[#1a47b8] transition-colors">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[5.21%_13.54%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.4997">
                      <g>
                        <path d={pdvSvgPaths.p3851fa80} fill="white" />
                        <path d={pdvSvgPaths.p25478480} fill="white" />
                        <path d={pdvSvgPaths.pae5ba00} fill="white" />
                        <path d={pdvSvgPaths.p8335080} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#fafafa]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Totalizar Venda
                </p>
                <div className="bg-[rgba(255,255,255,0.2)] px-[8px] py-[4px] rounded-[4px]">
                  <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-[#fafafa]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    SUB TOTAL
                  </p>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer na base do PDV */}
      <div className={`transition-all duration-500 ${isTrainingMode && tutorialStep === 1 ? 'relative z-10 ring-2 ring-[#F59E0B] shadow-[0_0_24px_4px_rgba(245,158,11,0.35)]' : ''}`}>
        {isTrainingMode && tutorialStep === 1 && (
          <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[560px] pointer-events-none">
            <div className="bg-[#111] text-white text-[18px] font-['Nunito_Sans',sans-serif] leading-[1.6] px-[20px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              Quando o valor em caixa atingir o limite configurado para a unidade, o PDV exibirá um aviso discreto ao operador solicitando a realização da Sangria de Caixa. A mensagem foi projetada para informar a necessidade da operação sem evidenciar que o caixa está com elevado volume de numerário.
            </div>
            {/* Triângulo apontando para baixo */}
            <div className="flex justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#111]" />
            </div>
          </div>
        )}
        {isSangriaDeCaixa && <Frame19557 />}
      </div>

      {/* Fluxo animado de Sangria (telas do gerente) */}
      {isTrainingMode && tutorialStep >= 4 && tutorialStep <= 5 && (
        <SangriaFlow onReachSelection={() => setTutorialStep(5)} isSuprimentoAdicional={isSuprimentoAdicional} isSuprimentoInicial={isSuprimentoInicial} />
      )}

      {/* Motivos Sangria - step 6 */}
      {isTrainingMode && tutorialStep === 6 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          {isSuprimentoAdicional ? <SuprimentoResumoScreen selectedIndex={motivoIndex} /> : <Home4 selectedIndex={motivoIndex} />}
          {/* Faixa explicativa - posicionada abaixo da tabela */}
          <div className="fade-in-delay absolute bottom-[112px] left-0 right-0 px-[32px]">
            <div className="bg-[rgba(15,15,15,0.88)] flex gap-[20px] items-center px-[28px] py-[18px] rounded-[10px] w-full border border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.4)]" style={{ backdropFilter: 'blur(8px)' }}>
              <div className="shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                {isSuprimentoInicial ? (
                  <>
                    Selecione na lista o tipo de suprimento que deseja realizar. Nesta tela, a opção{" "}
                    <span className="font-bold text-white">"Suprimento Inicial"</span> já aparece previamente selecionada, pois é o motivo mais utilizado nos suprimentos de caixa. As teclas{" "}
                    <span className="font-bold text-white">V</span> (↑) e <span className="font-bold text-white">K</span> (↓) podem ser utilizadas para escolher outros motivos. Neste exemplo, prossiga com Suprimento Inicial.
                  </>
                ) : isSuprimentoAdicional ? (
                  <>
                    Selecione na lista o tipo de suprimento que deseja realizar. Nesta tela, a opção{" "}
                    <span className="font-bold text-white">"Suprimento Inicial"</span> já aparece previamente selecionada, pois é o motivo mais utilizado nos suprimentos de caixa. Use as teclas{" "}
                    <span className="font-bold text-white">V</span> (↑) e <span className="font-bold text-white">K</span> (↓) para escolher outro motivo. Neste exemplo, navegue entre as opções para selecionar{" "}
                    <span className="font-bold text-white">"Suprimento Complementar"</span>.
                  </>
                ) : (
                  <>
                    Para realizar a sangria, o usuário pode selecionar o tipo de sangria que deseja executar. Nessa tela, a opção{" "}
                    <span className="font-bold text-white">"Remessa Urna"</span> já aparece previamente selecionada, pois é o motivo mais utilizado nas sangrias de caixa. Use as teclas{" "}
                    <span className="font-bold text-white">V</span> (↑) e <span className="font-bold text-white">K</span> (↓) para escolher outro motivo.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Valor da Retirada - step 7 */}
      {(isTrainingMode && tutorialStep === 7) && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          {isSuprimentoAdicional ? <SuprimentoValorScreen valorCents={valorRetirada} isSuprimentoInicial={isSuprimentoInicial} /> : <ValorRetiradaScreen valorCents={valorRetirada} />}
        </div>
      )}

      {/* Comprovante / Encerramento - step 9 */}
      {isTrainingMode && tutorialStep === 9 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          {isSuprimentoAdicional ? (
            <SuprimentoComprovanteScreen valorCents={20000} saldoAnteriorCents={50} />
          ) : (
            <ComprovanteScreen valorCents={100000} saldoAnteriorCents={125000} />
          )}
        </div>
      )}

      {/* Fluxo de Formas de Pagamento - telas de tela cheia (steps 23 a 30) */}
      {isFormasDePagamento && tutorialStep === 23 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <PagamentoValorScreen valorCents={valorPagamento} valorAlvoCents={valorAlvoPagamento} metodo={metodoPagamentoAtual} />
        </div>
      )}
      {isFormasDePagamento && tutorialStep === 24 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <GavetaTrocoScreen valorRecebidoCents={valorPagamento} totalCents={4654} />
        </div>
      )}
      {isFormasDePagamento && tutorialStep === 26 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <ObrigadoScreen />
        </div>
      )}
      {isEnvioImpressaoCupom && tutorialStep === 34 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <ObrigadoScreen />
        </div>
      )}
      {isRegistroDeItensDePedidos && tutorialStep === 36 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <SelecionePedidoScreen pedidoSelecionado={pedidoSelecionado} />
        </div>
      )}
      {isLocalizarPedidoDoDelivery && tutorialStep === 39 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <InformeOVScreen ovNumero={ovNumero} ovCompleto={ovNumero.length === OV_EXEMPLO.length} />
        </div>
      )}
      {isConvenio && tutorialStep === 41 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <ConvenioEscolhaScreen />
        </div>
      )}
      {isConvenio && tutorialStep === 42 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <OutrosConveniosScreen
            codigo={convenioCodigo}
            codigoCompleto={convenioCodigo.length === CONVENIO_CODIGO_EXEMPLO.length}
            lista={convenioCodigo.length === 0 ? CONVENIOS_LISTA : CONVENIOS_LISTA.filter(c => c.codigo.startsWith(convenioCodigo))}
          />
        </div>
      )}
      {isConvenio && tutorialStep === 43 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <ConvenioCpfScreen cpfFormatado={formatCpf(convenioCpf)} cpfCompleto={convenioCpf.length === CPF_EXEMPLO.length} />
        </div>
      )}
      {isConvenio && tutorialStep === 44 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <ConvenioCarregandoScreen />
        </div>
      )}
      {isConvenio && tutorialStep === 45 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <ConvenioAguardandoScreen />
        </div>
      )}
      {isFormasDePagamento && tutorialStep === 27 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <PixAguardandoScreen />
        </div>
      )}
      {isFormasDePagamento && tutorialStep === 28 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <PagamentoValorScreen valorCents={valorPagamento} valorAlvoCents={valorAlvoPagamento} metodo={metodoPagamentoAtual} mostrarTooltip={false} />
          <MaquininhaAguardandoScreen metodo={pagamentoEtapaIndex === 2 ? "debito" : "credito"} />
        </div>
      )}
      {isFormasDePagamento && tutorialStep === 29 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <CreditoCategoriasScreen selectedIndex={categoriaPromocionalIndex} />
        </div>
      )}
      {isFormasDePagamento && tutorialStep === 30 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <CreditoParcelasScreen selectedIndex={parcelaIndex} />
        </div>
      )}

      {/* Overlay de dimming para destacar o footer */}
      {isTrainingMode && tutorialStep === 1 && (
        <div className="absolute inset-0 bottom-[42px] bg-white/70 rounded-t-[20px] z-[5] pointer-events-none" />
      )}

      {/* Modal Sangria / Suprimento */}
      {isTrainingMode && tutorialStep === 3 && (
        <>
          {/* Backdrop escuro com blur */}
          <div className="fade-in-delay absolute inset-0 bg-black/50 backdrop-blur-sm rounded-[20px] z-[20]" />

          {/* Tooltip acima do modal */}
          <div className="fade-in-delay absolute bottom-[220px] left-1/2 -translate-x-1/2 w-[700px] z-[35] pointer-events-none">
            <div className="bg-[#111] text-white text-[18px] font-['Nunito_Sans',sans-serif] leading-[1.6] px-[20px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              Será exibido um modal informando que a realização d{isSuprimentoInicial ? "o Suprimento Inicial" : isSuprimentoAdicional ? "o Suprimento Complementar" : "a Sangria de Caixa"} requer autorização do gerente. Para prosseguir com a operação, pressione a tecla <span className="font-bold">[Entra]</span>, confirmando que está ciente dessa exigência e concordando em solicitar a autorização necessária.
            </div>
            <div className="flex justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#111]" />
            </div>
          </div>

          {/* Modal bottom sheet */}
          <div className="fade-in-delay absolute bottom-0 left-0 right-0 z-[30] rounded-tl-[24px] rounded-tr-[24px] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.25)]">
            <Frame19591 />
          </div>
        </>
      )}

      {/* Modal - Identificar CPF/CNPJ na nota? (Cliente Cadastrado e Não Cadastrado) */}
      {isTrainingMode && tutorialStep === 11 && isClienteCadastrado && (
        <>
          {/* Backdrop escuro com blur */}
          <div className="fade-in-delay absolute inset-0 bg-black/50 backdrop-blur-sm rounded-[20px] z-[20]" />

          {/* Tooltip acima do modal */}
          <div className="fade-in-delay absolute bottom-[220px] left-1/2 -translate-x-1/2 w-[700px] z-[35] pointer-events-none">
            <div className="bg-[#111] text-white text-[18px] font-['Nunito_Sans',sans-serif] leading-[1.6] px-[20px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              Será exibido um modal perguntando se o cliente deseja que o CPF/CNPJ seja identificado na nota fiscal. Pressione a tecla <span className="font-bold">[Entra]</span> para confirmar a identificação ou <span className="font-bold">[Volta]</span> para prosseguir sem identificação.
            </div>
            <div className="flex justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#111]" />
            </div>
          </div>

          {/* Modal bottom sheet */}
          <div className="fade-in-delay absolute bottom-0 left-0 right-0 z-[30] rounded-tl-[24px] rounded-tr-[24px] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.25)] bg-white flex flex-col gap-[32px] px-[40px] py-[32px]">
            <div className="flex gap-[32px] items-center w-full">
              <div className="bg-[#f2fbf9] flex items-center justify-center p-[10px] rounded-full shrink-0">
                <img alt="" className="size-[32px]" src={iconeIdCard} />
              </div>
              <div className="flex flex-col gap-[10px] flex-1 text-[#7e7e7e]">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25px] leading-[1.2]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Identificar CPF/CNPJ na nota?
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Pressione [ENTRA] para informar ou [VOLTA] para continuar sem identificação.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div data-name="Button" className="bg-white border border-[#d4d4d4] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[185px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#ed403d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#ed403d]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Volta
                </p>
              </div>
              <div data-name="Button" className="bg-[#2258e6] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] w-[185px]">
                <img alt="" className="size-[16px]" src={iconeEntrar} />
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Entra
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal - Usar o mesmo CPF/CNPJ da identificação? (Cliente Cadastrado e Não Cadastrado) */}
      {isTrainingMode && tutorialStep === 13 && isClienteCadastrado && (
        <>
          {/* Backdrop escuro com blur */}
          <div className="fade-in-delay absolute inset-0 bg-black/50 backdrop-blur-sm rounded-[20px] z-[20]" />

          {/* Modal bottom sheet */}
          <div className="fade-in-delay absolute bottom-0 left-0 right-0 z-[30] rounded-tl-[24px] rounded-tr-[24px] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.25)] bg-white flex flex-col gap-[32px] px-[40px] py-[32px]">
            <div className="flex gap-[32px] items-center w-full">
              <div className="bg-[#f2fbf9] flex items-center justify-center p-[10px] rounded-full shrink-0">
                <img alt="" className="size-[32px]" src={iconeIdCard} />
              </div>
              <div className="flex flex-col gap-[10px] flex-1 text-[#7e7e7e]">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[25px] leading-[1.2]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Usar o mesmo CPF/CNPJ da identificação?
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] leading-[1.2]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Pressione [ENTRA] para sim ou [VOLTA] para digitar um novo CPF.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div data-name="Button" className="bg-white border border-[#d4d4d4] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[185px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#ed403d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#ed403d]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Volta
                </p>
              </div>
              <div data-name="Button" className="bg-[#2258e6] flex gap-[8px] h-[72px] items-center justify-center px-[24px] rounded-[8px] w-[185px]">
                <img alt="" className="size-[16px]" src={iconeEntrar} />
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Entra
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  if (!isTrainingMode) {
    return (
      <ScaleToFit designWidth={1280}>
        {/* PDV + máscara dentro do mesmo wrapper escalado → sempre alinhados */}
        <div className="relative w-[1280px]">
          {isAberturaDeCaixa ? <AberturaCaixaLoginScreen /> : pdvContent}

          {/* Play Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-[20px] cursor-pointer group hover:bg-black/70 transition-colors" onClick={() => {
            setShowKeyboard(false);
            // Envio e Impressão de Cupom parte direto da tela "Pagamento
            // realizado" (passo 31), retomando de onde o fluxo de Formas de
            // Pagamento terminou — sem a tela inicial (passo 0) com o
            // carrinho vazio usada pelos demais fluxos.
            setTutorialStep(isEnvioImpressaoCupom ? 31 : 0);
            setIsTrainingMode(true);
            if (isAberturaDeCaixa) {
              // Fluxo de Abertura de Caixa começa pela tela de login do PDV;
              // o restante do fluxo (boas-vindas + demais passos) só é
              // acionado quando o operador clica em Avançar nessa tela.
              setShowAberturaLogin(true);
              return;
            }
            // O áudio de boas-vindas toca sozinho quando a primeira tela
            // (banner de boas-vindas) aparece — ver efeito ligado a
            // isPrimeiraTelaTreinamento.
            setTimeout(() => {
              setShowTutorial(true);
            }, 300);
          }}>
            <div className="flex flex-col items-center gap-[24px]">
              <div className="w-[88px] h-[88px] bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-[42px] h-[42px]" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7L8 5z" fill="#2258e6" />
                </svg>
              </div>
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[28px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Iniciar Treinamento
              </p>
            </div>
          </div>
        </div>
      </ScaleToFit>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">


      {/* Close Button */}
      <button
        onClick={exitTraining}
        className="absolute top-[20px] right-[20px] w-[48px] h-[48px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group z-[60]"
      >
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* PDV - Centralizado verticalmente (escalado para caber em telas menores) */}
      <div className="absolute top-[42%] left-1/2 z-10" style={{ transform: `translate(-50%, -50%) scale(${trainingScale})` }}>


        {showAberturaLogin || showAberturaAutorizacao || showAberturaGerenteMatricula || showAberturaGerenteSenha ? (
          <AberturaCaixaLoginScreen
            campo={showAberturaGerenteSenha ? "senha" : "matricula"}
            valor={showAberturaGerenteMatricula ? aberturaMatricula : showAberturaGerenteSenha ? aberturaSenha : ""}
            entraState={showAberturaGerenteMatricula || showAberturaGerenteSenha ? aberturaEntraState : "disabled"}
          />
        ) : showEntradaOperadorMatricula ? (
          <EntradaOperadorScreen campo="matricula" valor={operadorMatricula} />
        ) : showEntradaOperadorSenha ? (
          <EntradaOperadorScreen campo="senha" valor={operadorSenha} />
        ) : pdvContent}

        {/* Tooltip - Autorização do Gerente (tela intermediária) */}
        {showAberturaAutorizacao && (
          <div className="fade-in-delay absolute pointer-events-none z-[45]" style={{ top: '227px', left: '678px', right: '32px' }}>
            <div className="bg-[rgba(15,15,15,0.92)] flex gap-[14px] items-start px-[20px] py-[14px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8 border-b-0" style={{ backdropFilter: 'blur(10px)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Esta operação requer autorização do gerente. Após a introdução das credenciais, você poderá continuar.
              </p>
            </div>
            {/* Triângulo apontando para baixo (em direção ao input) */}
            <div className="flex justify-center mt-0">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
            </div>
          </div>
        )}

        {/* Tooltip - Matrícula/Senha do Operador */}
        {(showEntradaOperadorMatricula || showEntradaOperadorSenha) && (
          <div key={showEntradaOperadorSenha ? "senha" : "matricula"} className="fade-in-delay absolute pointer-events-none z-[45]" style={{ top: '120px', left: '240px', right: '240px' }}>
            <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8 border-b-0" style={{ backdropFilter: 'blur(10px)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                {showEntradaOperadorSenha ? (
                  <>
                    Agora informe sua senha. Neste exemplo, digite o número{" "}
                    <span className="font-bold text-white">000000</span> no teclado virtual e pressione{" "}
                    <span className="font-bold text-white">[Entra]</span> para continuar.
                  </>
                ) : (
                  <>
                    Informe no teclado a sua matrícula. Neste exemplo, digite o número{" "}
                    <span className="font-bold text-white">000000</span> no teclado virtual e pressione{" "}
                    <span className="font-bold text-white">[Entra]</span> para continuar.
                  </>
                )}
              </p>
            </div>
            {/* Triângulo apontando para baixo (em direção ao input) */}
            <div className="flex justify-center mt-0">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
            </div>
          </div>
        )}

        {/* Banner Ação do Gerente - abaixo do PDV */}
        {(tutorialStep === 4 || showAberturaGerenteMatricula || showAberturaGerenteSenha) && (
          <div className="fade-in-delay absolute top-[calc(100%+16px)] left-0 right-0 z-[50]">
            <div className="relative flex items-center gap-[24px] w-full px-[32px] py-[20px] rounded-[14px] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white/60 rounded-l-[14px]" />
              <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full ml-[8px] bg-white/10 border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Ação do Gerente
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-white/60 leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Esta operação requer a presença e autenticação do gerente responsável pela loja.
                </p>
              </div>
              <div className="shrink-0 ml-auto flex items-center gap-[7px] rounded-full px-[14px] py-[7px] bg-white/10 border border-white/20">
                <div className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
                <span className="font-['Nunito_Sans',sans-serif] font-bold text-[11px] text-white uppercase tracking-widest">Aguardando</span>
              </div>
            </div>
          </div>
        )}

        {/* Tutorial Box - Positioned at bottom of PDV */}
        <div className={`absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20 transition-opacity duration-700 ease-in-out ${showTutorial || showAberturaLogin ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Inicio
            onNext={() => { stopAudio(); setTutorialStep(proximaEtapaAposBoasVindas); setShowTutorial(false); }}
            titulo={welcomeTitulo}
            descricao={welcomeDescricao}
          />
        </div>

        {/* Caixa preta de encerramento (mesmo box do passo inicial de
            boas-vindas), reaproveitada na última tela do fluxo de Cliente
            Cadastrado e Não Cadastrado */}
        {isClienteCadastrado && tutorialStep === 12 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <Inicio
              titulo="O cliente foi identificado"
              descricao="Neste momento é possível iniciar o registro dos produtos, tema do nosso próximo tutorial. Mas antes disso, vamos fazer um exemplo de como iniciar uma venda sem identificar o cliente."
            />
          </div>
        )}

        {/* Caixa preta de encerramento — tela final do exemplo de venda sem
            identificar o cliente */}
        {isClienteCadastrado && tutorialStep === 14 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <Inicio
              titulo="Cliente Não Identificado"
              descricao="Neste momento é possível iniciar o registro dos produtos, tema do nosso próximo tutorial."
            />
          </div>
        )}

        {/* Step 2 - Informativo Sangria (não se aplica aos fluxos de Cliente
            Cadastrado e Não Cadastrado e Registro de Produtos, que
            reaproveitam este simulador como placeholder) */}
        {tutorialStep === 2 && !isClienteCadastrado && !isRegistroDeProdutos && !isFormasDePagamento && !isConvenio && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              {/* Ícone */}
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              {/* Texto */}
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  {isSuprimentoInicial ? "O Suprimento Inicial inicia no botão de Sangria" : isSuprimentoAdicional ? "O Suprimento Complementar inicia no botão de Sangria" : "Iniciando a Sangria de Caixa"}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  {isSuprimentoAdicional ? (
                    <>Para iniciar o processo de {isSuprimentoInicial ? "Suprimento Inicial" : "Suprimento Complementar"}, pressione a tecla de Sangria no teclado do PDV, correspondente à tecla <span className="font-bold text-white">[V] Sangria</span>.</>
                  ) : (
                    <>Para iniciar o processo de Sangria de Caixa, pressione a tecla de Sangria no teclado do PDV, correspondente à tecla <span className="font-bold text-white">[V] Sangria</span>.</>
                  )}
                </p>
              </div>
              {/* Botão Sangria ilustração */}
              <div className="bg-[#2258e6] flex flex-col justify-between h-[123px] items-start p-[10px] relative rounded-[8px] w-[142px] shrink-0">
                <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-col items-start w-full gap-[4px]">
                  <div className="font-['Chivo_Mono',sans-serif] font-medium text-[14px] text-white leading-[16px]">V</div>
                  <div className="flex items-center justify-center w-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12l7-7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="font-['Geist',sans-serif] font-bold text-[16px] text-center text-white w-full leading-[16px]">SANGRIA</div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 - Informativo Registro de Produtos: instrui o operador a
            usar o botão "Escanear Produto" logo abaixo. */}
        {tutorialStep === 2 && isRegistroDeProdutos && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              {/* Ícone */}
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              {/* Texto */}
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Faça o registro do primeiro produto
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Neste exemplo, vamos simular o uso do leitor para registrar um produto. Clique no botão abaixo para seguir.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 - Informativo Convênio: instrui o operador a pressionar a
            tecla [R] Convênio para iniciar a identificação do conveniado. */}
        {tutorialStep === 2 && isConvenio && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              {/* Ícone */}
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              {/* Texto */}
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Identificando um cliente conveniado
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Para iniciar, pressione a tecla <span className="font-bold text-white">[R] Convênio</span> no teclado virtual.
                </p>
              </div>
              {/* Botão Convênio ilustração */}
              <div className="bg-[#2258e6] flex flex-col justify-between h-[123px] items-start p-[10px] relative rounded-[8px] w-[142px] shrink-0">
                <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
                <div className="font-['Chivo_Mono',sans-serif] font-medium text-[14px] text-white leading-[16px]">R</div>
                <div className="font-['Geist',sans-serif] font-bold text-[16px] text-center text-white w-full leading-[16px]">CONVÊNIO</div>
              </div>
            </div>
          </div>
        )}

        {/* Step 38 - Informativo Localizar Pedido do Delivery: instrui o
            operador a pressionar a tecla [F] Delivery para iniciar a busca
            do pedido pela OV. */}
        {tutorialStep === 38 && isLocalizarPedidoDoDelivery && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              {/* Ícone */}
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              {/* Texto */}
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Chegou um pedido do delivery!
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Para localizar o pedido, inicie pressionando a tecla <span className="font-bold text-white">[F] Delivery</span> no teclado.
                </p>
              </div>
              {/* Botão Delivery ilustração */}
              <div className="bg-[#2258e6] flex flex-col justify-between h-[123px] items-start p-[10px] relative rounded-[8px] w-[142px] shrink-0">
                <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
                <div className="font-['Chivo_Mono',sans-serif] font-medium text-[14px] text-white leading-[16px]">F</div>
                <div className="font-['Geist',sans-serif] font-bold text-[16px] text-center text-white w-full leading-[16px]">DELIVERY</div>
              </div>
            </div>
          </div>
        )}

        {/* Step 40 - Informativo Localizar Pedido do Delivery: cliente
            identificado e itens carregados automaticamente, pedido já pago,
            basta concluir o exemplo. */}
        {tutorialStep === 40 && isLocalizarPedidoDoDelivery && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              {/* Ícone */}
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              {/* Texto */}
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Pedido localizado
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  O cliente foi identificado e os itens do pedido foram carregados automaticamente. Como o pagamento já foi realizado no momento da compra online, a venda já está concluída. Clique em <span className="font-bold text-white">Concluir</span> para finalizar o exemplo.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 16 - Informativo Registro Manual: instrui o operador a abrir
            o teclado e digitar o código de barras de exemplo. */}
        {tutorialStep === 16 && isRegistroDeProdutos && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              {/* Ícone */}
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              {/* Texto */}
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Agora vamos fazer um registro manual
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Nem sempre o leitor é capaz de registrar o produto. Nesses casos, você poderá digitar os números que acompanham o código de barras, normalmente entre 8 e 13 dígitos. Pressione o botão Exibir Teclado, digite os números 11122233 e pressione <span className="font-bold text-white">[Entra]</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 18 - Informativo Multiplicando Produtos: instrui o operador a
            usar a tecla de multiplicação [*] para registrar mais de uma
            unidade do mesmo item. */}
        {tutorialStep === 18 && isRegistroDeProdutos && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              {/* Ícone */}
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              {/* Texto */}
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Multiplicando produtos
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Para registrar mais de um item no ponto de venda, o operador pode multiplicar a quantidade digitando o número de itens que o cliente irá levar e, em seguida, a tecla de <span className="font-bold text-white">multiplicação [*]</span>. Em seguida, o código de barras pode ser escaneado ou digitado.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Formas de Pagamento - passo 21: instrui o operador a pressionar
            [SUB TOTAL] no teclado virtual para iniciar o pagamento. */}
        {isFormasDePagamento && tutorialStep === 21 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Iniciando o pagamento
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Pressione a tecla <span className="font-bold text-white">[SUB TOTAL]</span> no teclado virtual para visualizar as formas de pagamento disponíveis.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Formas de Pagamento - passo 22: instrui o operador a selecionar a
            forma de pagamento do método atual, pressionando a tecla
            correspondente no teclado virtual. */}
        {isFormasDePagamento && tutorialStep === 22 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  {pagamentoEtapaIndex === 0 ? "Selecione a forma de pagamento" : pagamentoEtapaIndex === 1 ? "Pagamento por PIX" : pagamentoEtapaIndex === 2 ? "Pagamento no Débito" : "Pagamento no Crédito"}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  {pagamentoEtapaIndex === 0 && (
                    <>As formas de pagamento disponíveis são exibidas. Para este exemplo, vamos começar recebendo um pagamento em dinheiro. Selecione a opção <span className="font-bold text-white">[Suprimento Dinheiro]</span> no teclado virtual.</>
                  )}
                  {pagamentoEtapaIndex === 1 && (
                    <>Agora vamos simular um pagamento via PIX. Pressione a tecla <span className="font-bold text-white">[Voucher]</span> no teclado virtual.</>
                  )}
                  {pagamentoEtapaIndex === 2 && (
                    <>Agora vamos simular um pagamento no cartão de Débito. Pressione a tecla <span className="font-bold text-white">[Débito]</span> no teclado virtual.</>
                  )}
                  {pagamentoEtapaIndex === 3 && (
                    <>Por fim, vamos simular um pagamento no cartão de Crédito. Pressione a tecla <span className="font-bold text-white">[Crédito]</span> no teclado virtual.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Formas de Pagamento - passo 23: instrui a digitação do valor de
            pagamento correspondente ao método atual. */}
        {isFormasDePagamento && tutorialStep === 23 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  {pagamentoEtapaIndex === 0 ? "Informe o valor recebido" : "Informe o valor da compra"}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  {pagamentoEtapaIndex === 0 && (
                    <>Informe o valor recebido do cliente para o pagamento em dinheiro. Neste exemplo, o cliente entregou <span className="font-bold text-white">R$ 50,00</span>. Digite o valor no teclado virtual e pressione <span className="font-bold text-white">[Entra]</span> para continuar.</>
                  )}
                  {pagamentoEtapaIndex === 1 && (
                    <>Informe o valor exato da compra para gerar a cobrança via PIX. Neste exemplo, digite <span className="font-bold text-white">R$ 46,54</span> e pressione <span className="font-bold text-white">[Entra]</span> para continuar.</>
                  )}
                  {pagamentoEtapaIndex === 2 && (
                    <>Informe o valor exato da compra a ser cobrado no cartão de débito. Neste exemplo, digite <span className="font-bold text-white">R$ 46,54</span> e pressione <span className="font-bold text-white">[Entra]</span> para continuar.</>
                  )}
                  {pagamentoEtapaIndex === 3 && (
                    <>Informe o valor exato da compra a ser cobrado no cartão de crédito. Neste exemplo, digite <span className="font-bold text-white">R$ 46,54</span> e pressione <span className="font-bold text-white">[Entra]</span> para continuar.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Formas de Pagamento - passo 29: categorias promocionais do
            Crédito. */}
        {isFormasDePagamento && tutorialStep === 29 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Categorias Promocionais
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Alguns cartões de crédito possuem parcerias com a loja e oferecem condições especiais de parcelamento sem juros. Use as teclas <span className="font-bold text-white">[V]</span> (↑) e <span className="font-bold text-white">[K]</span> (↓) para navegar entre as categorias e pressione <span className="font-bold text-white">[Entra]</span> para confirmar a categoria destacada.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Formas de Pagamento - passo 30: parcelamento do Crédito. */}
        {isFormasDePagamento && tutorialStep === 30 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Parcelamento no Cartão de Crédito
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  O cartão de crédito permite dividir o valor da compra em várias parcelas. Muitos clientes desconhecem que, dependendo da categoria promocional escolhida, o parcelamento pode ser feito sem juros — o custo é absorvido pela loja, e não pelo cliente. Use <span className="font-bold text-white">[V]</span> (↑) e <span className="font-bold text-white">[K]</span> (↓) para navegar e <span className="font-bold text-white">[Entra]</span> para confirmar a quantidade de parcelas.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Formas de Pagamento - passo 26: conclusão do pagamento (tela
            "Obrigado pela preferência"). Mesmo posicionamento sobreposto do
            banner do passo 21 (bottom-[-100px]); z-[50] para ficar acima do
            ObrigadoScreen (z-40) que cobre a tela nesta etapa. */}
        {isFormasDePagamento && tutorialStep === 26 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-[50]">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Conclusão do pagamento
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  {pagamentoEtapaIndex === 0 && (
                    <>O pagamento com dinheiro foi concluído. Em seguida, vamos explorar outros métodos.</>
                  )}
                  {pagamentoEtapaIndex === 1 && (
                    <>O pagamento com PIX foi concluído. Em seguida, vamos explorar outros métodos.</>
                  )}
                  {pagamentoEtapaIndex === 2 && (
                    <>O pagamento no débito foi concluído. Em seguida, vamos explorar outros métodos.</>
                  )}
                  {pagamentoEtapaIndex === 3 && (
                    <>O pagamento no crédito foi concluído. Você chegou ao fim do exemplo de todas as formas de pagamento disponíveis no PDV.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Envio e Impressão de Cupom - passo 34: conclusão de cada opção
            demonstrada (tela "Obrigado pela preferência"). Mesmo padrão de
            banner sobreposto usado no passo 26 de Formas de Pagamento. */}
        {isEnvioImpressaoCupom && tutorialStep === 34 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-[50]">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Conclusão da emissão do cupom
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  {cupomEtapaIndex === 0 && (
                    <>O cupom foi impresso com sucesso, após a confirmação da matrícula e senha do operador. Em seguida, vamos explorar o envio por e-mail.</>
                  )}
                  {cupomEtapaIndex === 1 && (
                    <>O cupom é enviado por e-mail para o endereço cadastrado do cliente.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 7 - Tooltip Valor da Retirada */}
        {tutorialStep === 7 && (
          <div className="fade-in-delay absolute pointer-events-none z-[45]" style={{ top: '185px', left: '128px', right: '128px' }}>
            <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8 border-b-0" style={{ backdropFilter: 'blur(10px)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                {isSuprimentoAdicional ? (
                  <>
                    Informe o valor que será adicionado. Neste exemplo, será realizado um suprimento no valor de{" "}
                    <span className="font-bold text-white">R$ 200,00</span>. Digite utilizando o teclado virtual e pressione{" "}
                    <span className="font-bold text-white">[Entra]</span> para continuar.
                  </>
                ) : (
                  <>
                    Informe o valor que será retirado. Neste exemplo, será realizada uma sangria no valor de{" "}
                    <span className="font-bold text-white">R$ 1.000,00</span>. Digite utilizando o teclado virtual e pressione{" "}
                    <span className="font-bold text-white">[Entra]</span> para continuar.
                  </>
                )}
              </p>
            </div>
            {/* Triângulo apontando para baixo (em direção ao input) */}
            <div className="flex justify-center mt-0">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
            </div>
          </div>
        )}

        {/* Step 8 - Gaveta Aberta / Retirada */}
        {tutorialStep === 8 && (
          <>
            <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
              {isSuprimentoAdicional ? <SuprimentoValorScreen valorCents={valorRetirada} gavetaAberta isSuprimentoInicial={isSuprimentoInicial} /> : <Home6 />}
            </div>
            <div className="fade-in-delay absolute top-[calc(100%+16px)] left-0 right-0 z-[50]">
            <div className="relative flex items-center gap-[24px] w-full px-[32px] py-[20px] rounded-[14px] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white/60 rounded-l-[14px]" />
              <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full ml-[8px] bg-white/10 border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col gap-[2px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Gaveta Aberta
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-white/60 leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Nesta etapa, a gaveta do caixa ser&aacute; aberta. {isSuprimentoAdicional ? "Adicione o valor informado" : "Retire o valor indicado"} e, para prosseguir, feche a gaveta.
                </p>
              </div>
              <button
                onClick={() => { setTutorialStep(9); setValorRetirada(0); }}
                className="shrink-0 flex items-center gap-[8px] px-[20px] h-[48px] bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer border border-white/20"
                style={{
                  boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)',
                  animation: 'pulse-subtle 2s ease-in-out infinite'
                }}
              >
                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-['Nunito_Sans',sans-serif] font-bold text-[13px] text-white uppercase tracking-widest whitespace-nowrap">Fechar Gaveta</span>
              </button>
            </div>
          </div>
        </>)}

        {/* Formas de Pagamento - passo 24: Gaveta Aberta (Dinheiro) */}
        {isFormasDePagamento && tutorialStep === 24 && (
          <div className="fade-in-delay absolute top-[calc(100%+16px)] left-0 right-0 z-[50]">
            <div className="relative flex items-center gap-[24px] w-full px-[32px] py-[20px] rounded-[14px] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white/60 rounded-l-[14px]" />
              <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full ml-[8px] bg-white/10 border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col gap-[2px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Gaveta Aberta
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-white/60 leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Guarde o dinheiro recebido do cliente e retire o troco correspondente e, para prosseguir, feche a gaveta.
                </p>
              </div>
              <button
                onClick={() => setTutorialStep(25)}
                className="shrink-0 flex items-center gap-[8px] px-[20px] h-[48px] bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer border border-white/20"
                style={{
                  boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)',
                  animation: 'pulse-subtle 2s ease-in-out infinite'
                }}
              >
                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-['Nunito_Sans',sans-serif] font-bold text-[13px] text-white uppercase tracking-widest whitespace-nowrap">Fechar Gaveta</span>
              </button>
            </div>
          </div>
        )}

        {/* Formas de Pagamento - passo 27: Aguardando pagamento PIX */}
        {isFormasDePagamento && tutorialStep === 27 && (
          <div className="fade-in-delay absolute top-[calc(100%+16px)] left-0 right-0 z-[50]">
            <div className="relative flex items-center gap-[24px] w-full px-[32px] py-[20px] rounded-[14px] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white/60 rounded-l-[14px]" />
              <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full ml-[8px] bg-white/10 border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="1.6" />
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="1.6" />
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="1.6" />
                </svg>
              </div>
              <div className="flex flex-col gap-[2px] flex-1">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Aguardando o pagamento
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-white/60 leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  O cliente escaneia o QR Code e realiza o pagamento no seu app bancário. Após o processamento do pagamento, o sistema avança automaticamente.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Banner de conclusão - step 9 (comprovante) / Identificação do Cliente (Abertura de Caixa) / step 46 (Convênio) */}
        {(tutorialStep === 9 || showAberturaIdentificacao || (isConvenio && tutorialStep === 46)) && (
          <div className="fade-in-delay absolute top-[calc(100%+16px)] left-0 right-0 z-[50]">
            <div className="relative flex items-center gap-[24px] w-full px-[32px] py-[20px] rounded-[14px] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white/60 rounded-l-[14px]" />
              <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full ml-[8px] bg-white/10 border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Parabéns!
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[16px] text-white/60 leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  {isSuprimentoInicial ? "O suprimento inicial foi realizado e concluído com sucesso." : isSuprimentoAdicional ? "O suprimento complementar foi realizado e concluído com sucesso." : isAberturaDeCaixa ? "A abertura de caixa foi realizada e concluída com sucesso." : isConvenio ? "O convênio foi identificado e os descontos aplicados à venda com sucesso." : "A sangria de caixa foi realizada e concluída com sucesso."}
                </p>
              </div>
            </div>
          </div>
        )}


        {/* Navegação do tutorial - plataforma de treinamentos */}
        <div className={`absolute ${tutorialStep === 8 || tutorialStep === 9 || showAberturaIdentificacao || (isFormasDePagamento && (tutorialStep === 24 || tutorialStep === 27)) || (isConvenio && tutorialStep === 46) ? 'bottom-[-160px]' : 'bottom-[-56px]'} left-0 right-0 z-[60] flex justify-between transition-opacity duration-700 ease-in-out ${(showAberturaLogin || showAberturaAutorizacao || showAberturaIdentificacao || showTutorial || showEntradaOperadorMatricula || showEntradaOperadorSenha || tutorialStep > 0) && tutorialStep !== 4 && tutorialStep !== 10 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Botão Anterior */}
          <button
            onClick={() => {
              if (showAberturaIdentificacao) { setShowAberturaIdentificacao(false); setShowEntradaOperadorSenha(true); setOperadorSenha(""); }
              else if (showAberturaAutorizacao) { setShowAberturaAutorizacao(false); setShowAberturaLogin(true); }
              else if (showEntradaOperadorSenha) { setShowEntradaOperadorSenha(false); setOperadorSenha(""); setShowEntradaOperadorMatricula(true); setOperadorMatricula(""); }
              else if (showEntradaOperadorMatricula) {
                setShowEntradaOperadorMatricula(false);
                setOperadorMatricula("");
                if (isEnvioImpressaoCupom) { setTutorialStep(31); }
                else { setShowAberturaLogin(true); }
              }
              else if (isAberturaDeCaixa && tutorialStep === 0) { stopAudio(); setShowTutorial(false); setShowAberturaLogin(true); }
              else if (tutorialStep === 2) {
                if (isClienteCadastrado && demoSemIdentificar) { setTutorialStep(12); setDemoSemIdentificar(false); }
                else if (pulaTelaLimiteCaixa) { setTutorialStep(0); setShowTutorial(true); setCpf(""); setDemoSemIdentificar(false); }
                else setTutorialStep(1);
              }
              else if (tutorialStep === 3) { setTutorialStep(2); setShowKeyboard(false); }
              else if (tutorialStep === 15) { setTutorialStep(2); setSku(""); }
              else if (tutorialStep === 16) { setTutorialStep(15); setSku(""); setShowKeyboard(false); }
              else if (tutorialStep === 17) { setTutorialStep(16); setSku(""); setShowKeyboard(false); }
              else if (tutorialStep === 18) { setTutorialStep(17); setSku(""); setShowKeyboard(false); }
              else if (tutorialStep === 19) { setTutorialStep(18); setSku(""); }
              else if (tutorialStep === 20) { setTutorialStep(19); }
              else if (tutorialStep === 14) { setTutorialStep(2); setShowKeyboard(false); setDemoSemIdentificar(true); }
              else if (tutorialStep === 13) { setTutorialStep(11); setShowKeyboard(false); }
              else if (tutorialStep === 12) { setTutorialStep(11); setShowKeyboard(false); }
              else if (tutorialStep === 11) { setTutorialStep(2); setShowKeyboard(false); setDemoSemIdentificar(false); }
              else if (tutorialStep === 5) setTutorialStep(3);
              else if (tutorialStep === 6) setTutorialStep(5);
              else if (tutorialStep === 7) { setTutorialStep(6); setValorRetirada(0); }
              else if (tutorialStep === 8) setTutorialStep(7);
              else if (tutorialStep === 9) setTutorialStep(8);
              else if (isFormasDePagamento && tutorialStep === 21) { setTutorialStep(0); setShowTutorial(true); setPagamentoEtapaIndex(0); }
              else if (isFormasDePagamento && tutorialStep === 22) {
                if (pagamentoEtapaIndex === 0) { setTutorialStep(21); }
                else { setPagamentoEtapaIndex((i) => i - 1); setTutorialStep(26); }
              }
              else if (isFormasDePagamento && tutorialStep === 23) { setTutorialStep(22); setValorPagamento(0); setShowKeyboard(false); }
              else if (isFormasDePagamento && tutorialStep === 24) { setTutorialStep(23); }
              else if (isFormasDePagamento && tutorialStep === 25) { setTutorialStep(pagamentoEtapaIndex === 0 ? 24 : pagamentoEtapaIndex === 1 ? 27 : 28); }
              else if (isFormasDePagamento && tutorialStep === 26) { setTutorialStep(25); }
              else if (isFormasDePagamento && tutorialStep === 27) { setTutorialStep(23); setValorPagamento(0); }
              else if (isFormasDePagamento && tutorialStep === 28) { setTutorialStep(pagamentoEtapaIndex === 3 ? 30 : 23); if (pagamentoEtapaIndex !== 3) { setValorPagamento(0); } }
              else if (isFormasDePagamento && tutorialStep === 29) { setTutorialStep(23); setValorPagamento(0); }
              else if (isFormasDePagamento && tutorialStep === 30) { setTutorialStep(29); }
              else if (isEnvioImpressaoCupom && tutorialStep === 31) { setShowTutorial(true); }
              else if (isRegistroDeItensDePedidos && tutorialStep === 35) { setShowTutorial(true); }
              else if (isRegistroDeItensDePedidos && tutorialStep === 36) { setPedidoSelecionado(true); setCpf(""); setTutorialStep(35); }
              else if (isRegistroDeItensDePedidos && tutorialStep === 37) { setPedidoSelecionado(true); setTutorialStep(36); }
              else if (isLocalizarPedidoDoDelivery && tutorialStep === 38) { setShowTutorial(true); }
              else if (isLocalizarPedidoDoDelivery && tutorialStep === 39) { setOvNumero(""); setShowKeyboard(false); setTutorialStep(38); }
              else if (isLocalizarPedidoDoDelivery && tutorialStep === 40) { setOvNumero(""); setCpf(""); setTutorialStep(39); }
              else if (isConvenio && tutorialStep === 41) { setTutorialStep(2); }
              else if (isConvenio && tutorialStep === 42) { setConvenioCodigo(""); setShowKeyboard(false); setTutorialStep(41); }
              else if (isConvenio && tutorialStep === 43) { setConvenioCpf(""); setShowKeyboard(false); setTutorialStep(42); }
              else if (isConvenio && tutorialStep === 44) { setTutorialStep(43); }
              else if (isConvenio && tutorialStep === 45) { setTutorialStep(44); }
              else if (isConvenio && tutorialStep === 46) { setTutorialStep(45); }
              else { setTutorialStep(0); setShowTutorial(true); }
            }}
            className={`flex items-center gap-[8px] px-[20px] h-[44px] bg-white/15 hover:bg-white/25 border border-white/20 text-white/80 hover:text-white rounded-[8px] transition-all ${!showAberturaAutorizacao && !showAberturaIdentificacao && !showEntradaOperadorMatricula && !showEntradaOperadorSenha && (showAberturaLogin || (tutorialStep === 0 && !(isAberturaDeCaixa && showTutorial)) || (isEnvioImpressaoCupom && tutorialStep === 31 && showTutorial) || (isRegistroDeItensDePedidos && tutorialStep === 35 && showTutorial) || (isLocalizarPedidoDoDelivery && tutorialStep === 38 && showTutorial)) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-['Nunito_Sans',sans-serif] text-[16px] font-semibold tracking-wide">Anterior</span>
          </button>

          {/* Botão Próximo - tela de login (Abertura de Caixa), steps 0, 1 e 9 */}
          <button
            onClick={() => {
              // O áudio de boas-vindas só deve tocar enquanto a tela à qual
              // ele pertence estiver visível — ao avançar, ele é cortado,
              // independentemente do fluxo ou da etapa de destino.
              stopAudio();
              if (showAberturaLogin) {
                setShowAberturaLogin(false);
                setShowAberturaAutorizacao(true);
              }
              else if (showAberturaAutorizacao) {
                setShowAberturaAutorizacao(false);
                setShowAberturaGerenteMatricula(true);
              }
              else if (showAberturaIdentificacao) {
                setShowAberturaIdentificacao(false);
                setTutorialStep(10);
              }
              else if (showTutorial) { setTutorialStep(proximaEtapaAposBoasVindas); setShowTutorial(false); }
              else if (isClienteCadastrado && tutorialStep === 12) { setCpf(""); setTutorialStep(2); setDemoSemIdentificar(true); }
              else if (isClienteCadastrado && tutorialStep === 14) { setTutorialStep(10); }
              else if (tutorialStep === 1) setTutorialStep(2);
              else if (tutorialStep === 9) setTutorialStep(10);
              else if (isRegistroDeProdutos && tutorialStep === 15) setTutorialStep(16);
              else if (isRegistroDeProdutos && tutorialStep === 17) setTutorialStep(18);
              else if (isRegistroDeProdutos && tutorialStep === 20) setTutorialStep(10);
              else if (isFormasDePagamento && tutorialStep === 26) {
                if (pagamentoEtapaIndex === 3) {
                  setTutorialStep(10);
                } else {
                  // [SUB TOTAL] já foi pressionado uma vez para revelar a
                  // grade de formas de pagamento; nas próximas voltas do
                  // ciclo, "Próximo" leva direto às instruções do método
                  // seguinte (passo 22), sem repetir o passo 21.
                  setValorPagamento(0);
                  setPagamentoEtapaIndex((i) => i + 1);
                  setTutorialStep(22);
                }
              }
              else if (isFormasDePagamento && tutorialStep === 27) { setTutorialStep(25); }
              else if (isFormasDePagamento && tutorialStep === 28) { setTutorialStep(25); }
              else if (isEnvioImpressaoCupom && tutorialStep === 34) {
                if (cupomEtapaIndex === 0) { setCupomEtapaIndex(1); setTutorialStep(31); }
                else { setTutorialStep(10); }
              }
              else if (isLocalizarPedidoDoDelivery && tutorialStep === 40) { setTutorialStep(10); }
              else if (isConvenio && tutorialStep === 44) { setTutorialStep(45); }
              else if (isConvenio && tutorialStep === 45) { setTutorialStep(46); }
              else if (isConvenio && tutorialStep === 46) { setTutorialStep(10); }
            }}
            className={`flex items-center gap-[8px] px-[20px] h-[44px] bg-white/15 hover:bg-white/25 border border-white/20 text-white/80 hover:text-white rounded-[8px] transition-all ${(showAberturaLogin || showAberturaAutorizacao || showAberturaIdentificacao || showTutorial || tutorialStep === 1 || tutorialStep === 9 || (isClienteCadastrado && (tutorialStep === 12 || tutorialStep === 14)) || (isRegistroDeProdutos && (tutorialStep === 15 || tutorialStep === 17 || tutorialStep === 20)) || (isFormasDePagamento && (tutorialStep === 26 || tutorialStep === 27 || tutorialStep === 28)) || (isEnvioImpressaoCupom && tutorialStep === 34) || (isLocalizarPedidoDoDelivery && tutorialStep === 40) || (isConvenio && (tutorialStep === 44 || tutorialStep === 45 || tutorialStep === 46))) ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <span className="font-['Nunito_Sans',sans-serif] text-[16px] font-semibold tracking-wide">
              {isRegistroDeProdutos && (tutorialStep === 15 || tutorialStep === 17) ? "Avançar" : (isFormasDePagamento && tutorialStep === 26 && pagamentoEtapaIndex === 3) || (isEnvioImpressaoCupom && tutorialStep === 34 && cupomEtapaIndex === 1) || (isLocalizarPedidoDoDelivery && tutorialStep === 40) || (isConvenio && tutorialStep === 46) ? "Concluir" : "Próximo"}
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Toggle Keyboard Button - Fixo na parte inferior */}
      <button
        onClick={() => {
          setShowKeyboard(!showKeyboard);
          if (isFirstAccess) {
            setIsFirstAccess(false);
          }
        }}
        className={`absolute bottom-[60px] left-1/2 -translate-x-1/2 px-[20px] h-[48px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center gap-[8px] transition-all group z-[30] ${
          isFirstAccess || (tutorialStep === 3 && !showKeyboard) || (tutorialStep === 5 && !showKeyboard) || (tutorialStep === 6 && !showKeyboard) || (tutorialStep === 7 && !showKeyboard) || (tutorialStep === 16 && !showKeyboard) || (tutorialStep === 18 && !showKeyboard) || (isFormasDePagamento && !showKeyboard && (tutorialStep === 21 || tutorialStep === 22 || tutorialStep === 23 || tutorialStep === 25 || tutorialStep === 29 || tutorialStep === 30)) ? 'animate-pulse-subtle' : ''
        } ${keyboardOcultoNestaEtapa ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={isFirstAccess || (tutorialStep === 3 && !showKeyboard) || (tutorialStep === 5 && !showKeyboard) || (tutorialStep === 6 && !showKeyboard) || (tutorialStep === 7 && !showKeyboard) || (tutorialStep === 16 && !showKeyboard) || (tutorialStep === 18 && !showKeyboard) || (isFormasDePagamento && !showKeyboard && (tutorialStep === 21 || tutorialStep === 22 || tutorialStep === 23 || tutorialStep === 25 || tutorialStep === 29 || tutorialStep === 30)) ? {
          boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)',
          animation: 'pulse-subtle 2s ease-in-out infinite'
        } : {}}
      >
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="white" strokeWidth="2" />
          <line x1="6" y1="10" x2="8" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="10" x2="12" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="10" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="14" x2="8" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="14" x2="16" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-['Geist',sans-serif] font-medium text-[14px] text-white">
          {showKeyboard ? "Ocultar Teclado" : "Exibir Teclado"}
        </span>
      </button>

      {/* Botão Escanear Produto - substitui o "Exibir Teclado" na segunda
          tela do fluxo de Registro de Produtos (leva à terceira tela) e
          também no passo 19 (leva ao passo 20, com o item multiplicado). */}
      {isRegistroDeProdutos && tutorialStep === 19 && (
        <div
          className="fade-in-delay absolute bottom-[160px] left-1/2 w-[380px] pointer-events-none z-[45]"
          style={{ transform: `translateX(-50%) scale(${trainingScale})`, transformOrigin: "bottom center" }}
        >
          <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Agora clique em Escanear Produtos
            </p>
          </div>
          <div className="flex justify-center mt-0">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
          </div>
        </div>
      )}

      {isRegistroDeProdutos && (tutorialStep === 2 || tutorialStep === 19) && (
        <button
          onClick={() => {
            setSku("");
            setTutorialStep(tutorialStep === 2 ? 15 : 20);
          }}
          className="absolute bottom-[60px] left-1/2 -translate-x-1/2 px-[20px] h-[48px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center gap-[8px] transition-all group z-[30] animate-pulse-subtle"
          style={{
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)',
            animation: 'pulse-subtle 2s ease-in-out infinite'
          }}
        >
          <img src={iconeEscanearProduto} alt="" className="w-[24px] h-[24px]" />
          <span className="font-['Geist',sans-serif] font-medium text-[14px] text-white">
            Escanear Produtos
          </span>
        </button>
      )}

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
          }
        }
        .fade-in-delay {
          animation: fade-in-delay 1.2s ease-in-out forwards;
        }
        @keyframes fade-in-delay {
          0% { opacity: 0; }
          60% { opacity: 0; }
          100% { opacity: 1; }
        }
        .fade-in-plain {
          animation: fade-in-plain 0.5s ease-in-out forwards;
        }
        @keyframes fade-in-plain {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      {/* Tooltip - Teclado numérico (passo 16, registro manual do fluxo de
          Registro de Produtos) */}
      {showKeyboard && isRegistroDeProdutos && tutorialStep === 16 && (
        <div
          className="fade-in-delay absolute bottom-[520px] left-1/2 w-[480px] pointer-events-none z-[45]"
          style={{ transform: `translateX(calc(-50% + 228px)) scale(${trainingScale})`, transformOrigin: "bottom center" }}
        >
          <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Insira o código de barras 11122233
            </p>
          </div>
          <div className="flex justify-center mt-0">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
          </div>
        </div>
      )}

      {/* Tooltip - Teclado numérico (passo 18, multiplicando produtos do
          fluxo de Registro de Produtos) */}
      {showKeyboard && isRegistroDeProdutos && tutorialStep === 18 && (
        <div
          className="fade-in-delay absolute bottom-[520px] left-1/2 w-[480px] pointer-events-none z-[45]"
          style={{ transform: `translateX(calc(-50% + 228px)) scale(${trainingScale})`, transformOrigin: "bottom center" }}
        >
          <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Neste exemplo, vamos multiplicar o produto que será registrado por 3.
            </p>
          </div>
          <div className="flex justify-center mt-0">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
          </div>
        </div>
      )}

      {/* Virtual Keyboard - Posicionado embaixo com animação */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 z-20 transform scale-[0.5] ${
          keyboardReady ? "transition-all duration-500 ease-in-out" : ""
        } ${
          showKeyboard ? "bottom-[-40px]" : "bottom-[-600px]"
        }`}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const buttonText = target.textContent?.trim();

          if (tutorialStep === 2 && buttonText === "SANGRIA" && !isConvenio) {
            setTutorialStep(3);
            setShowKeyboard(false);
            return;
          }
          if ((tutorialStep === 3 || tutorialStep === 6) && buttonText === "ENTRA") {
            setTutorialStep(tutorialStep === 3 ? 4 : 7);
            setShowKeyboard(false);
            return;
          }
          if (tutorialStep === 5 && buttonText === "1") {
            setTutorialStep(6);
            setShowKeyboard(false);
            return;
          }
          if (tutorialStep === 7) {
            if (buttonText === "LIMPA") { setValorRetirada(0); return; }
            if (buttonText === "VOLTA") { setValorRetirada(prev => Math.floor(prev / 10)); return; }
            if (buttonText === "ENTRA") {
              if (valorRetirada === valorAlvo) { setTutorialStep(8); setShowKeyboard(false); if (!isSuprimentoAdicional) setValorRetirada(0); }
              return;
            }
            if (buttonText === "00") { setValorRetirada(prev => Math.min(prev * 100, 99999999)); return; }
            if (buttonText && !isNaN(Number(buttonText))) {
              setValorRetirada(prev => Math.min(prev * 10 + Number(buttonText), 99999999));
              return;
            }
          }
          if (isFormasDePagamento && tutorialStep === 23) {
            const valorAlvo = pagamentoEtapaIndex === 0 ? 5000 : 4654;
            const digitosAtuaisPagamento = valorPagamento === 0 ? 0 : String(valorPagamento).length;
            const digitosAlvoPagamentoLen = String(valorAlvo).length;
            if (buttonText === "LIMPA") { setValorPagamento(0); return; }
            if (buttonText === "VOLTA") { setValorPagamento(prev => Math.floor(prev / 10)); return; }
            if (buttonText === "ENTRA") {
              if (valorPagamento === valorAlvo) {
                setShowKeyboard(false);
                if (pagamentoEtapaIndex === 0) setTutorialStep(24);
                else if (pagamentoEtapaIndex === 1) setTutorialStep(27);
                else if (pagamentoEtapaIndex === 2) setTutorialStep(28);
                else setTutorialStep(29);
              }
              return;
            }
            if (buttonText === "00") {
              if (digitosAtuaisPagamento + 2 <= digitosAlvoPagamentoLen) {
                setValorPagamento(prev => Math.min(prev * 100, 99999999));
              }
              return;
            }
            if (buttonText && !isNaN(Number(buttonText))) {
              if (digitosAtuaisPagamento < digitosAlvoPagamentoLen) {
                setValorPagamento(prev => Math.min(prev * 10 + Number(buttonText), 99999999));
              }
              return;
            }
          }
          if (buttonText && ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "00"].includes(buttonText)) {
            handleKeyPress(buttonText);
          } else if (buttonText === "ENTRA") {
            handleKeyPress("ENTRA");
          } else if (buttonText === "LIMPA") {
            handleKeyPress("LIMPA");
          } else if (buttonText === "VOLTA") {
            handleKeyPress("VOLTA");
          }
        }}
      >
        <VirtualKeyboard
          key={tutorialStep}
          highlightSangria={tutorialStep === 2 && !isClienteCadastrado && !isConvenio}
          onSangriaPress={tutorialStep === 2 && !isClienteCadastrado && !isConvenio ? () => { setTutorialStep(3); setShowKeyboard(false); } : undefined}
          highlightEntra={tutorialStep === 3 || (tutorialStep === 6 && (!isSuprimentoAdicional || motivoIndex === (isSuprimentoInicial ? 0 : 1))) || (tutorialStep === 7 && valorRetirada === valorAlvo) || (showEntradaOperadorMatricula && operadorMatricula.length === 6) || (showEntradaOperadorSenha && operadorSenha.length === 6) || (isClienteCadastrado && ((tutorialStep === 2 && (demoSemIdentificar || cpf.length === CPF_EXEMPLO.length)) || tutorialStep === 11 || tutorialStep === 13)) || (isRegistroDeProdutos && tutorialStep === 16 && sku.length === SKU_MANUAL_EXEMPLO.length) || (isFormasDePagamento && ((tutorialStep === 23 && valorPagamento === valorAlvoPagamento) || tutorialStep === 29 || tutorialStep === 30)) || (isRegistroDeItensDePedidos && ((tutorialStep === 35 && cpf.length === CPF_EXEMPLO.length) || (tutorialStep === 36 && pedidoSelecionado))) || (isLocalizarPedidoDoDelivery && tutorialStep === 39 && ovNumero.length === OV_EXEMPLO.length) || (isConvenio && ((tutorialStep === 42 && convenioCodigo.length === CONVENIO_CODIGO_EXEMPLO.length) || (tutorialStep === 43 && convenioCpf.length === CPF_EXEMPLO.length)))}
          highlightVolta={(isClienteCadastrado && tutorialStep === 2 && demoSemIdentificar) || (isFormasDePagamento && tutorialStep === 25)}
          onVoltaPress={
            isClienteCadastrado && tutorialStep === 2 && demoSemIdentificar
              ? () => handleKeyPress("VOLTA")
              : isFormasDePagamento && tutorialStep === 25
              ? () => setTutorialStep(26)
              : isEnvioImpressaoCupom && tutorialStep === 31
              ? () => handleKeyPress("VOLTA")
              : undefined
          }
          highlightMultiplica={isRegistroDeProdutos && tutorialStep === 18 && sku === "3"}
          onMultiplicaPress={isRegistroDeProdutos && tutorialStep === 18 && sku === "3" ? () => { setShowKeyboard(false); setSku(""); setTutorialStep(19); } : undefined}
          highlightSubTotal={(isFormasDePagamento && tutorialStep === 21) || (isRegistroDeItensDePedidos && tutorialStep === 37)}
          onSubTotalPress={
            isFormasDePagamento && tutorialStep === 21
              ? () => { setTutorialStep(22); setShowKeyboard(false); }
              : isRegistroDeItensDePedidos && tutorialStep === 37
              ? () => { setTutorialStep(10); setShowKeyboard(false); }
              : undefined
          }
          highlightSuprimentoDinheiro={isFormasDePagamento && tutorialStep === 22 && pagamentoEtapaIndex === 0}
          onSuprimentoDinheiroPress={isFormasDePagamento && tutorialStep === 22 && pagamentoEtapaIndex === 0 ? () => { setTutorialStep(23); setShowKeyboard(false); } : undefined}
          highlightDelivery={isLocalizarPedidoDoDelivery && tutorialStep === 38}
          onDeliveryPress={isLocalizarPedidoDoDelivery && tutorialStep === 38 ? () => { setTutorialStep(39); setShowKeyboard(false); } : undefined}
          highlightConvenio={isConvenio && tutorialStep === 2}
          onConvenioPress={isConvenio && tutorialStep === 2 ? () => { setTutorialStep(41); setShowKeyboard(false); } : undefined}
          highlightVoucher={isFormasDePagamento && tutorialStep === 22 && pagamentoEtapaIndex === 1}
          onVoucherPress={isFormasDePagamento && tutorialStep === 22 && pagamentoEtapaIndex === 1 ? () => { setTutorialStep(23); setShowKeyboard(false); } : undefined}
          highlightDebito={isFormasDePagamento && tutorialStep === 22 && pagamentoEtapaIndex === 2}
          onDebitoPress={isFormasDePagamento && tutorialStep === 22 && pagamentoEtapaIndex === 2 ? () => { setTutorialStep(23); setShowKeyboard(false); } : undefined}
          highlightCredito={isFormasDePagamento && tutorialStep === 22 && pagamentoEtapaIndex === 3}
          onCreditoPress={isFormasDePagamento && tutorialStep === 22 && pagamentoEtapaIndex === 3 ? () => { setTutorialStep(23); setShowKeyboard(false); } : undefined}
          onEntraPress={(tutorialStep === 3 || tutorialStep === 6 || (tutorialStep === 7 && valorRetirada === valorAlvo) || (showEntradaOperadorMatricula && operadorMatricula.length === 6) || (showEntradaOperadorSenha && operadorSenha.length === 6) || (isFormasDePagamento && ((tutorialStep === 23 && valorPagamento === valorAlvoPagamento) || tutorialStep === 29 || tutorialStep === 30))) ? () => {
            if (tutorialStep === 3) { setTutorialStep(4); setShowKeyboard(false); }
            else if (tutorialStep === 6) { setTutorialStep(7); setShowKeyboard(false); }
            else if (tutorialStep === 7 && valorRetirada === valorAlvo) { setTutorialStep(8); setShowKeyboard(false); if (!isSuprimentoAdicional) setValorRetirada(0); }
            else if (showEntradaOperadorMatricula && operadorMatricula.length === 6) {
              setShowKeyboard(false);
              setShowEntradaOperadorMatricula(false);
              setOperadorMatricula("");
              setShowEntradaOperadorSenha(true);
            }
            else if (showEntradaOperadorSenha && operadorSenha.length === 6) {
              setShowKeyboard(false);
              setShowEntradaOperadorSenha(false);
              setOperadorSenha("");
              if (isEnvioImpressaoCupom) { setTutorialStep(34); }
              else { setShowAberturaIdentificacao(true); }
            }
            else if (isFormasDePagamento && tutorialStep === 23 && valorPagamento === valorAlvoPagamento) {
              setShowKeyboard(false);
              if (pagamentoEtapaIndex === 0) setTutorialStep(24);
              else if (pagamentoEtapaIndex === 1) setTutorialStep(27);
              else if (pagamentoEtapaIndex === 2) setTutorialStep(28);
              else setTutorialStep(29);
            }
            else if (isFormasDePagamento && tutorialStep === 29) {
              setShowKeyboard(false);
              setTutorialStep(30);
            }
            else if (isFormasDePagamento && tutorialStep === 30) { setTutorialStep(28); setShowKeyboard(false); }
          } : undefined}
          highlightKey1={(tutorialStep === 5 && !isSuprimentoAdicional) || (tutorialStep === 7 && valorRetirada === 0 && !isSuprimentoAdicional) || proximoDigitoCpf === "1" || proximoDigitoSkuManual === "1" || proximoDigitoPagamento === "1" || proximoDigitoOv === "1" || proximoDigitoConvenio === "1" || proximoDigitoConvenioCpf === "1" || (isEnvioImpressaoCupom && tutorialStep === 31 && !showEntradaOperadorMatricula && !showEntradaOperadorSenha && cupomEtapaIndex === 1)}
          onKey1Press={
            tutorialStep === 5 && !isSuprimentoAdicional
              ? () => { setTutorialStep(6); setShowKeyboard(false); }
              : isEnvioImpressaoCupom && tutorialStep === 31 && !showEntradaOperadorMatricula && !showEntradaOperadorSenha
              ? () => { setShowKeyboard(false); setTutorialStep(34); }
              : undefined
          }
          highlightKey2={(tutorialStep === 5 && isSuprimentoAdicional) || (tutorialStep === 7 && valorRetirada === 0 && isSuprimentoAdicional) || proximoDigitoCpf === "2" || proximoDigitoSkuManual === "2" || proximoDigitoPagamento === "2" || proximoDigitoOv === "2" || proximoDigitoConvenio === "2" || proximoDigitoConvenioCpf === "2" || (isConvenio && tutorialStep === 41) || (isEnvioImpressaoCupom && tutorialStep === 31 && !showEntradaOperadorMatricula && !showEntradaOperadorSenha && cupomEtapaIndex === 0)}
          onKey2Press={
            tutorialStep === 5 && isSuprimentoAdicional
              ? () => { setTutorialStep(6); setShowKeyboard(false); }
              : isEnvioImpressaoCupom && tutorialStep === 31 && !showEntradaOperadorMatricula && !showEntradaOperadorSenha
              ? () => { setShowKeyboard(false); setShowEntradaOperadorMatricula(true); }
              : undefined
          }
          highlightKey0={(tutorialStep === 7 && valorRetirada > 0 && valorRetirada < valorAlvo) || (showEntradaOperadorMatricula && operadorMatricula.length < 6) || (showEntradaOperadorSenha && operadorSenha.length < 6) || proximoDigitoCpf === "0" || proximoDigitoPagamento === "0" || proximoDigitoOv === "0" || proximoDigitoConvenio === "0" || proximoDigitoConvenioCpf === "0"}
          onKey0Press={undefined}
          highlightKey3={proximoDigitoCpf === "3" || proximoDigitoSkuManual === "3" || (isRegistroDeProdutos && tutorialStep === 18 && sku.length === 0) || proximoDigitoPagamento === "3" || proximoDigitoOv === "3" || proximoDigitoConvenio === "3" || proximoDigitoConvenioCpf === "3"}
          highlightKey4={proximoDigitoCpf === "4" || proximoDigitoPagamento === "4" || proximoDigitoOv === "4" || proximoDigitoConvenio === "4" || proximoDigitoConvenioCpf === "4"}
          highlightKey5={proximoDigitoCpf === "5" || proximoDigitoPagamento === "5" || proximoDigitoOv === "5" || proximoDigitoConvenio === "5" || proximoDigitoConvenioCpf === "5"}
          highlightKey6={proximoDigitoCpf === "6" || proximoDigitoPagamento === "6" || proximoDigitoOv === "6" || proximoDigitoConvenio === "6" || proximoDigitoConvenioCpf === "6"}
          highlightKey7={proximoDigitoCpf === "7" || proximoDigitoPagamento === "7" || proximoDigitoOv === "7" || proximoDigitoConvenio === "7" || proximoDigitoConvenioCpf === "7"}
          highlightKey8={proximoDigitoCpf === "8" || proximoDigitoPagamento === "8" || proximoDigitoOv === "8" || proximoDigitoConvenio === "8" || proximoDigitoConvenioCpf === "8"}
          highlightKey9={proximoDigitoCpf === "9" || proximoDigitoPagamento === "9" || proximoDigitoOv === "9" || proximoDigitoConvenio === "9" || proximoDigitoConvenioCpf === "9"}
          highlightV={tutorialStep === 6 || (isFormasDePagamento && (tutorialStep === 29 || tutorialStep === 30))}
          onVPress={tutorialStep === 6 || (isFormasDePagamento && (tutorialStep === 29 || tutorialStep === 30)) ? handleVPress : undefined}
          highlightK={tutorialStep === 6 || (isFormasDePagamento && (tutorialStep === 29 || tutorialStep === 30)) || (isRegistroDeItensDePedidos && tutorialStep === 36 && !pedidoSelecionado)}
          onKPress={tutorialStep === 6 || (isFormasDePagamento && (tutorialStep === 29 || tutorialStep === 30)) || (isRegistroDeItensDePedidos && tutorialStep === 36) ? handleKPress : undefined}
        />
      </div>

      {/* Step 10 - Conclusão do treinamento (estilo "fim de vídeo") */}
      {tutorialStep === 10 && (
        <div className="absolute inset-0 z-[80] bg-black flex justify-center overflow-y-auto p-[40px]">
          <div
            className="m-auto relative flex flex-col items-center gap-[32px] max-w-[920px] w-full rounded-[24px] p-[48px]"
            style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(4px)' }}
          >
          <div className="fade-in-plain flex flex-col items-center gap-[44px] w-full">
            {/* Cabeçalho - parabéns */}
            <div className="flex flex-col items-center gap-[20px] text-center">
              <div className="flex items-center justify-center w-[96px] h-[96px] rounded-full bg-[#06AC73]/15 border border-[#06AC73]/40">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#37d39b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[12px] items-center">
                <p className="font-['Nunito_Sans',sans-serif] font-bold text-[40px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Treinamento concluído!
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-white/80 leading-relaxed max-w-[580px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Parabéns! Você concluiu o treinamento de <span className="font-bold text-white">{isSuprimentoInicial ? "Suprimento Inicial" : isSuprimentoAdicional ? "Suprimento Complementar" : isAberturaDeCaixa ? "Abertura de Caixa" : isClienteCadastrado ? "Cliente Cadastrado e Não Cadastrado" : isRegistroDeProdutos ? "Registro de Produtos" : isFormasDePagamento ? "Formas de Pagamento" : isEnvioImpressaoCupom ? "Envio e Impressão de Cupom" : isRegistroDeItensDePedidos ? "Registro de Itens de Pedidos" : isLocalizarPedidoDoDelivery ? "Localizar Pedido do Delivery" : isConvenio ? "Convênios" : "Sangria de Caixa"}</span>. {isClienteCadastrado ? "Agora você está pronto para iniciar vendas identificando ou não os clientes." : isRegistroDeProdutos ? "Agora você está pronto para adicionar itens durante o processo de venda." : isFormasDePagamento ? "Agora você está pronto para receber pagamentos em Dinheiro, PIX, Débito ou Crédito." : isEnvioImpressaoCupom ? "Agora você está pronto para emitir o cupom fiscal por e-mail ou impressão, conforme a escolha do cliente." : isRegistroDeItensDePedidos ? "Agora você está pronto para localizar pedidos pelo CPF do cliente e carregar seus itens automaticamente no caixa." : isLocalizarPedidoDoDelivery ? "Agora você está pronto para localizar pedidos de delivery pela OV e carregar automaticamente o cliente e os itens já pagos." : isConvenio ? "Agora você está pronto para identificar clientes conveniados e aplicar os benefícios do convênio na venda." : "Agora você está pronto para realizar essa operação no PDV."}
                </p>
              </div>
            </div>

            {/* Sugestões de próximos treinamentos */}
            <div className="w-full flex flex-col gap-[20px]">
              <p className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-white/90 text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Continue aprendendo
              </p>
              <div className="grid grid-cols-2 gap-[24px]">
                {proximosTreinamentos.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => goToTraining(s.slug)}
                    className="group flex gap-[20px] items-center p-[16px] rounded-[14px] bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left cursor-pointer"
                  >
                    <div className="relative w-[160px] h-[100px] rounded-[10px] overflow-hidden shrink-0">
                      <img src={s.imagem} alt="" className="absolute inset-0 size-full object-cover" />
                      <div className="absolute inset-0 bg-[rgba(51,50,67,0.45)] group-hover:bg-[rgba(51,50,67,0.3)] transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[44px] h-[44px] rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                            <path d="M8 5v14l11-7L8 5z" fill="#2258e6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                      <p className="font-['Nunito_Sans',sans-serif] font-bold text-[17px] text-white leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        {s.titulo}
                      </p>
                      <p className="font-['Nunito_Sans',sans-serif] text-[13px] text-white/60 leading-relaxed line-clamp-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        {s.descricao}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

            {/* Botão Fechar - inferior centralizado, estilo plataforma */}
            <button
              onClick={exitTraining}
              className="flex items-center gap-[8px] px-[20px] h-[44px] bg-white/15 hover:bg-white/25 border border-white/20 text-white/80 hover:text-white rounded-[8px] transition-all cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-['Nunito_Sans',sans-serif] text-[14px] font-semibold tracking-wide">Fechar</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function TrilhaCard({ titulo, descricao, ativo, onClick }: { titulo: string; descricao?: string; ativo: boolean; onClick?: () => void }) {
  const clicavel = Boolean(onClick);
  return (
    <div
      onClick={onClick}
      className={`bg-white border rounded-[8px] overflow-hidden flex items-stretch${clicavel ? " cursor-pointer hover:shadow-md transition-shadow" : ""} ${ativo ? "border-[#2258e6]" : "border-[#e5e5e5]"}`}
    >
      <div className={`w-[4px] shrink-0 ${ativo ? "bg-[#2258e6]" : "bg-[#FF5C5C]"}`} />
      <div className="flex-1 min-w-0 px-[16px] py-[12px] flex flex-col gap-[4px]">
        <div className="flex items-center justify-between gap-[8px]">
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#383838] leading-[1.2]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            {titulo}
          </p>
          {ativo && (
            <span className="shrink-0 font-['Geist',sans-serif] font-semibold text-[10px] tracking-wide uppercase text-[#2258e6] bg-[#2258e6]/10 px-[8px] py-[2px] rounded-full">
              Em andamento
            </span>
          )}
        </div>
        <p
          className="font-['Nunito_Sans',sans-serif] font-normal text-[14px] text-[#6c6c6c] leading-[1.4]"
          style={{
            fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {descricao ?? "Conteúdo em breve."}
        </p>
      </div>
    </div>
  );
}

// Cada categoria aponta o link "Próximos treinamentos" para o primeiro fluxo
// da categoria seguinte: Início da Operação -> Atendimento e Vendas ->
// Resgate de Pedido Balcão -> Resgate de Pedido Delivery.
const PROXIMO_TREINAMENTO_POR_CATEGORIA: Record<string, string> = {
  "Início da Operação": "cliente-cadastrado-e-nao-cadastrado",
  "Atendimento e Vendas": "registro-de-itens-de-pedidos",
  "Resgate de Pedido Balcão": "localizar-pedido-do-delivery",
  "Resgate de Pedido Delivery": "convenio",
  "Programas e Benefícios": "liberacao-com-receita"
};

function TrilhaTreinamentos({ categoria, slugAtual }: { categoria: CategoriaSecaoData; slugAtual?: string }) {
  const navigate = useNavigate();
  const proximoSlug = PROXIMO_TREINAMENTO_POR_CATEGORIA[categoria.titulo];

  return (
    <div className="flex flex-col">
      <p className="font-['Geist',sans-serif] font-medium text-[10px] tracking-[2px] uppercase text-[#737373]">
        Trilha de Treinamentos
      </p>
      <h3 className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-[#383838] mt-[4px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        {categoria.titulo}
      </h3>
      <div className="border-b border-[#e5e5e5] mt-[16px] mb-[24px]" />
      <div className="flex flex-col gap-[12px]">
        {categoria.cards.map((item) => (
          <TrilhaCard
            key={item.titulo}
            titulo={item.titulo}
            descricao={item.descricao}
            ativo={item.slug === slugAtual}
            onClick={item.slug ? () => navigate(`/funcionalidade/${item.slug}`) : undefined}
          />
        ))}
      </div>
      <div className="border-b border-[#e5e5e5] mt-[24px] mb-[16px]" />
      <div className="flex justify-end">
        <button
          onClick={proximoSlug ? () => navigate(`/funcionalidade/${proximoSlug}`) : undefined}
          className={`font-['Geist',sans-serif] font-medium text-[13px] text-[#2258e6] ${proximoSlug ? "hover:underline cursor-pointer" : "opacity-50 cursor-default"}`}
        >
          Próximos treinamentos
        </button>
      </div>
    </div>
  );
}

function ContentBody({ conteudo, hasPDV, slug }: { conteudo: string; hasPDV?: boolean; slug?: string }) {
  const categoria = slug
    ? secoesCategorias.find((secao) => secao.cards.some((card) => card.slug === slug))
    : undefined;
  const scrollRef = useRef<HTMLDivElement>(null);
  // Ao navegar entre páginas de tutorial (ex.: via "Próximos treinamentos"),
  // o scroll deve sempre reiniciar no topo, em vez de manter a posição da
  // página anterior.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [slug]);

  return (
    <div ref={scrollRef} className="bg-white flex-[1_0_0] min-h-px relative w-full overflow-y-auto" data-name="Table">
      <div className="w-full max-w-[1440px] mx-auto px-[96px] pt-[48px] pb-[64px]">
        <div className="grid grid-cols-12 gap-[32px] items-start">
          <div className={categoria ? "col-span-8" : "col-span-12"}>
            <div className="prose max-w-none mb-[32px]">
              <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[#434343] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                {conteudo}
              </p>
            </div>
            {hasPDV && (
              <div className="mt-[32px]">
                <h2 className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-[#383838] mb-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Simulador PDV - Prática de Treinamento
                </h2>
                <PDVSimulator slug={slug} />
              </div>
            )}
          </div>
          {categoria && (
            <div className="col-span-4">
              <TrilhaTreinamentos categoria={categoria} slugAtual={slug} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function FuncionalidadePage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const handleBack = () => {
    navigate("/dashboard");
  };

  const content = slug ? funcionalidadesContent[slug] : null;

  if (!content) {
    navigate("/dashboard");
    return null;
  }

  return (
    <div className="bg-white content-stretch flex isolate items-center relative h-screen w-full" data-name="Funcionalidade">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative z-[1]">
        <Frame2 />
        <ContentHeader titulo={content.titulo} onBack={handleBack} />
        <ContentBody conteudo={content.conteudo} hasPDV={content.hasPDV} slug={slug} />
      </div>
    </div>
  );
}
