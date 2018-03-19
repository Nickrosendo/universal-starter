import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdSistemaAtendimentoClienteComponent } from './ad-sistema-atendimento-cliente/ad-sistema-atendimento-cliente.component'

const dataRoute = {
	metadata: {
		title: 'Conheça o Octadesk - Sistema de atendimento ao cliente',
		description: 'O sistema de atendimento ao cliente ideal para sua empresa - Conheça agora o Octadesk',
		keywords: 'sistema de atendimento ao cliente'
	}};

const routes: Routes = [{
  path: 'sistema-de-atendimento-ao-cliente-ad',
  component: AdSistemaAtendimentoClienteComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdSistemaAtendimentoClienteRoutingModule { }
