import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbookErrosContabilidadeComponent } from '../ebook-erros-contabilidade/ebook-erros-contabilidade.component';

const dataRoute = {
	metadata: {
		title: 'Bom atendimento - 7 erros comitidos pelas contabilidades',
		description: 'Descubra os 7 erros mais comuns entre as empresas de contabilidade que impedem elas de ter um bom atendimento ao cliente e aprenda como contorná-los, de maneira simples e prática. Baixe, agora, o ebook gratuito!',
		keywords: 'Bom atendimento'
	}
};
const routes: Routes = [{
  path: 'ebook-bom-atendimento-contabilidades',
  component: EbookErrosContabilidadeComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookErrosContabilidadeRoutingModule { }
