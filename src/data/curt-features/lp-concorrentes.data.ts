export const ConcorrentesMenuItems = [
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

export const ConcorrentesSlides = [
	{
		id: 'od-HomeSlide-ticket',
		img: {
			url: '/assets/images/home/octadesk-tela-ticket-help-desk.png',
			title: 'Ticket de atendimento ao cliente Octadesk'
		},
		description: {
			title: 'Canais de atendimento',
			highlight: 'Atenda em diversos canais de forma simples, organizada e prática com o nosso sistema de atendimento ao cliente.',
			detail: 'Centralize todos os chamados dos clientes, independente do canal de contato: telefone, chat online, e-mail, formulários, central de ajuda, Facebook, Twitter ou base de conhecimentos.'
		},
		benefits: [
			'Mantenha todo o histórico de atendimento em um só lugar',
			'Responda rapidamente a todos os canais, de maneira independente',
			'Deixe toda a comunicação da sua empresa em uma só plataforma'
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
			highlight: 'Satisfaça seus clientes através do gerenciamento de prazo de resolução dos chamados.',
			detail: 'Com o controle de prazos (SLA), você pode informar todas as etapas do atendimento entre a empresa e o cliente, aumentando a credibilidade e diminuindo possíveis problemas.'
		},
		benefits: [
			'Crie e acompanhe suas metas de atendimento ao cliente',
			'Defina e realize a análise das metas de atendimento',
			'Melhore a satisfação dos seus clientes cumprindo com os prazos combinados'
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
			highlight: 'Melhore os processos de atendimento automatizando o atendimento ao cliente e ganhe escala.',
			detail: 'Crie regras automáticas para realizar tarefas rotineiras de atendimento ao cliente. Torne os processos do seu Help Desk automáticos e melhore a comunicação interna e o fluxo de documentos.'
		},
		benefits: [
			'Diminua custos operacionais e aumente a produtividade da sua equipe',
			'Otimize os processos de atendimento ao cliente',
			'Torne os processos rastreáveis e mais eficientes'
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
			highlight: 'Reduza a quantidade de chamados e responda antecipadamente aos questionamentos dos clientes',
			detail: 'Crie uma experiência de autoatendimento de maneira simples, centralizando todo o conhecimento da sua equipe e com isso, reduza o número de chamados.'
		},
		benefits: [
			'Disponível a todo o tempo e em qualquer lugar',
			'Torne a experiência de suporte ao cliente, algo único',
			'Aumente a satisfação dos seus clientes respondendo rapidamente'
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
			highlight: 'Faça o atendimento aos seus clientes em tempo real',
			detail: 'Organize todas as conversas da empresa em um único lugar. Sua equipe pode prestar suporte ao cliente de maneira simultânea, minimizando o tempo de espera e aumentando a satisfação dos clientes.'
		},
		benefits: [
			'Aumente a velocidade no suporte ao cliente',
			'Transforme os chats em chamados com apenas um click, de maneira integrada',
			'Dê continuidade a conversas importantes, transformando-as em chamados'
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
			highlight: 'Compreenda toda a sua operação de atendimento ao cliente.',
			detail: 'Crie e analise todas as métricas de atendimento ao cliente, de forma simples e eficiente. Cruze informações, acompanhe os resultados e otimize seu suporte cada vez mais.'
		},
		benefits: [
			'Observe e tenha insights sobre seus tickets',
			'Acompanhe os resultados e desempenho das métricas',
			'Personalize relatórios apenas arrastando e soltando os campos'
		],
		button: {
			link: '/funcionalidades/atendimento-ao-cliente',
			fragment: 'gestao'
		}
	}
];
