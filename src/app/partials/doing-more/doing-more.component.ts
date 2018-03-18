import { Component, ViewChild } from '@angular/core';

import { TryOctadeskModalComponent } from '../modals/try-octadesk-modal/try-octadesk-modal.component';

@Component({
	moduleId: module.id,
	selector: 'octadesk-doing-more',
	templateUrl: './doing-more.component.html',
	providers: [
		TryOctadeskModalComponent
	]
})
export class DoingMoreComponent {

	@ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

	openTrialModal() {
        this.trialModal.open();
    }

}

