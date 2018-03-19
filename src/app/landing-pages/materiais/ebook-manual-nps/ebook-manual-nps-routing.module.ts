import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbookManualNpsComponent } from './ebook-manual-nps/ebook-manual-nps.component';

const dataRoute = {
	metadata: {
		title: 'Manual rápido do NPS - Conheça tudo sobre essa métrica',
		description: 'Você já conhece a métrica de atendimento ao cliente chamada NPS (Net promoter score)? Baixe, agora, nosso eBook "Manual rápido do NPS".',
		keywords: 'NPS'
	}
};

const routes: Routes = [{
  path: 'ebook-manual-nps',
  component: EbookManualNpsComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookManualNpsRoutingModule { }
