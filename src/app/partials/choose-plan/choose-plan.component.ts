import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from '../../partials/modals/modal.directive';
import { ContactModalCotacaoComponent } from '../../partials/modals/contact-cotacao/contact-modal-cotacao.component';
import { TryOctadeskModalComponent } from '../../partials/modals/try-octadesk-modal/try-octadesk-modal.component';


@Component({
	moduleId: module.id,
	selector: 'octadesk-choose-plan',
	templateUrl: 'choose-plan.component.html',
	providers: [
		ModalDirective,
		TryOctadeskModalComponent,
		ContactModalCotacaoComponent
	]
})
export class ChoosePlanComponent implements OnInit {
	@ViewChild(ModalDirective) modal: ModalDirective;
	@ViewChild(ContactModalCotacaoComponent) contactCotacaoModal: ContactModalCotacaoComponent;
	@ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

	constructor() { }
	FormId: String;
	priceCurrency: String = 'R$';
	priceType: String = 'yearly';
	prices: Object = {
		river: {
			yearly: {
				original: 69,
				promotional: 59
			},
			monthly: {
				original: 76,
				promotional: 69
			},
		},
		sea: {
			yearly: {
				original: 129,
				promotional: 109
			},
			monthly: {
				original: 143,
				promotional: 129
			}
		}
	};

	ngOnInit() { }

	open(content) {
		this.modal.open(content);
	}
	openTrialRiverModal() {
		this.FormId = 'solicitar-avaliacao-river';
        this.trialModal.open();
    }
	openTrialSeaModal() {
		this.FormId = 'solicitar-avaliacao-sea';
        this.trialModal.open();
    }
	opencontactCotacaoModal() {
        this.contactCotacaoModal.open();
    }


}
