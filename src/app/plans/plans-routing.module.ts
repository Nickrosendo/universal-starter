import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlansComponent } from './plans.component';

const dataRoute = {
	metadata: {
		title: 'Sistema de Controle de Chamados Octadesk - Compare planos',
		description: 'Compare os planos do nosso Sistema de Controle de Chamados. Entenda qual é a melhor opção de plano para sua empresa.',
		keywords: 'Controle de chamados'
	}
};

const plansRoutes: Routes = [
	{
		path: 'comparativo/controle-de-chamados',
		component: PlansComponent,
		data: dataRoute
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(plansRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PlansRouting { }
