import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PricingRouting } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		PricingRouting,
		PartialsModule
	],
	declarations: [
		PricingComponent
	]
})
export class PricingModule { }
