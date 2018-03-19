import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdCadastroClientesComponent } from './ad-cadastro-clientes/ad-cadastro-clientes.component';

const dataRoute = {
	metadata: {
		title: 'Octadesk - Sistema para cadastro de clientes',
		description: 'O sistema de cadastro de clientes ideal para sua empresa - Conheça agora o Octadesk',
		keywords: 'Cadastro de clientes'
	}
};

const routes: Routes = [{
  path: 'cadastro-de-clientes-ad',
  component: AdCadastroClientesComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdCadastroClientesRoutingModule { }
