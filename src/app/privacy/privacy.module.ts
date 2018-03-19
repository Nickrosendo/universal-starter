import { NgModule } from '@angular/core';

import { PrivacyRouting } from './privacy-routing.module'
import { PrivacyComponent } from './privacy.component';

@NgModule({
	imports: [
		PrivacyRouting
	],
	declarations: [
		PrivacyComponent
	]
})
export class PrivacyModule { }
