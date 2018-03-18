import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../modals/form-modal/form-modal.component';


@Component({
    moduleId: module.id,
    selector: 'octadesk-webinar',
    templateUrl: './webinar.component.html',
	providers: [ FormModalComponent ]
})

export class WebinarComponent {
	@ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	downloadWebinarModal() {
        this.formModalComponent.open();
    }
}
