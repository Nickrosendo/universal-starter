import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbookDicasQualidadeAtendimentoComponent } from './ebook-dicas-qualidade-atendimento/ebook-dicas-qualidade-atendimento.component';

const dataRoute = {
	metadata: {
		title: '17 dicas para aumentar a qualidade no atendimento ao cliente',
		description: 'Seus clientes estão insatisfeitos com o atendimento ao cliente da sua empresa? Então baixe, agora, o nosso eBook gratuito com 17 dicas para você aumentar a qualidade no atendimento ao cliente da sua empresa.',
		keywords: 'qualidade no atendimento ao cliente'
	}
};

const routes: Routes = [{
  path: 'ebook-qualidade-no-atendimento-ao-cliente',
  component: EbookDicasQualidadeAtendimentoComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookDicasQualidadeAtendimentoRoutingModule { }
