import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../../modals/form-modal/form-modal.component';
@Component({
    moduleId: module.id,
    selector: 'octadesk-ebook-pessoas',
    templateUrl: './ebook-pessoas.component.html',
	providers: [ FormModalComponent ]
})

export class EbookPessoasComponent {
  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	downloadEbookModal() {
    this.formModalComponent.open();
    }
}
