import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PricingComponent } from './pricing.component';

const dataRoute = {
	metadata: {
		title: 'Sistema de Chamados Octadesk - Conheça os planos da nossa plataforma',
		description: 'Veja os planos do nosso Sistema de Chamados e Atendimento ao Cliente. Descubra como podemos ajudar sua empresa',
		keywords: 'Sistema de chamados'
	}
};

const pricingRoutes: Routes = [
	{
		path: 'planos/sistema-de-chamados',
		component: PricingComponent,
		data: dataRoute
	},
	{
		path: 'planos-e-precos/sistema-de-chamados',
		component: PricingComponent,
		data: dataRoute
	},
	{
		path: 'product/pricing',
		component: PricingComponent,
		data: dataRoute
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(pricingRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PricingRouting { }
