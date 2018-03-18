import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
  imports: [
    PartialsModule,
    RouterModule.forChild([
      { path: '', component: ContactComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
