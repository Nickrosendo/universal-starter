import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { InfoGestaoProcessosRoutingModule } from './info-gestao-processos-routing.module';
import { InfoGestaoProcessosComponent } from './info-gestao-processos/info-gestao-processos.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    InfoGestaoProcessosRoutingModule
  ],
  declarations: [InfoGestaoProcessosComponent]
})
export class InfoGestaoProcessosModule { }
