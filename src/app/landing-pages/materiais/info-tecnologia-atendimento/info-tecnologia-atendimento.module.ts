import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { InfoTecnologiaAtendimentoRoutingModule } from './info-tecnologia-atendimento-routing.module';
import { InfoTecnologiaAtendimentoComponent } from './info-tecnologia-atendimento/info-tecnologia-atendimento.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    InfoTecnologiaAtendimentoRoutingModule
  ],
  declarations: [InfoTecnologiaAtendimentoComponent]
})
export class InfoTecnologiaAtendimentoModule { }
