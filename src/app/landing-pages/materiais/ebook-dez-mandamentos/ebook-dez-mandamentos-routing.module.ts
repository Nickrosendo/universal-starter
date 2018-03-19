import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbookDezMandamentosComponent } from './ebook-dez-mandamentos/ebook-dez-mandamentos.component';

const dataRoute = {
	metadata: {
		title: '10 mandamentos para aumentar a qualidade de atendimento"',
		description: 'Aumente, ainda hoje, a qualidade de atendimento da sua empresa com as 10 dicas que separamos para você. São dicas práticas e fáceis de serem aplicadas. Baixe, gratuitamente, o nosso ebook!',
		keywords: 'qualidade de atendimento'
	}
};

const routes: Routes = [{
  path: 'mandamentos-qualidade-de-atendimento',
  component: EbookDezMandamentosComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookDezMandamentosRoutingModule { }
