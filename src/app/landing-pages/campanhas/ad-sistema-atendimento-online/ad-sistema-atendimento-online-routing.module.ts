import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdSistemaAtendimentoOnlineComponent } from './ad-sistema-atendimento-online/ad-sistema-atendimento-online.component';

const dataRoute = {
	metadata: {
		title: 'Conheça o Octadesk - Sistema de atendimento online',
		description: 'O sistema de atendimento online ideal para sua empresa - Conheça agora o Octadesk',
		keywords: 'sistema de atendimento online'
	}};

const routes: Routes = [{
  path: 'sistema-atendimento-online-ad',
  component: AdSistemaAtendimentoOnlineComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdSistemaAtendimentoOnlineRoutingModule { }
