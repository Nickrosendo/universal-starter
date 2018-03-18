import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../../modals/form-modal/form-modal.component';
@Component({
    moduleId: module.id,
    selector: 'octadesk-ebook-satisfacao-cliente',
    templateUrl: './ebook-satisfacao-cliente.component.html',
	providers: [ FormModalComponent ]
})

export class EbookSatisfacaoComponent {

  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	downloadEbookModal() {
        this.formModalComponent.open();
    }
}
