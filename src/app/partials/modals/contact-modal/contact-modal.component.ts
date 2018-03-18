import { Component, Input, ViewChild, ViewChildren } from '@angular/core';

import { ModalDirective } from '../../modals/modal.directive';
import { SuccessContactTemplateComponent } from '../../modals/success-contact-template/success-contact-template.component';

@Component({
	moduleId: module.id,
	selector: 'octadesk-contact-modal',
	templateUrl: './contact-modal.component.html',
	providers: [ModalDirective]
})
export class ContactModalComponent {
	@Input('gtm-form-id') GtmFormId: string;
	@Input('rd-identificator') RdIdentificator: string;
	@ViewChild(ModalDirective) private modal;
	@ViewChild(SuccessContactTemplateComponent) private templateSuccess;
	@ViewChild('siteModalDemo') private template;

	constructor() { }

	public open() {
		this.modal.open(this.template);
	}

	onSubmitted(submmited: boolean) {
		if (submmited) {
			this.modal.close();
			this.modal.open(this.templateSuccess.template);
		}
	}

}
