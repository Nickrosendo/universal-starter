import { Component, ViewChild } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'success-contact-template',
	templateUrl: './success-contact-template.component.html'
})
export class SuccessContactTemplateComponent {
	@ViewChild('modalSuccess') template;
}
