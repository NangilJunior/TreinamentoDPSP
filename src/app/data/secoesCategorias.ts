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
        descricao: "A Abertura de Caixa permite que o operador inicie suas atividades no PDV (Ponto de Venda). Para realizar a abertura, é necessária a autorização de um usuário com perfil de gerente, por meio de token ou senha. Em seguida, o operador realiza sua própria autenticação via Entra ID. Após as validações, o caixa fica disponível para o registro das vendas e o início do atendimento.",
        slug: "abertura-de-caixa"
      },
      {
        titulo: "Suprimento Inicial",
        descricao: "O Suprimento Inicial é a entrada de dinheiro na gaveta do PDV antes do início das vendas. Esse valor, também conhecido como fundo de troco, garante que o operador comece o atendimento com cédulas e moedas suficientes para dar troco aos clientes. O valor disponibilizado deve permanecer no caixa durante a operação, garantindo as condições necessárias para o funcionamento das vendas.",
        slug: "suprimento-inicial"
      }
    ]
  },
  {
    titulo: "Atendimento e Vendas",
    cards: [
      {
        titulo: "Cliente Cadastrado e Não Cadastrado",
        descricao: "Durante uma venda, o operador pode prosseguir sem identificar o cliente ou informar seu CPF ou CNPJ para vinculá-lo à operação. Também é possível definir se o CPF do cliente deve constar na nota fiscal. Após selecionar as opções desejadas, o operador pode seguir com o registro dos produtos e as demais etapas da venda normalmente.",
        slug: "cliente-cadastrado-e-nao-cadastrado"
      },
      {
        titulo: "Registro de Produtos",
        descricao: "O Registro de Produtos é a etapa em que os itens da compra são adicionados à venda no PDV. Para registrar um produto, o operador pode digitar seu código de barras no campo indicado ou utilizar o leitor de código de barras. Após a identificação, o item é incluído na venda com suas informações e quantidade correspondente. O processo pode ser repetido para cada produto da compra.",
        slug: "registro-de-produtos"
      },
      {
        titulo: "Formas de Pagamento",
        descricao: "Após o registro dos produtos, o operador deve acessar a etapa de pagamento e selecionar a forma escolhida pelo cliente. Para pagamentos em dinheiro, informa o valor recebido e verifica o troco, quando aplicável. Nos pagamentos realizados na maquininha, seleciona a opção correspondente e aguarda a confirmação da transação. Com o pagamento confirmado, a venda pode ser finalizada.",
        slug: "formas-de-pagamento"
      },
      {
        titulo: "Envio e Impressão de Cupom",
        descricao: "Após a finalização da venda, o operador pode escolher como o cliente deseja receber o cupom fiscal. É possível enviá-lo para o e-mail cadastrado do cliente, imprimir uma cópia na hora ou realizar as duas ações. O envio por e-mail utiliza o endereço já registrado no cadastro do cliente.",
        slug: "envio-e-impressao-de-cupom"
      }
    ]
  },
  {
    titulo: "Resgate de Pedido Balcão",
    cards: [
      {
        titulo: "Registro de Itens de Pedidos",
        descricao: "Quando o cliente solicita produtos ao farmacêutico, o profissional pode registrá-los em um pedido vinculado ao CPF do cliente. Ao chegar ao caixa, o cliente informa seu CPF para que o operador localize o pedido. Os itens são carregados automaticamente na tela, sem a necessidade de escanear ou digitar seus códigos de barras. O operador pode então seguir para a etapa de pagamento e finalizar a venda.",
        slug: "registro-de-itens-de-pedidos"
      }
    ]
  },
  {
    titulo: "Resgate de Pedido Delivery",
    cards: [
      {
        titulo: "Localizar Pedido do Delivery",
        descricao: "Os pedidos de Delivery podem ser localizados no PDV pelo número da ordem de venda. Quando o entregador chega à loja para retirar um pedido, deve informar esse número ao operador, que o digita no sistema para localizar a venda. Após a identificação, os dados do cliente e os itens do pedido são carregados automaticamente, permitindo conferir as informações e prosseguir com a retirada.",
        slug: "localizar-pedido-do-delivery"
      }
    ]
  },
  {
    titulo: "Programas e Benefícios",
    cards: [
      {
        titulo: "Convênios",
        descricao: "A venda por convênio permite identificar o benefício do cliente e realizar sua autenticação antes do registro dos produtos. Para iniciar o processo, o operador seleciona o tipo de convênio e informa os dados solicitados, como CPF ou número da carteirinha. O sistema realiza a autenticação junto ao provedor e, após a validação, permite que o operador registre os produtos e prossiga com a venda. Dependendo do convênio, pode ser necessário confirmar a operação por meio de uma senha no pinpad.",
        slug: "convenio"
      },
      {
        titulo: "PBM",
        descricao: "O Programa de Benefício em Medicamentos (PBM) permite aplicar benefícios e descontos em medicamentos participantes durante a venda. Para utilizar o programa, o operador seleciona o PBM correspondente e informa os dados solicitados para identificar o cliente e validar o benefício. Após a validação, os descontos disponíveis são aplicados aos produtos elegíveis da cesta, e o operador pode continuar com a venda.",
        slug: "pbm"
      }
    ]
  },
  {
    titulo: "Medicamentos Controlados",
    cards: [
      {
        titulo: "Liberação de Medicamento Controlado com Receita",
        descricao: "O registro de medicamentos controlados pode exigir a autenticação da receita antes que o produto seja incluído na venda. Quando o sistema solicitar essa informação, o operador deve digitar o número indicado na receita e aguardar a validação. Se a receita for autorizada, o medicamento será adicionado à venda e o atendimento poderá continuar.",
        slug: "liberacao-com-receita"
      },
      {
        titulo: "Liberação de Medicamento Controlado Sem Receita",
        descricao: "Quando um medicamento controlado precisa ser registrado sem receita, sua liberação no PDV depende da autorização de um gerente, conforme as regras aplicáveis à operação. Ao solicitar a liberação, o operador deve acionar o responsável para que ele realize a autorização necessária. Após a aprovação, o medicamento poderá ser adicionado à venda, permitindo a continuidade do atendimento.",
        slug: "liberacao-manual"
      }
    ]
  },
  {
    titulo: "Experiência do Cliente",
    cards: [
      {
        titulo: "Encantômetro",
        descricao: "O Encantômetro permite que o cliente avalie sua experiência de atendimento após a venda, atribuindo uma nota de 1 a 5 estrelas. O operador deve apenas orientar o cliente sobre a possibilidade de realizar a avaliação, caso queira. Quando a nota indicar insatisfação, o cliente poderá selecionar uma das opções disponíveis para informar o motivo.",
        slug: "encantometro"
      }
    ]
  },
  {
    titulo: "Ajustes durante a Venda",
    cards: [
      {
        titulo: "Consulta de Preço",
        descricao: "A consulta de preço permite verificar o valor e as informações de um produto sem adicioná-lo à venda. Para realizar a consulta, o operador deve selecionar a opção Consulta Item e escanear ou digitar o código de barras do produto. O sistema exibirá os dados correspondentes na tela, permitindo esclarecer dúvidas sobre o item antes de prosseguir com o atendimento.",
        slug: "consulta-de-preco"
      },
      {
        titulo: "Cancelamento Parcial",
        descricao: "O Cancelamento de Item permite remover um produto específico de uma venda que ainda não foi finalizada, mantendo os demais itens registrados. Esse recurso pode ser utilizado quando o cliente desiste de um produto, quando um item é registrado por engano ou quando é necessário corrigir um produto incluído incorretamente. Após a remoção, os outros itens permanecem na venda e o operador pode continuar o atendimento.",
        slug: "cancelamento-parcial"
      },
      {
        titulo: "Cancelamento Total",
        descricao: "O Cancelamento de Venda permite remover todos os produtos registrados e encerrar uma venda que ainda não foi finalizada. Essa opção pode ser utilizada quando o cliente desiste de toda a compra ou quando ocorre algum problema que impede a conclusão da operação. Como o cancelamento afeta todos os itens da venda, é necessária a autorização do gerente antes de concluir o processo.",
        slug: "cancelamento-total"
      },
      {
        titulo: "DDG (Desconto Gerencial)",
        descricao: "O Desconto do Gerente (DDG) permite aplicar um desconto manual a um produto durante a venda, mediante autenticação do gerente. O recurso pode ser utilizado em situações comerciais que exigem flexibilidade, como igualar a oferta de um concorrente, compensar uma avaria ou facilitar a venda de produtos próximos da validade. O desconto deve respeitar os limites definidos para a operação.",
        slug: "ddg"
      }
    ]
  },
  {
    titulo: "Pós-Venda",
    cards: [
      {
        titulo: "Estorno",
        descricao: "O Estorno permite devolver ao cliente o valor de uma venda já realizada, de acordo com a forma de pagamento utilizada. Para iniciar o processo, o operador deve solicitar a aprovação do gerente e selecionar a forma de pagamento correspondente à transação original. O estorno pode ser realizado para pagamentos por Pix, débito ou crédito, seguindo o fluxo indicado pelo sistema.",
        slug: "estorno"
      },
      {
        titulo: "Troca de Mercadoria",
        descricao: "A troca de mercadoria permite substituir um produto adquirido anteriormente por outro durante uma nova venda, utilizando o valor do item devolvido para compor a nova compra. Para realizar a troca, o operador registra a nova mercadoria e, na etapa de pagamento, seleciona a opção Vale Troca para localizar a venda original e identificar o item que será substituído. O valor correspondente é considerado na nova venda, sem gerar crédito ou saldo para utilização futura.",
        slug: "troca-de-mercadoria"
      },
      {
        titulo: "Reimpressão de Comprovantes",
        descricao: "A reimpressão permite emitir novamente um comprovante de uma venda já realizada, seja o comprovante de pagamento TEF ou o cupom fiscal. Para localizar o documento, o operador deve solicitar a aprovação do gerente e informar os dados correspondentes à venda. Para comprovantes TEF, a busca é feita pela data da compra e pelo NSU; para cupons fiscais, pela data da compra e pelo NR/NF. Após localizar o documento, é possível realizar a reimpressão.",
        slug: "reimpressao-de-comprovantes"
      }
    ]
  },
  {
    titulo: "Gestão do Caixa",
    cards: [
      {
        titulo: "Sangria de Caixa",
        descricao: "A sangria de caixa é um procedimento de segurança que consiste na retirada do excesso de dinheiro (notas físicas) da gaveta do PDV durante o turno de trabalho. Essa operação é realizada sempre que o valor acumulado atinge um limite estabelecido, com o objetivo de reduzir o risco de perdas financeiras em casos de assalto.",
        slug: "sangria-de-caixa"
      },
      {
        titulo: "Suprimento Complementar",
        descricao: "O Suprimento Complementar é a entrada adicional de dinheiro na gaveta do PDV durante a operação. Ele é utilizado quando há necessidade de reforçar o fundo de troco, disponibilizando mais cédulas ou moedas para atender aos clientes. Esse recurso ajuda a evitar que a falta de dinheiro para troco interrompa ou dificulte o atendimento.",
        slug: "suprimento-complementar"
      }
    ]
  },
  {
    titulo: "Consultas e Relatórios",
    cards: [
      {
        titulo: "Detalhe da Venda",
        descricao: "A Fita Detalhe permite consultar as vendas realizadas em um PDV em uma determinada data, incluindo os itens, valores e formas de pagamento de cada operação. Para acessá-la, o operador deve solicitar a aprovação do gerente, selecionar a função Fita Detalhe e informar a data desejada. A consulta auxilia na conferência das operações e no esclarecimento de dúvidas sobre vendas realizadas.",
        slug: "detalhe-da-venda"
      },
      {
        titulo: "Relatórios",
        descricao: "O relatório de movimentação permite consultar as vendas e demais operações realizadas no PDV até o momento da emissão. Para acessá-lo, o operador deve solicitar a aprovação do gerente, selecionar a função de relatório e seguir as orientações na tela. A consulta reúne informações sobre vendas, valores por forma de pagamento e outras movimentações do caixa, auxiliando no acompanhamento e na conferência das operações.",
        slug: "relatorios"
      }
    ]
  },
  {
    titulo: "Encerramento da Operação",
    cards: [
      {
        titulo: "Saída do Operador",
        descricao: "A Saída do Operador encerra a sessão do operador no PDV ao final de suas atividades, sem fechar o caixa. Dessa forma, o mesmo caixa permanece disponível para que outro operador realize sua entrada e continue o atendimento. As operações realizadas durante o turno permanecem registradas na matrícula do operador que as executou.",
        slug: "saida-do-operador"
      },
      {
        titulo: "Fechamento de Caixa",
        descricao: "O Fechamento Z encerra o movimento do PDV ao final da operação, consolidando as vendas e demais movimentações realizadas no caixa. Para realizar o fechamento, o operador deve seguir o fluxo indicado no sistema e informar a senha do gerente quando solicitada. Após a conclusão, o movimento do período é encerrado e os valores ficam disponíveis para a conferência do caixa.",
        slug: "fechamento-de-caixa"
      }
    ]
  },
];
