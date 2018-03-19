import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdControleClientesRoutingModule } from './ad-controle-clientes-routing.module';
import { PartialsModule } from '../../../partials/partials.module';
import { AdControleClientesComponent } from './ad-controle-clientes/ad-controle-clientes.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdControleClientesRoutingModule
  ],
  declarations: [AdControleClientesComponent]
})
export class AdControleClientesModule { }
