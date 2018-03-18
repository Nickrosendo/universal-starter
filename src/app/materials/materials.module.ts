import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialsComponent } from './materials.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: MaterialsComponent, pathMatch: 'full' }
		]),
		CommonModule,
		PartialsModule,
	],
	declarations: [
		MaterialsComponent
	]
})
export class MaterialsModule { }

