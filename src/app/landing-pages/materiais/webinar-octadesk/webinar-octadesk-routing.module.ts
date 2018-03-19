import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebinarOctadeskComponent } from './webinar-octadesk/webinar-octadesk.component';

const dataRoute = {
	metadata: {
		title: 'Webinar - Conheça tudo sobre o sistema de chamados Octadesk',
		description: 'O Webinar sobre o sistema de chamados da Octadesk foi dividido em duas etapas, uma focada na utilização prática e outra nas configurações para os administradores. Assista agora e veja como o nosso Sistema de chamados poderá ajudar a sua empresa!',
		keywords: 'Sistema de chamados'
	}
};

const routes: Routes = [{
  path: 'webinar-sistema-de-chamados',
  component: WebinarOctadeskComponent,
   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebinarOctadeskRoutingModule { }
