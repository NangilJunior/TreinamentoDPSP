export interface CategoriaCardData {
  titulo: string;
  descricao?: string;
  slug?: string;
}

export interface CategoriaSecaoData {
  titulo: string;
  cards: CategoriaCardData[];
}

export const secoesCategorias: CategoriaSecaoData[] = [
  {
    titulo: "Início da Operação",
    cards: [
      {
        titulo: "Abertura de Caixa",
        descricao: "A abertura de caixa é o protocolo de segurança que autoriza o início das atividades de um operador no PDV. O processo exige a validação prévia de um gerente, seguida da autenticação do operador, garantindo rastreabilidade e prevenção de acessos não autorizados ao caixa.",
        slug: "abertura-de-caixa"
      },
      {
        titulo: "Suprimento Inicial",
        descricao: "O Suprimento Inicial é a entrada de dinheiro no PDV antes do início das vendas, garantindo ao operador cédulas e moedas suficientes para realizar os primeiros trocos.",
        slug: "suprimento-inicial"
      }
    ]
  },
  {
    titulo: "Atendimento e Vendas",
    cards: [
      {
        titulo: "Cliente Cadastrado e Não Cadastrado",
        descricao: "Para iniciar o atendimento, o operador pode informar o CPF ou CNPJ do cliente caso este deseje ser identificado na venda.",
        slug: "cliente-cadastrado-e-nao-cadastrado"
      },
      {
        titulo: "Registro de Produtos",
        descricao: "Etapa em que produtos são adicionados à venda. O registro pode ser feito pelo código de barras, utilizando um leitor ou digitando sua numeração. Após a identificação, os dados do produto são exibidos na tela.",
        slug: "registro-de-produtos"
      },
      {
        titulo: "Formas de Pagamento",
        descricao: "Na etapa de pagamento, o operador seleciona o método escolhido pelo cliente e realiza o recebimento em dinheiro ou por meio de algum outro método (como crédito, débito ou PIX).",
        slug: "formas-de-pagamento"
      },
      {
        titulo: "Envio e Impressão de Cupom",
        descricao: "Ao finalizar a venda, o operador pode selecionar a forma de emissão do cupom fiscal, que pode ser enviado para o e-mail cadastrado do cliente ou impresso na hora.",
        slug: "envio-e-impressao-de-cupom"
      }
    ]
  },
  {
    titulo: "Resgate de Pedido Balcão",
    cards: [
      {
        titulo: "Registro de Itens de Pedidos",
        descricao: "Quando os produtos do pedido já foram registrados pelo farmacêutico, o operador consegue carregá-los no caixa para realizar o pagamento, sem a necessidade de escaneá-los.",
        slug: "registro-de-itens-de-pedidos"
      }
    ]
  },
  {
    titulo: "Resgate de Pedido Delivery",
    cards: [
      {
        titulo: "Localizar Pedido do Delivery",
        descricao: "Quando entregadores se dirigem ao caixa para fazer uma retirada, eles informam o número da ordem de venda, que permite localizar os dados do pedido.",
        slug: "localizar-pedido-do-delivery"
      }
    ]
  },
  {
    titulo: "Programas e Benefícios",
    cards: [
      {
        titulo: "Convênios",
        descricao: "Para que as condições do Convênio, como promoções e descontos, sejam aplicadas à venda, é necessário realizar uma autenticação com o provedor.",
        slug: "convenio"
      },
      { titulo: "PBM" },
      { titulo: "Farmácia Popular" }
    ]
  },
  {
    titulo: "Medicamentos Controlados",
    cards: [
      {
        titulo: "Liberação de Medicamento Controlado com Receita",
        descricao: "Ao registrar um medicamento controlado, o operador informa o número da receita para que o sistema realize sua autenticação antes de adicionar o item à venda.",
        slug: "liberacao-com-receita"
      },
      {
        titulo: "Liberação de Medicamento Controlado Sem Receita",
        descricao: "Quando um medicamento controlado não possui receita, sua liberação no PDV depende da autorização de um gerente antes que o item possa ser adicionado à venda.",
        slug: "liberacao-manual"
      }
    ]
  },
  { titulo: "Experiência do Cliente", cards: [{ titulo: "Encantômetro" }] },
  { titulo: "Ajustes durante a Venda", cards: [{ titulo: "Consulta de Preço" }, { titulo: "Cancelamento Parcial" }, { titulo: "Cancelamento Total" }, { titulo: "DDG (Desconto Gerencial)" }] },
  { titulo: "Pós-Venda", cards: [{ titulo: "Estorno" }, { titulo: "Troca de Mercadoria" }, { titulo: "Reimpressão de Cupom" }, { titulo: "Reimpressão de Comprovantes" }, { titulo: "Reimpressão Farmácia Popular" }] },
  {
    titulo: "Gestão do Caixa",
    cards: [
      {
        titulo: "Sangria de Caixa",
        descricao: "A sangria de caixa é um procedimento de segurança que consiste na retirada do excesso de dinheiro (notas físicas) do caixa durante o expediente. Este processo visa reduzir riscos de assaltos e garantir que o caixa mantenha apenas o valor necessário para o troco das operações diárias.",
        slug: "sangria-de-caixa"
      },
      {
        titulo: "Suprimento Complementar",
        descricao: "O Suprimento Complementar é a entrada adicional de dinheiro no PDV durante a operação, realizada quando é necessário reforçar o caixa para continuar dando troco.",
        slug: "suprimento-complementar"
      }
    ]
  },
  { titulo: "Consultas e Relatórios", cards: [{ titulo: "Venda Detalhe" }, { titulo: "Relatório do Operador" }, { titulo: "Relatório do Dia" }] },
  { titulo: "Encerramento da Operação", cards: [{ titulo: "Saída do Operador" }, { titulo: "Fechamento de Caixa" }, { titulo: "Fechamento Z" }] },
];
