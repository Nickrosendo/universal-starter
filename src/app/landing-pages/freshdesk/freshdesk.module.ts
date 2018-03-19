import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreshdeskComponent } from './freshdesk.component';
import { PartialsModule } from '../../partials/partials.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule.forChild([
      { path: '', component: FreshdeskComponent, pathMatch: 'full' },
    ]),
  ],
  declarations: [
    FreshdeskComponent
  ]
})
export class FreshdeskModule { }
