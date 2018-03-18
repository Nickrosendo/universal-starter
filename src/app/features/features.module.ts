import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PartialsModule } from '../partials/partials.module';
import { FeaturesComponent } from './features.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule.forChild([
      { path: '', component: FeaturesComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    FeaturesComponent
  ]
})
export class FeaturesModule { }
