import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyComponent } from './privacy.component';

const routeData = {
	metadata: {
		title: 'Politica de Privacidade Octadesk - Sistema de Help Desk',
		description: 'Conheça toda a politica de privacidade d Sistema de Help desk e atendimento ao cliente da Octadesk, entenda como protegemos e mantemos seguras as suas informações!',
		keywords: 'Help Desk'
	}
};

const privacyRoutes: Routes = [
	{
		path: 'politica-de-privacidade',
		component: PrivacyComponent,
		data: routeData
	},
	{
		path: 'company/privacy',
		component: PrivacyComponent,
		data: routeData
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(privacyRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PrivacyRouting { }
