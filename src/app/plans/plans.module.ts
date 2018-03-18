import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlansRouting } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { DataService } from './data.service';
import { PartialsModule } from '../partials/partials.module';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
	imports: [
		BrowserModule,
		PlansRouting,
		PartialsModule,
		Ng2FilterPipeModule
	],
	providers: [
		DataService
	],
	declarations: [
		PlansComponent
	]
})
export class PlansModule { }
