import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { EbookReduzirCustosRoutingModule } from './ebook-reduzir-custos-routing.module';
import { EbookReduzirCustosComponent } from './ebook-reduzir-custos/ebook-reduzir-custos.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    EbookReduzirCustosRoutingModule
  ],
  declarations: [EbookReduzirCustosComponent]
})
export class EbookReduzirCustosModule { }
