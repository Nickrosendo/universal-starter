import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { AdSistemaAtendimentoOnlinebRoutingModule } from './ad-sistema-atendimento-onlineb-routing.module';
import { AdSistemaAtendimentoOnlinebComponent } from './ad-sistema-atendimento-onlineb/ad-sistema-atendimento-onlineb.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdSistemaAtendimentoOnlinebRoutingModule
  ],
  declarations: [AdSistemaAtendimentoOnlinebComponent]
})
export class AdSistemaAtendimentoOnlinebModule { }
