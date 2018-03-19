import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaHelpDeskComponent } from './sistema-help-desk.component';
import { PartialsModule } from '../../partials/partials.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule.forChild([{ path: '', component: SistemaHelpDeskComponent, pathMatch: 'full' }])
  ],
  declarations: [SistemaHelpDeskComponent]
})
export class SistemaHelpDeskModule { }
