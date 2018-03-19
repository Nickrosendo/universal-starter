import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { AdGerenciadorContatosbRoutingModule } from './ad-gerenciador-contatosb-routing.module';
import { AdGerenciadorContatosbComponent } from './ad-gerenciador-contatosb/ad-gerenciador-contatosb.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    AdGerenciadorContatosbRoutingModule
  ],
  declarations: [AdGerenciadorContatosbComponent]
})
export class AdGerenciadorContatosbModule { }
