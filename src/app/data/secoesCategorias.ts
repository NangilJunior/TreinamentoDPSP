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
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        slug: "formas-de-pagamento"
      },
      {
        titulo: "Finalização da Venda",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        slug: "finalizacao-da-venda"
      }
    ]
  },
  { titulo: "Resgate de Pedido Balcão", cards: [{ titulo: "Localizar Cesta Criada no Balcão" }, { titulo: "Resgatar Atendimento" }, { titulo: "Finalizar Pagamento" }] },
  { titulo: "Resgate de Pedido Delivery", cards: [{ titulo: "Localizar Pedido Online" }, { titulo: "Conferir Produtos" }, { titulo: "Faturar Pedido" }, { titulo: "Finalizar Atendimento" }] },
  { titulo: "Programas e Benefícios", cards: [{ titulo: "Convênios" }, { titulo: "PBM" }, { titulo: "Farmácia Popular" }] },
  { titulo: "Medicamentos Controlados", cards: [{ titulo: "Resgate de Receita Digital" }, { titulo: "Liberação Manual" }, { titulo: "Finalização da Venda" }] },
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
