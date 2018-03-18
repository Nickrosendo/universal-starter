import { Component, ViewChild } from '@angular/core';

import { ContactModalComponent } from '../modals/contact-modal/contact-modal.component';


@Component({
    moduleId: module.id,
    selector: 'octadesk-support',
    templateUrl: './support.component.html',
    providers: [ContactModalComponent]
})
export class SupportComponent {

    @ViewChild(ContactModalComponent) modal;

    open() {
        this.modal.open();
    }
}
