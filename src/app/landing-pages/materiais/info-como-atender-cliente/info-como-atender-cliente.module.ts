import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';
import { InfoComoAtenderClienteRoutingModule } from './info-como-atender-cliente-routing.module';
import { InfoComoAtenderClienteComponent } from './info-como-atender-cliente/info-como-atender-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    InfoComoAtenderClienteRoutingModule
  ],
  declarations: [InfoComoAtenderClienteComponent]
})
export class InfoComoAtenderClienteModule { }
