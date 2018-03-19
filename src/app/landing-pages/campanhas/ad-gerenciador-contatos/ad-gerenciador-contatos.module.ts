import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdGerenciadorContatosRoutingModule } from './ad-gerenciador-contatos-routing.module';
import { AdGerenciadorContatosComponent } from './ad-gerenciador-contatos/ad-gerenciador-contatos.component';
import { PartialsModule } from '../../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdGerenciadorContatosRoutingModule
  ],
  declarations: [AdGerenciadorContatosComponent]
})
export class AdGerenciadorContatosModule { }
