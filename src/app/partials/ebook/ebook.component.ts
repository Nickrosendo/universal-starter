import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../modals/form-modal/form-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-ebook',
    templateUrl: './ebook.component.html',
	providers: [ FormModalComponent ]
})

export class EbookComponent {
  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	downloadEbookModal() {
        this.formModalComponent.open();
    }
}
