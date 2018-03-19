import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';
import { EbookJornadaClienteRoutingModule } from './ebook-jornada-cliente-routing.module';
import { EbookJornadaClienteComponent } from './ebook-jornada-cliente/ebook-jornada-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    EbookJornadaClienteRoutingModule
  ],
  declarations: [EbookJornadaClienteComponent]
})
export class EbookJornadaClienteModule { }
