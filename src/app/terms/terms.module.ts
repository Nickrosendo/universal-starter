import { NgModule } from '@angular/core';

import { TermsRouting } from './terms-routing.module';
import { TermsComponent } from './terms.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
	imports: [
		TermsRouting
	],
	declarations: [
		TermsComponent
	]
})
export class TermsModule { }
