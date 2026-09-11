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
  { titulo: "Início da Operação", cards: [{ titulo: "Abertura de caixa" }, { titulo: "Login do operador" }, { titulo: "Suprimento inicial" }] },
  { titulo: "Atendimento e Vendas", cards: [{ titulo: "Cliente cadastrado e não cadastrado" }, { titulo: "Registro de produtos" }, { titulo: "Formas de pagamento" }, { titulo: "Finalização da venda" }] },
  { titulo: "Resgate de Pedido Balcão", cards: [{ titulo: "Localizar cesta criada no balcão" }, { titulo: "Resgatar atendimento" }, { titulo: "Finalizar pagamento" }] },
  { titulo: "Resgate de Pedido Delivery", cards: [{ titulo: "Localizar pedido online" }, { titulo: "Conferir produtos" }, { titulo: "Faturar pedido" }, { titulo: "Finalizar atendimento" }] },
  { titulo: "Programas e Benefícios", cards: [{ titulo: "Convênios" }, { titulo: "PBM" }, { titulo: "Farmácia Popular" }] },
  { titulo: "Medicamentos Controlados", cards: [{ titulo: "Resgate de receita digital" }, { titulo: "Liberação manual" }, { titulo: "Finalização da venda" }] },
  { titulo: "Experiência do Cliente", cards: [{ titulo: "Encantômetro" }] },
  { titulo: "Ajustes durante a Venda", cards: [{ titulo: "Consulta de preço" }, { titulo: "Cancelamento parcial" }, { titulo: "Cancelamento total" }, { titulo: "DDG (Desconto Gerencial)" }] },
  { titulo: "Pós-Venda", cards: [{ titulo: "Estorno" }, { titulo: "Troca de Mercadoria" }, { titulo: "Reimpressão de cupom" }, { titulo: "Reimpressão de comprovantes" }, { titulo: "Reimpressão Farmácia Popular" }] },
  {
    titulo: "Gestão do Caixa",
    cards: [
      {
        titulo: "Sangria de Caixa",
        descricao: "A sangria de caixa é um procedimento de segurança que consiste na retirada do excesso de dinheiro (notas físicas) do caixa durante o expediente. Este processo visa reduzir riscos de assaltos e garantir que o caixa mantenha apenas o valor necessário para o troco das operações diárias.",
        slug: "sangria-de-caixa"
      },
      {
        titulo: "Suprimento de Caixa",
        descricao: "O suprimento de caixa é a operação de entrada de dinheiro na gaveta do PDV para garantir que o operador tenha cédulas e moedas suficientes para dar troco aos clientes.",
        slug: "suprimento-de-caixa"
      }
    ]
  },
  { titulo: "Consultas e Relatórios", cards: [{ titulo: "Venda detalhe" }, { titulo: "Relatório do operador" }, { titulo: "Relatório do dia" }] },
  { titulo: "Encerramento da Operação", cards: [{ titulo: "Saída do operador" }, { titulo: "Fechamento de caixa" }, { titulo: "Fechamento Z" }] },
];
