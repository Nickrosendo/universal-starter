export const lpAtendimentoClienteMenuItems = [
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

export const lpAtendimentoClienteSlides = [
	{
		id: 'od-HomeSlide-ticket',
		img: {
			url: '/assets/images/home/octadesk-tela-ticket-help-desk.png',
			title: 'Ticket de atendimento ao cliente Octadesk'
		},
		description: {
			title: 'Canais de atendimento',
			highlight: 'Atendimento multicanal de forma simples, prática e organizada com nosso sistema de atendimento ao cliente.',
			detail: 'Mantenha todos os chamados dos clientes em um único lugar, não importando o canal de contato: telefone, chat, e-mail, formulários web, base de conhecimento, central de ajuda e redes sociais.'
		},
		benefits: [
			'Tenha todo o histórico de atendimento em um único lugar',
			'Responda a todos os canais de maneira rápida e independente',
			'Mantenha toda comunicação da sua empresa em uma única plataforma'
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
			title: 'SLA de atendimento ao cliente'
		},
		description: {
			title: 'Controle de prazos (SLA)',
			highlight: 'Aumente a satisfação dos seus clientes gerenciando o prazo de resolução dos chamados.',
			detail: 'Através do SLA do Octadesk, você pode gerenciar a expectativa de atendimento entre a empresa e o cliente, reduzindo o atrito e aumentando a sua credibilidade.'
		},
		benefits: [
			'Defina e analise suas metas de atendimento ao cliente',
			'Priorize adequadamente as solicitações dos seus clientes',
			'Aumente a satisfação de todos os clientes cumprindo com os prazos acordados'
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
			title: 'Workflow de atendimento ao cliente'
		},
		description: {
			title: 'Automações e workflow',
			highlight: 'Automatize as tarefas rotineiras, melhore seus processos de atendimento ao cliente e ganhe escala.',
			detail: 'Defina regras para executar, de maneira automática, tarefas rotineiras de atendimento ao cliente. Gerencie automaticamente os processos do seu Help Desk e melhore a comunicação interna e o trafego de documentos.'
		},
		benefits: [
			'Reduza custos operacionais e aumente a eficiência da sua equipe',
			'Melhore os processos de atendimento ao cliente',
			'Deixe seus processos rastreáveis e mais eficientes'
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
			title: 'Base de conhecimentos para melhorar o atendimento ao cliente'
		},
		description: {
			title: 'Base de conhecimento',
			highlight: 'Minimize o volume de chamados e antecipe os questionamentos dos clientes',
			detail: 'Centralize todo conhecimento da sua equipe de atendimento ao cliente, torne simples a experiência de autoatendimento e reduza a quantidade de chamados.'
		},
		benefits: [
			'Acessível a todo momento, em qualquer lugar',
			'Personalize a experiência de suporte ao cliente',
			'Deixe seus clientes mais satisfeitos dando respostas mais rápidas'
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
			title: 'Chat online de atendimento ao cliente'
		},
		description: {
			title: 'Chat',
			highlight: 'Atenda seus clientes em tempo real',
			detail: 'Mantenha todas conversas da sua empresa em um só lugar. Sua equipe pode fazer atendimentos simultâneos, diminuindo o tempo de espera e elevando a satisfação dos clientes.'
		},
		benefits: [
			'Aumente a velocidade de atendimento ao cliente',
			'Transforme os chats em chamados com apenas um click, de maneira integrada',
			'Continue as conversas importantes fazendo delas chamados'
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
			title: 'Dashboard e métricas de atendimento ao cliente'
		},
		description: {
			title: 'Dashboard e relatórios',
			highlight: 'Entenda completamente a sua operação de atendimento ao cliente.',
			detail: 'Defina e analise as métricas do atendimento ao cliente de maneira eficiente. Cruze informações, monitore resultados e faça mudanças para tornar seu serviço cada vez melhor.'
		},
		benefits: [
			'Acompanhe e tenha insights sobre seus chamados',
			'Monitore resultados e métricas ',
			'Personalize relatórios apenas arrastando e soltando os campos'
		],
		button: {
			link: '/funcionalidades/atendimento-ao-cliente',
			fragment: 'gestao'
		}
	}
];
