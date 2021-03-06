import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AtendimentoAoClienteComponent } from './atendimento-ao-cliente.component';
import { PartialsModule } from '../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AtendimentoAoClienteComponent, pathMatch: 'full' }
    ]),
    PartialsModule
  ],
  declarations: [
    AtendimentoAoClienteComponent
  ]
})
export class AtendimentoAoClienteModule { }
