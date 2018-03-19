import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoGestaoProcessosComponent } from './info-gestao-processos/info-gestao-processos.component';

const dataRoute = {
	metadata: {
		title: '6 dicas para melhorar o serviço de atendimento ao cliente!',
		description: 'Baixe, agora, nosso infográfico e veja as 6 dicas práticas e rápidas que separamos para você melhorar, ainda hoje, o serviço de atendimento ao cliente na sua empresa. É Grátis!',
		keywords: 'serviço de atendimento ao cliente'
	}
};

const routes: Routes = [{
  path: 'servico-de-atendimento-ao-cliente',
  component: InfoGestaoProcessosComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoGestaoProcessosRoutingModule { }
