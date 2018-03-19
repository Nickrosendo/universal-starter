import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { AdHelpDeskbRoutingModule } from './ad-help-deskb-routing.module';
import { AdHelpDeskbComponent } from './ad-help-deskb/ad-help-deskb.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdHelpDeskbRoutingModule
  ],
  declarations: [AdHelpDeskbComponent]
})
export class AdHelpDeskbModule { }
