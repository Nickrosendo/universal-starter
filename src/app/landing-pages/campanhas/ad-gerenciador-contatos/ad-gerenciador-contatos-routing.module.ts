import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdGerenciadorContatosComponent } from './ad-gerenciador-contatos/ad-gerenciador-contatos.component';

const dataRoute = {
	metadata: {
		title: 'Conheça o Octadesk - Sistema de gerenciador de contatos',
		description: 'Toda empresa precisa gerenciar os contatos de maneira simples e eficiente. Conheça, agora, o Octadesk, o gerenciador de contatos ideal para sua empresa. Faça uma demonstração gratuita e sem compromisso!',
		keywords: 'gerenciador de contatos'
	}
};

const routes: Routes = [{
  path: 'gerenciador-de-contatos-ad',
  component: AdGerenciadorContatosComponent,
  data: dataRoute
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdGerenciadorContatosRoutingModule { }
