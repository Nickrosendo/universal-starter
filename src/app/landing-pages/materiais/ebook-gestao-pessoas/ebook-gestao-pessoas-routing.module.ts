import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbookGestaoPessoasComponent } from './ebook-gestao-pessoas/ebook-gestao-pessoas.component';

const dataRoute = {
	metadata: {
		title: '[Kit] O pilar mais importante para um bom atendimento ao cliente',
		description: 'Baixe, agora, nosso kit de  eBook + Infográfico desenvolvidos em parceria a Gama Academy: Gestão de pessoas - o pilar mais importante para um bom atendimento ao cliente - Download grátis!',
		keywords: 'bom atendimento ao cliente'
	}
};

const routes: Routes = [{
  path: 'bom-atendimento-ao-cliente',
  component: EbookGestaoPessoasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookGestaoPessoasRoutingModule { }
