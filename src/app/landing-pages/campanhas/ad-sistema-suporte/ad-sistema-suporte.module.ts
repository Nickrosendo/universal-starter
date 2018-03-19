import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { SistemaSuporteRoutingModule } from './ad-sistema-suporte-routing.module';
import { AdSistemaSuporteComponent } from './ad-sistema-suporte/ad-sistema-suporte.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    SistemaSuporteRoutingModule
  ],
  declarations: [AdSistemaSuporteComponent]
})
export class AdSistemaSuporteModule { }
