import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../../modals/form-modal/form-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-ebook-atendimento-cliente',
    templateUrl: './ebook-atendimento-cliente.component.html',
	providers: [ FormModalComponent ]
})

export class EbookAtendimentoClienteComponent {

  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	downloadEbookAtendimentoModal() {
    this.formModalComponent.open();
    }
}
