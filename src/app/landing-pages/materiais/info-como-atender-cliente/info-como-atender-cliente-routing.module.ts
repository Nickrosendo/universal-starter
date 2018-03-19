import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComoAtenderClienteComponent } from './info-como-atender-cliente/info-como-atender-cliente.component';

const dataRoute = {
	metadata: {
		title: '6 dicas de como atender um cliente bem nas redes sociais',
		description: 'Em um mercado tão competitivo, saber como atender um cliente não é mais diferencial para as empresas, é essencial! Veja, nesse infográfico gratuito, como atender um cliente bem nas redes sociais. Baixe, agora!',
		keywords: 'como atender um cliente'
	}
};

const routes: Routes = [{
  path: 'info-como-atender-um-cliente',
  component: InfoComoAtenderClienteComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoComoAtenderClienteRoutingModule { }
