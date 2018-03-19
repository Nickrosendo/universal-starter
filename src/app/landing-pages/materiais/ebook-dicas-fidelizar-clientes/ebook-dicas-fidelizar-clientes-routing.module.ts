import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbookDicasFidelizarClientesComponent } from './ebook-dicas-fidelizar-clientes/ebook-dicas-fidelizar-clientes.component';

const dataRoute = {
	metadata: {
		title: 'Baixe o ebook: "7 dicas infalíveis para fidelizar clientes"',
		description: 'Você precisa fidelizar clientes? Então baixe, gratuitamente, o nosso eBook com 7 dicas infalíveis para você aumentar a taxa de fidelização dos seus clientes. Não esqueça de compartilhar!',
		keywords: 'fidelizar clientes'
	}
};

const routes: Routes = [{
  path: 'ebook-dicas-fidelizar-clientes',
  component: EbookDicasFidelizarClientesComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookDicasFidelizarClientesRoutingModule { }
