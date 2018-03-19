import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { AdSistemaAtendimentoClientebRoutingModule } from './ad-sistema-atendimento-clienteb-routing.module';
import { AdSistemaAtendimentoClientebComponent } from './ad-sistema-atendimento-clienteb/ad-sistema-atendimento-clienteb.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdSistemaAtendimentoClientebRoutingModule
  ],
  declarations: [AdSistemaAtendimentoClientebComponent]
})
export class AdSistemaAtendimentoClientebModule { }
