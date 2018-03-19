import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdHelpDeskRoutingModule } from './ad-help-desk-routing.module';
import { AdHelpDeskComponent } from './ad-help-desk/ad-help-desk.component';
import { PartialsModule } from '../../../partials/partials.module';


@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdHelpDeskRoutingModule
  ],
  declarations: [AdHelpDeskComponent]
})
export class AdHelpDeskModule { }
