import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitGestaoAtendimentoComponent } from './kit-gestao-atendimento/kit-gestao-atendimento.component';

const dataRoute = {
	metadata: {
		title: 'Torne sua empresa em Customer centric: Baixe o kit completo',
		description: 'A sua empresa é totalmente voltada para o cliente? Se não, deveria! Veja, nesse kit gratuito, como transformar a mentalidade e cultura da sua empresa em Customer Centric. Baixe agora!',
		keywords: 'customer centric'
	}
};

const routes: Routes = [{
  path: 'kit-customer-centric',
  component: KitGestaoAtendimentoComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitGestaoAtendimentoRoutingModule { }
