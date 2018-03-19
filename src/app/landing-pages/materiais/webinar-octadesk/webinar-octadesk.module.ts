import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { WebinarOctadeskRoutingModule } from './webinar-octadesk-routing.module';
import { WebinarOctadeskComponent } from './webinar-octadesk/webinar-octadesk.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    WebinarOctadeskRoutingModule
  ],
  declarations: [WebinarOctadeskComponent]
})
export class WebinarOctadeskModule { }
