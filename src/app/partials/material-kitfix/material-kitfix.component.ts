import { Component, ViewChild } from '@angular/core';

import { FormModalComponent } from '../modals/form-modal/form-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-material-kitfix',
    templateUrl: './material-kitfix.component.html',
	providers: [ FormModalComponent ]
})

export class MaterialKitfixComponent {
	@ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

	downloadMaterialKitfixModal() {
        this.formModalComponent.open();
    }
}
