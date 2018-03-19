import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { EbookDezMandamentosRoutingModule } from './ebook-dez-mandamentos-routing.module';
import { EbookDezMandamentosComponent } from './ebook-dez-mandamentos/ebook-dez-mandamentos.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    EbookDezMandamentosRoutingModule
  ],
  declarations: [EbookDezMandamentosComponent]
})
export class EbookDezMandamentosModule { }
