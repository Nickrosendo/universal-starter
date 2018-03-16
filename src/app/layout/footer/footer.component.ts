import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { ModalDirective } from '../../partials/modals/modal.directive';
import { ContactConsultoresModalComponent } from '../../partials/modals/contact-consultores/contact-consultores-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-footer',
	templateUrl: './footer.component.html',
	providers: [
		ModalDirective,
		ContactConsultoresModalComponent
	]
})
export class FooterComponent {

	// @Input('rd-identificator') RdIdentificator: string;
	@ViewChild(ModalDirective) modal;
	@ViewChild(ContactConsultoresModalComponent) contactModal: ContactConsultoresModalComponent;

	 open(content) {
        this.modal.open(content);
    }

	openContactModal() {
			this.contactModal.open();
		}

	constructor (public router : Router, @Inject(PLATFORM_ID) private platformId: Object) {}
}
