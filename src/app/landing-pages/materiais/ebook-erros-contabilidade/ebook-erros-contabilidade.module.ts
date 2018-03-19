import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { EbookErrosContabilidadeRoutingModule } from './ebook-erros-contabilidade-routing.module';
import { EbookErrosContabilidadeComponent } from '../ebook-erros-contabilidade/ebook-erros-contabilidade.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    EbookErrosContabilidadeRoutingModule
  ],
  declarations: [EbookErrosContabilidadeComponent]
})
export class EbookErrosContabilidadeModule { }
