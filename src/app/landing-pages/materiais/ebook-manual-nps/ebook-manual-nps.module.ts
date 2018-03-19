import { NgModule } from '@angular/core';
import { PartialsModule } from '../../../partials/partials.module';
import { CommonModule } from '@angular/common';

import { EbookManualNpsRoutingModule } from './ebook-manual-nps-routing.module';
import { EbookManualNpsComponent } from './ebook-manual-nps/ebook-manual-nps.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    EbookManualNpsRoutingModule
  ],
  declarations: [EbookManualNpsComponent]
})
export class EbookManualNpsModule { }
