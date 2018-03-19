import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { EbookDicasQualidadeAtendimentoRoutingModule } from './ebook-dicas-qualidade-atendimento-routing.module';
import { EbookDicasQualidadeAtendimentoComponent } from './ebook-dicas-qualidade-atendimento/ebook-dicas-qualidade-atendimento.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    EbookDicasQualidadeAtendimentoRoutingModule
  ],
  declarations: [EbookDicasQualidadeAtendimentoComponent]
})
export class EbookDicasQualidadeAtendimentoModule { }
