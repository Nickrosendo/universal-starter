import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'octadesk-common-questions',
    templateUrl: './common-questions.component.html'
})
export class CommonQuestions {

	sections: Array<object> = [
		{ code: 1, name: 'Assinatura' },
		{ code: 2, name: 'Geral' },
	];

	articles: Array<object> = [
		{
			section: 1,
			question: 'Como posso contratar o Octadesk?',
			answer: 'Você pode contratar os planos Básico, Plus ou Avançado, utilizando o seu cartão de crédito, com condição de  pagamento mensal ou anual. Consulte-nos para saber mais sobre outras opções de pagamento.'
		}, {
			section: 1,
			question: 'Qual a duração dos seus contratos? Posso alterar os planos?',
			answer: 'A assinatura do Octadesk é feita uma vez e renovada automaticamente conforme o ciclo de pagamento escolhido na assinatura, mensal ou anual. A alteração de assinatura antes do fim de um ciclo de pagamento é permitida e pode ser feita a qualquer momento. Veja mais detalhes sobre o impacto dessa alteração em sua cobrança na nossa Central de Ajuda.'
		}, {
			section: 1,
			question: 'Posso cancelar minha assinatura quando quiser?',
			answer: 'O usuário pode cancelar sua assinatura quando desejar. No caso de cancelamento de assinatura mensal pedimos para que o cliente avise com 30 dias de antecedência e para os casos de assinatura anual pedimos que a notificação de cancelamento seja enviada com 60 dias de antecedência. Porém, no cancelamento de assinaturas, haverá ônus caso você opte pelo cancelamento imediato, pois não haverá reembolso ou geração de créditos relativos aos dias restantes no ciclo vigente.'
		}, {
			section: 1,
			question: 'Há descontos?',
			answer: 'Oferecemos preços vantajosos para as assinaturas faturadas anualmente.'
		}, {
			section: 2,
			question: 'O Octadesk pode ser integrado a outros aplicativos e sistemas?',
			answer: 'O Octadesk oferece integrações com outros sistemas atraves das nossas API\'s. Consulte-nos sobre possibilidades e valores.'
		}, {
			section: 2,
			question: 'Os meus dados permanecerão protegidos e seguros?',
			answer: 'Mantemos recursos de segurança e garantimos que seus dados e os de seus clientes estão sempre protegidos. Não usaremos seus dados nem os repassaremos a terceiros.'
		},
		{
			section: 2,
			question: 'O sistema de chamados integra com o meu e-mail?',
			answer: 'Sim, a integração do seu com o sistema de chamados do Octadesk, é feito atraves de um simples redirecionamento em serviço de e-mail.'
		},
		{
			section: 2,
			question: 'É possível migrar o histórico do meu sistema de chamados atual para o Octadesk?',
			answer: 'Sim é possível, possuímos migração nativa do Zendesk e do Freshdesk. Outros sistemas consulte-nos.'
		}];

}
