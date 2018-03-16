import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRouting } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';
import { PartialsModule } from '../partials/partials.module';



@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		MaterialsRouting
	],
	declarations: [
		MaterialsComponent
	]
})
export class MaterialsModule { }

