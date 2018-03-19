import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoMktRetencaoComponent } from './info-mkt-retencao/info-mkt-retencao.component';

const dataRoute = {
	metadata: {
		title: 'Dicas sobre Fidelização de clientes e marketing de retenção',
		description: 'A sua empresa ainda não investe na fidelização de clientes e em marketing de retenção? Então baixe, agora, o nosso infográfico completo e saiba tudo sobre Fidelização de clientes e marketing de retenção. Download gratuito!',
		keywords: 'marketing de retenção, fidelização de clientes'
	}
};

const routes: Routes = [{
  path: 'infografico-fidelizacao-clientes',
  component: InfoMktRetencaoComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoMktRetencaoRoutingModule { }
