import { Component, ViewChild } from '@angular/core';

import { TryOctadeskModalComponent } from '../modals/try-octadesk-modal/try-octadesk-modal.component';

@Component({
    moduleId: module.id,
    selector: 'octadesk-free-trial',
    templateUrl: './free-trial.component.html',
	providers: [ TryOctadeskModalComponent ]
})
export class FreeTrialComponent {
	@ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

	openTrialModal() {
        this.trialModal.open();
    }
}
