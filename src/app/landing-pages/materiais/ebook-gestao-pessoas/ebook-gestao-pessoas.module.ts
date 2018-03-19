import { NgModule } from '@angular/core';
import { PartialsModule } from '../../../partials/partials.module';
import { CommonModule } from '@angular/common';

import { EbookGestaoPessoasRoutingModule } from './ebook-gestao-pessoas-routing.module';
import { EbookGestaoPessoasComponent } from './ebook-gestao-pessoas/ebook-gestao-pessoas.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    EbookGestaoPessoasRoutingModule
  ],
  declarations: [EbookGestaoPessoasComponent]
})
export class EbookGestaoPessoasModule { }
