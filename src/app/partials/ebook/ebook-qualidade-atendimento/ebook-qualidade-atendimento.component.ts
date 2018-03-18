import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../../modals/form-modal/form-modal.component';
@Component({
    moduleId: module.id,
    selector: 'octadesk-ebook-qualidade-atendimento',
    templateUrl: './ebook-qualidade-atendimento.component.html',
	providers: [ FormModalComponent ]
})

export class EbookQualidadeComponent {
  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	downloadEbookQualidadeAtendimento() {
    this.formModalComponent.open();
    }
}
