import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../modals/form-modal/form-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-planilha-atendimento-cliente',
    templateUrl: './planilha-atendimento-cliente.component.html',
	providers: [ FormModalComponent ]
})

export class PlanilhaAtendimentoComponent {
	@ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	downloadPlanilhaModal() {
        this.formModalComponent.open();
    }
}
