import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SuccessStoriesComponent } from './success-stories.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
  imports: [
    PartialsModule,
    RouterModule.forChild([
      { path: '', component: SuccessStoriesComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    SuccessStoriesComponent
  ]
})
export class SuccessStoriesModule { }
