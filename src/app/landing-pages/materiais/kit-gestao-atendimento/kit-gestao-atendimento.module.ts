import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { KitGestaoAtendimentoRoutingModule } from './kit-gestao-atendimento-routing.module';
import { KitGestaoAtendimentoComponent } from './kit-gestao-atendimento/kit-gestao-atendimento.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    KitGestaoAtendimentoRoutingModule
  ],
  declarations: [KitGestaoAtendimentoComponent]
})
export class KitGestaoAtendimentoModule { }
