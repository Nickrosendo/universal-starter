import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdProgramaTicketsComponent } from './ad-programa-tickets/ad-programa-tickets.component';

const dataRoute = {
	metadata: {
		title: 'Conheça o Octadesk - Programa de tickets',
		description: 'O programa de tickets ideal para sua empresa - Conheça agora o Octadesk',
		keywords: 'programa de tickets'
	}
};

const routes: Routes = [{
  path: 'programa-de-tickets-ad',
  component: AdProgramaTicketsComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdProgramaTicketsRoutingModule { }
