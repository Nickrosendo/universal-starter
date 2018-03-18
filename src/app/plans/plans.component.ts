import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Rx';

import { TryOctadeskModalComponent } from '../partials/modals/try-octadesk-modal/try-octadesk-modal.component';
import { ContactModalCotacaoComponent } from '../partials/modals/contact-cotacao/contact-modal-cotacao.component';
import { ModalDirective } from '../partials/modals/modal.directive';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../services/LinkService.service";

@Component({
	moduleId: module.id,
	selector: 'octadesk-plans',
	templateUrl: './plans.component.html',
	providers: [
		ModalDirective,
		TryOctadeskModalComponent,
		ContactModalCotacaoComponent,
		LinkService
	]
})
export class PlansComponent implements OnInit {
	categories: any[];
	features: any[];
	plans: any[];
	items: Array<any>;
	@ViewChild(ModalDirective) modal;
	@ViewChild(ContactModalCotacaoComponent) contactCotacaoModal: ContactModalCotacaoComponent;
	@ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

  constructor(public dataService: DataService,  meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Sistema de Controle de Chamados Octadesk - Compare planos");
    meta.updateTag({ name: 'keywords', content: 'Controle de chamados'});
    meta.updateTag({ name: 'description', content: 'Conheça e compare os planos do nosso Sistema de Controle de Chamados. Entenda qual é a melhor opção de plano para sua empresa. Entre em contato e solicite uma demonstração gratuita!'});
	linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/comparativo/controle-de-chamados' } )
  }


	_createItems() {
		let items = {};

		this.features[0].forEach(feature => {
			items[feature.code] = {
				name: feature.name,
				category: feature.category,
				plans: []
			};
			this.plans.forEach(plan => {
				items[feature.code].plans.push(plan.features.find(f => f.code == feature.code));
			});
		});

		this.items = [];
		for (let item in items)
			this.items.push(items[item]);
	}

	ngOnInit() {
      this.categories = this.dataService.getCategories();
      this.features = this.dataService.getFeatures();
      this.plans = this.dataService.getPlans();
      this._createItems();
	}

    open(content) {
        this.modal.open(content);
    }

	openTrialModal() {
        this.trialModal.open();
    }

	opencontactCotacaoModal() {
        this.contactCotacaoModal.open();
    }

}
