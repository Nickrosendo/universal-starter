import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { ContactModalComponent } from '../../partials/modals/contact-modal/contact-modal.component';
import { ModalDirective } from '../../partials/modals/modal.directive';

@Component({
	moduleId: module.id,
	selector: 'octadesk-get-to-know',
	templateUrl: 'get-to-know.component.html',
	providers: [
		ContactModalComponent
	]
})
export class GetToKnowComponent implements OnInit {
	@Input('btn-class') BtnClass: string;
	@ViewChild(ContactModalComponent) contactModal: ContactModalComponent;

	constructor() { }

	ngOnInit() { }

	openContactModal() {
        this.contactModal.open();
    }
}
