export const SistemaChamadosMenuItems = [
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

export const SistemaChamadosSlides = [
	{
		id: 'od-HomeSlide-ticket',
		img: {
			url: '/assets/images/home/octadesk-tela-ticket-help-desk.png',
			title: 'Ticket do sistema de Chamados Octadesk'

		},
		description: {
			title: 'Canais de atendimento',
			highlight: 'Utilize múltiplos canais de atendimento de maneira simples, organizada e rápida com o nosso sistema de chamados.',
			detail: 'Responda e organize em um único lugar todas as solicitações dos seus clientes, independente do canal de contato: telefone, e-mail, chat, formulários web, central de ajuda, base de conhecimento e redes sociais.'
		},
		benefits: [
			'Centralize todo o histórico de atendimento ao cliente',
			'Responda de maneira rápida e pratica a qualquer canal de contato',
			'Mantenha toda sua comunicação em um único lugar'
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
			title: 'SLA no sistema de chamados'
		},
		description: {
			title: 'Controle de prazos (SLA)',
			highlight: 'Aumente a satisfação dos seus clientes administrando com eficiência o prazo de solução das solicitações.',
			detail: 'Com o SLA do Octadesk, o processo de alinhamento dos prazos de atendimento entre a empresa e o cliente fica mais fácil, aumentando a credibilidade e gerando menos desentendimentos.'
		},
		benefits: [
			'Administre melhor suas metas de atendimento ao cliente',
			'Priorize as solicitações dos seus clientes adequadamente',
			'Aumente a satisfação dos seus clientes, cumpra com os prazos'
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
			title: 'Workflow do sistema de chamados Octadesk'
		},
		description: {
			title: 'Automações e workflow',
			highlight: 'Aumente a produtividade da sua equipe padronizando tarefas rotineiras, otimizando processos de trabalho e ganhe escala em seu atendimento.',
			detail: 'Crie condições para automatizar as tarefas rotineiras de atendimento ao cliente. Crie automações para os processos do seu Helpdesk e melhore a comunicação entre os departamentos, pessoas e o trafego de documentos.'
		},
		benefits: [
			'Reduza custos operacionais e aumente a eficiência da equipe',
			'Escale seu processo de atendimento ao cliente',
			'Deixe os processos mais rastreáveis e eficientes'
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
			title: 'Base de conhecimentos do sistema de chamados Octadesk'
		},
		description: {
			title: 'Base de conhecimento',
			highlight: 'Reduza o volume de chamados adotando o autoatendimento.',
			detail: 'Centralize o conhecimento do seu time, torne simples a experiência de autoatendimento dos clientes, sane as principais questões dos clientes e reduza a quantidade de chamados.'
		},
		benefits: [
			'Acessível a todo momento, atendimento 24h',
			'Ofereça um suporte multimídia, com vídeos, imagens e textos',
			'Diminua o tempo de resposta e deixe seus clientes mais satisfeitos'
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
			title: 'Chat de atendimento online do sistema de chamados Octadesk'
		},
		description: {
			title: 'Chat',
			highlight: 'Atenda o seu cliente em tempo real',
			detail: 'Sua equipe pode realizar atendimento simultâneo, diminuindo o tempo de espera e aumentando a satisfação dos clientes. Tudo isso em um único lugar.'
		},
		benefits: [
			'Ganhe agilidade e qualidade de atendimento ao cliente.',
			'Transforme as conversas em tickets com apenas um click, de maneira integrada ',
			'Dê continuidade às conversas importantes transformando-as em tickets'
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
			title: 'Dashboard do sistema de chamados Octadesk'
		},
		description: {
			title: 'Dashboard e relatórios',
			highlight: 'Entenda e metrifique o seu atendimento ao cliente',
			detail: 'Gerencie as métricas do seu atendimento ao cliente, cruze dados dos chamados, veja os resultados e otimize seus processos, para tornar seu serviço cada vez melhor.'
		},
		benefits: [
			'Acompanhe e tenha insights dos chamados',
			'Monitore resultados e métricas',
			'Crie relatórios personalizados apenas arrastando e soltando campos'
		],
		button: {
			link: '/funcionalidades/atendimento-ao-cliente',
			fragment: 'gestao'
		}
	}
];
