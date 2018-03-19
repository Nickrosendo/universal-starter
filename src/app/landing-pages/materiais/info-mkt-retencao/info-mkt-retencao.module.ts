import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../../partials/partials.module';

import { InfoMktRetencaoRoutingModule } from './info-mkt-retencao-routing.module';
import { InfoMktRetencaoComponent } from './info-mkt-retencao/info-mkt-retencao.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    InfoMktRetencaoRoutingModule
  ],
  declarations: [InfoMktRetencaoComponent]
})
export class InfoMktRetencaoModule { }
