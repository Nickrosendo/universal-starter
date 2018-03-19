import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HelpDeskComponent } from './help-desk.component';
import { PartialsModule } from '../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule.forChild([{path: '', component: HelpDeskComponent, pathMatch: 'full'}])
  ],
  declarations: [
    HelpDeskComponent
  ]
})
export class HelpDeskModule { }
