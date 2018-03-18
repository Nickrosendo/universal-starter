import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: HomeComponent, pathMatch: 'full' }
		]),
		PartialsModule,
	],
	declarations: [
		HomeComponent
	]
})
export class HomeModule { }
