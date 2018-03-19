import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanilhaCadastroClientesComponent } from './planilha-cadastro-clientes/planilha-cadastro-clientes.component';

const dataRoute = {
	metadata: {
		title: 'Planilha de Cadastro de Clientes - centralize todos os dados',
		description: 'Baixe a Planilha de Cadastro de Clientes da Octadesk, a melhor alternativa de um sistema para centralizar todas as informações importantes dos seus clientes em um único lugar. Baixe, agora, nossa planilha gratuita!',
		keywords: 'planilha de cadastro de clientes'
	}
};

const routes: Routes = [{
  path: 'planilha-cadastro-de-clientes',
  component: PlanilhaCadastroClientesComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanilhaCadastroClientesRoutingModule { }
