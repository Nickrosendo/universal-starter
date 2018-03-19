import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdSistemaChamadosComponent } from './ad-sistema-chamados/ad-sistema-chamados.component';

const dataRoute = {
	metadata: {
		title: 'Conheça o Octadesk - Sistema de chamados',
		description: 'O sistema de chamados ideal para sua empresa - Conheça agora o Octadesk',
		keywords: 'sistema de chamados'
	}};

const routes: Routes = [{
  path: 'sistema-de-chamados-ad',
  component: AdSistemaChamadosComponent,
   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdSistemaChamadosRoutingModule { }
