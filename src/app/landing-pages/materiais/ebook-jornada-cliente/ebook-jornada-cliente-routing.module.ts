import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbookJornadaClienteComponent } from './ebook-jornada-cliente/ebook-jornada-cliente.component';

const dataRoute = {
	metadata: {
		title: 'eBook - Sucesso na Jornada do cliente: da pré-vendas ao pós-vendas',
		description: 'Baixe, gratuitamente, nosso ebook e aprenda a mapear toda a jornada do cliente da sua empresa. Tenha sucesso do pré-vendas ao pós-vendas. Baixe, agora, o nosso eBook completo!',
		keywords: 'Jornada do cliente'
	}
};

const routes: Routes = [{
  path: 'ebook-jornada-do-cliente',
  component: EbookJornadaClienteComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookJornadaClienteRoutingModule { }
