import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TermsComponent } from './terms.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
  imports: [
    PartialsModule,
    RouterModule.forChild([
      { path: '', component: TermsComponent, pathMatch: 'full' }
    ]),
  ],
  declarations: [
    TermsComponent
  ]
})
export class TermsModule { }
