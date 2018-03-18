import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../modals/form-modal/form-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-apresentacao-helpdesk',
    templateUrl: './apresentacao-helpdesk-octadesk.component.html',
	providers: [ FormModalComponent ]
})

export class ApresentacaoHelpDeskComponent {
	@ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	DownloadApresentacaoModalComponent() {
        this.formModalComponent.open();
    }
}
