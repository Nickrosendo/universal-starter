import { Component, ViewChild } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'success-template',
	templateUrl: './success-template.component.html',
})
export class SuccessTemplateComponent {
	@ViewChild('modalSuccess') template;
 }
