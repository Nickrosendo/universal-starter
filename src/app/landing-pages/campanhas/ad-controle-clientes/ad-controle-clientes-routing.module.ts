import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdControleClientesComponent } from './ad-controle-clientes/ad-controle-clientes.component';

const dataRoute = {
	metadata: {
		title: 'Conheça o Octadesk - Sistema de controle de clientes',
		description: 'O sistema de controle de clientes ideal para sua empresa - Conheça agora o Octadesk',
		keywords: 'controle de clientes'
	}
};

const routes: Routes = [{
  path: 'controle-de-clientes-ad',
  component: AdControleClientesComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdControleClientesRoutingModule { }
