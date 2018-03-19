import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
  imports: [
    NgbModule,
    PartialsModule,
    RouterModule.forChild([
      { path: '', component: NotFoundComponent, pathMatch: 'full' }
    ]),
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
