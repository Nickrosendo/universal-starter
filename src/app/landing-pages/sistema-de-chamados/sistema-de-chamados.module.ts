import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SistemaDeChamadosComponent } from './sistema-de-chamados.component';
import { PartialsModule } from '../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SistemaDeChamadosComponent, pathMatch: 'full ' }]),
    PartialsModule
  ],
  declarations: [
    SistemaDeChamadosComponent
  ]
})
export class SistemaDeChamadosModule { }
