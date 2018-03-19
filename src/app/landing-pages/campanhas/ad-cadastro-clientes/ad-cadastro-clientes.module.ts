import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdCadastroClientesRoutingModule } from './ad-cadastro-clientes-routing.module';
import { AdCadastroClientesComponent } from './ad-cadastro-clientes/ad-cadastro-clientes.component';
import { PartialsModule } from '../../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdCadastroClientesRoutingModule
  ],
  declarations: [AdCadastroClientesComponent]
})
export class AdCadastroClientesModule { }
