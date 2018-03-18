import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PricingComponent } from './pricing.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		PartialsModule,
		RouterModule.forChild([
			{ path: '', component: PricingComponent, pathMatch: 'full' }
		]),
	],
	declarations: [
		PricingComponent
	]
})
export class PricingModule { }
