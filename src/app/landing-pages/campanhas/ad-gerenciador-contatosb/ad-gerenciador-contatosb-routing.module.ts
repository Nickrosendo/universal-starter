import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdGerenciadorContatosbComponent } from './ad-gerenciador-contatosb/ad-gerenciador-contatosb.component';

const dataRoute = {
	metadata: {
		title: 'Conheça o Octadesk - Sistema de gerenciador de contatos',
		description: 'O gerenciador de contatos ideal para sua empresa - Conheça agora o Octadesk',
		keywords: 'gerenciador de contatos'
	}
};

const routes: Routes = [{
  path: 'gerenciador-de-contatos-adb',
  component: AdGerenciadorContatosbComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdGerenciadorContatosbRoutingModule { }
