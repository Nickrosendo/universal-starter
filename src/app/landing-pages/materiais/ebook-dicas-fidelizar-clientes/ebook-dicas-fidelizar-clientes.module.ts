import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { EbookDicasFidelizarClientesRoutingModule } from './ebook-dicas-fidelizar-clientes-routing.module';
import { EbookDicasFidelizarClientesComponent } from './ebook-dicas-fidelizar-clientes/ebook-dicas-fidelizar-clientes.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    EbookDicasFidelizarClientesRoutingModule
  ],
  declarations: [EbookDicasFidelizarClientesComponent]
})
export class EbookDicasFidelizarClientesModule { }
