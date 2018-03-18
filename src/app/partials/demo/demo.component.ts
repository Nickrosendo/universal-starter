import { Component, ViewChild } from '@angular/core';

import { ModalDirective } from '../modals/modal.directive';
import { ContactModalComponent } from '../../partials/modals/contact-modal/contact-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-demo',
    templateUrl: './demo.component.html',
	providers: [ ContactModalComponent ]
})
export class DemoComponent {

	@ViewChild(ContactModalComponent) modal;

    open() {
        this.modal.open();
    }
}
