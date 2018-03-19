import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanilhaCadastroClientesRoutingModule } from './planilha-cadastro-clientes-routing.module';
import { PlanilhaCadastroClientesComponent } from './planilha-cadastro-clientes/planilha-cadastro-clientes.component';
import { PartialsModule } from '../../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    PlanilhaCadastroClientesRoutingModule
  ],
  declarations: [PlanilhaCadastroClientesComponent]
})
export class PlanilhaCadastroClientesModule { }
