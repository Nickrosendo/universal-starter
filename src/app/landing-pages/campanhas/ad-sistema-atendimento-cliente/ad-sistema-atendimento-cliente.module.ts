import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdSistemaAtendimentoClienteRoutingModule } from './ad-sistema-atendimento-cliente-routing.module';
import { AdSistemaAtendimentoClienteComponent } from './ad-sistema-atendimento-cliente/ad-sistema-atendimento-cliente.component';
import { PartialsModule } from '../../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdSistemaAtendimentoClienteRoutingModule
  ],
  declarations: [AdSistemaAtendimentoClienteComponent]
})
export class AdSistemaAtendimentoClienteModule { }
