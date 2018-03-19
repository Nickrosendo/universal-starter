import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdProgramaTicketsRoutingModule } from './ad-programa-tickets-routing.module';
import { PartialsModule } from '../../../partials/partials.module';
import { AdProgramaTicketsComponent } from './ad-programa-tickets/ad-programa-tickets.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdProgramaTicketsRoutingModule
  ],
  declarations: [AdProgramaTicketsComponent]
})
export class AdProgramaTicketsModule { }
