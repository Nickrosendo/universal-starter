import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdSistemaChamadosRoutingModule } from './ad-sistema-chamados-routing.module';
import { AdSistemaChamadosComponent } from './ad-sistema-chamados/ad-sistema-chamados.component';
import { PartialsModule } from '../../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdSistemaChamadosRoutingModule
  ],
  declarations: [AdSistemaChamadosComponent]
})
export class AdSistemaChamadosModule { }
