import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ZendeskComponent } from './zendesk.component';
import { PartialsModule } from '../../partials/partials.module';


@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule.forChild([{ path: '', component: ZendeskComponent, pathMatch: 'full' }])
  ],
  declarations: [
    ZendeskComponent
  ]
})
export class ZendeskModule { }
