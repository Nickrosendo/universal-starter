import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FeaturesRouting } from './features-routing.module'
import { FeaturesComponent } from './features.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
	imports: [
		BrowserModule,
		FeaturesRouting,
		PartialsModule
	],
	declarations: [
		FeaturesComponent
	]
})
export class FeaturesModule { }
