import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdSistemaSuporteComponent } from './ad-sistema-suporte/ad-sistema-suporte.component';

const dataRoute = {
	metadata: {
		title: 'Sistema de suporte e atendimento ao cliente Octadesk',
		description: 'O sistema de suporte ideal para sua empresa - Conheça agora o Octadesk',
		keywords: 'sistema de suporte'
	}};

const routes: Routes = [{
  path: 'sistema-de-suporte-ad',
  component: AdSistemaSuporteComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaSuporteRoutingModule { }
