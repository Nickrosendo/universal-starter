import { Component, Input, ViewChild, ViewChildren } from '@angular/core';

import { ModalDirective } from '../../modals/modal.directive';
import { SuccessContactTemplateComponent } from '../../modals/success-contact-template/success-contact-template.component';

@Component({
	moduleId: module.id,
	selector: 'octadesk-contact-consultores-modal',
	templateUrl: './contact-consultores-modal.component.html',
	providers: [ModalDirective]
})
export class ContactConsultoresModalComponent {
	@Input('gtm-form-id') GtmFormId: string;
	@Input('rd-identificator') RdIdentificator: string;
	@ViewChild(ModalDirective) private modal;
	@ViewChild(SuccessContactTemplateComponent) private templateSuccess;
	@ViewChild('siteModalConsultoresCasosDeSucesso') private template;

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
