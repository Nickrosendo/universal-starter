export const HomeMenuItens = [
  {
    icon: 'icon-ticket-o',
    description: 'Canais de atendimento',
    slide: 'od-HomeSlide-ticket'
  },
  {
    icon: 'icon-clock-o',
    description: 'Controle de prazos',
    slide: 'od-HomeSlide-sla'
  },
  {
    icon: 'icon-workflow-o',
    description: 'Automações e workflow',
    slide: 'od-HomeSlide-automations'
  },
  {
    icon: 'icon-open-book-o',
    description: 'Base de conhecimento',
    slide: 'od-HomeSlide-knowledgebase'
  },
  {
    icon: 'icon-chat-o',
    description: 'Chat',
    slide: 'od-HomeSlide-chat'
  },
  {
    icon: 'icon-donut-chart-o',
    description: 'Dashboards e relatórios',
    slide: 'od-HomeSlide-metrics'
  }
];

export const HomeSlides = [
  {
    id: 'od-HomeSlide-ticket',
    img: {
      url: '/assets/images/home/octadesk-tela-ticket-help-desk.png',
      title: 'octadesk tela ticket help desk'
    },
    description: {
      title: 'Canais de atendimento',
      highlight: 'Atenda seus clientes nos múltiplos canais de contato de forma simples, rápida e organizada com nosso sistema de atendimento e Help Desk.',
      detail: 'Administre em um único lugar todas as solicitações dos seus clientes independente do canal de contato: telefone, e-mail, chat, formulários web, central de ajuda, base de conhecimento e redes sociais.'
    },
    benefits: [
      'Mantenha todo o histórico de atendimento ao cliente centralizado',
      'Responda rapidamente independente do canal de contato',
      'Centralize toda sua comunicação em uma única plataforma'
    ],
    button: {
      link: '/funcionalidades/atendimento-ao-cliente',
      fragment: 'multicanal'
    }
  },
  {
    id: 'od-HomeSlide-sla',
    img: {
      url: '/assets/images/home/octadesk-tela-sla-help-desk.png',
      title: 'octadesk tela sla help desk'
    },
    description: {
      title: 'Controle de prazos (SLA)',
      highlight: 'Tenha clientes mais satisfeitos, gerencie com eficiência o prazo de resolução das solicitações.',
      detail: 'Com o SLA do Octadesk fica mais fácil alinhar as expectativas dos prazos de atendimento entre a empresa e seus clientes, gerando menos atrito e ao mesmo tempo aumentando a credibilidade.'
    },
    benefits: [
      'Gerencie melhor suas metas de atendimento ao cliente',
      'Priorize adequadamente as solicitações dos seus clientes',
      'Tenha clientes mais satisfeitos, cumpra com os prazos acordados'
    ],
    button: {
      link: '/funcionalidades/atendimento-ao-cliente',
      fragment: 'gestao'
    }
  },
  {
    id: 'od-HomeSlide-automations',
    img: {
      url: '/assets/images/home/octadesk-tela-workflow-help-desk.png',
      title: 'octadesk tela workflow help desk'
    },
    description: {
      title: 'Automações e workflow',
      highlight: 'Padronize tarefas rotineiras, ganhe escala em seu atendimento ao cliente e otimize seus processos de trabalho.',
      detail: 'Crie regras para executar dinamicamente as tarefas rotineiras de atendimento ao cliente. Gerencie de forma automatizada os processos do seu Help Desk e melhore o trafego de documentos, informações entre departamentos e pessoas.'
    },
    benefits: [
      'Aumente a eficiência da sua equipe e reduza custo',
      'Otimize seu processo de atendimento ao cliente',
      'Torne os processos mais eficientes e rastreáveis'
    ],
    button: {
      link: '/funcionalidades/atendimento-ao-cliente',
      fragment: 'automacoes'
    }
  },
  {
    id: 'od-HomeSlide-knowledgebase',
    img: {
      url: '/assets/images/home/octadesk-tela-base-de-conhecimento.png',
      title: 'octadesk tela base de conhecimento'
    },
    description: {
      title: 'Base de conhecimento',
      highlight: 'Reduza o volume de chamados e antecipe as dúvidas de seus clientes.',
      detail: 'Centralize o conhecimento da sua equipe, simplifique a experiência de autoatendimento dos clientes e reduza a quantidade de solicitações para o Help Desk.'
    },
    benefits: [
      'Acessível a qualquer hora e em qualquer lugar',
      'Ofereça uma experiência de suporte personalizada',
      'Tenha clientes mais satisfeitos com respostas mais rápidas'
    ],
    button: {
      link: '/funcionalidades/atendimento-ao-cliente',
      fragment: 'multicanal'
    }
  },
  {
    id: 'od-HomeSlide-chat',
    img: {
      url: '/assets/images/home/octadesk-tela-chat-atendimento-online.png',
      title: 'octadesk tela chat atendimento online'
    },
    description: {
      title: 'Chat',
      highlight: 'Atendimento ao cliente em tempo real',
      detail: 'Gerencie todas as suas conversas em um só lugar. Sua equipe faz atendimentos simultâneos, reduzindo o tempo de espera e aumentando a satisfação de seus clientes.'
    },
    benefits: [
      'Ganhe agilidade de atendimento ao cliente',
      'Transforme os chats em chamados com apenas um click, de maneira integrada',
      'Dê sequência às conversas importantes transformando-as em chamados'
    ],
    button: {
      link: '/funcionalidades/atendimento-ao-cliente',
      fragment: 'multicanal'
    }
  },
  {
    id: 'od-HomeSlide-metrics',
    img: {
      url: '/assets/images/home/octadesk-tela-dashboard-help-desk.png',
      title: 'octadesk tela dashboard help desk'
    },
    description: {
      title: 'Dashboard e relatórios',
      highlight: 'Entenda em detalhe sua operação de atendimento ao cliente',
      detail: 'Gerencie com eficiência as métricas do seu Help Desk. Cruze as informações do chamados, monitore os resultados e faça mudanças para tornar seu serviço cada vez melhor.'
    },
    benefits: [
      'Acompanhe os chamados',
      'Monitore resultados e métricas',
      'Crie relatórios personalizados apenas arrastando e soltando campos'
    ],
    button: {
      link: '/funcionalidades/atendimento-ao-cliente',
      fragment: 'gestao'
    }
  }
];
