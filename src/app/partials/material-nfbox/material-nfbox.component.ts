import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../modals/form-modal/form-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-material-nfbox',
    templateUrl: './material-nfbox.component.html',
	providers: [ FormModalComponent ]
})

export class MaterialNfboxComponent {
	@ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	downloadMaterialNfboxModal() {
        this.formModalComponent.open();
    }
}
