import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoTecnologiaAtendimentoComponent } from './info-tecnologia-atendimento/info-tecnologia-atendimento.component';

const dataRoute = {
	metadata: {
		title: 'Veja como a tecnologia integra os canais de atendimento!',
		description: 'Baixe, gratuitamente, o nosso infográfico e veja como a tecnologia pode integrar os canais de atendimento, aumentar a qualidade do suporte oferecido e otimizar os processos do dia-a-dia da sua operação!',
		keywords: 'canais de atendimento'
	}
};

const routes: Routes = [{
  path: 'infografico-canais-de-atendimento',
  component: InfoTecnologiaAtendimentoComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoTecnologiaAtendimentoRoutingModule { }
