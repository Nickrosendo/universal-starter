import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdSistemaAtendimentoOnlineRoutingModule } from './ad-sistema-atendimento-online-routing.module';
import { AdSistemaAtendimentoOnlineComponent } from './ad-sistema-atendimento-online/ad-sistema-atendimento-online.component';
import { PartialsModule } from '../../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdSistemaAtendimentoOnlineRoutingModule
  ],
  declarations: [AdSistemaAtendimentoOnlineComponent]
})
export class AdSistemaAtendimentoOnlineModule { }
