import { Component, ViewChild } from '@angular/core';

import { ContactModalComponent } from '../modals/contact-modal/contact-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-why-octadesk',
    templateUrl: './why-octadesk.component.html',
	providers: [ ContactModalComponent ]
})

export class WhyOctadeskComponent {
	@ViewChild(ContactModalComponent) contactModal: ContactModalComponent;

	openContactModal() {
        this.contactModal.open();
    }
}
