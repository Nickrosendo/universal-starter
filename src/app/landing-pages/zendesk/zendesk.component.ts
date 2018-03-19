import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from '../../partials/modals/modal.directive';
import { ContactModalCotacaoComponent } from '../../partials/modals/contact-cotacao/contact-modal-cotacao.component';
import { TryOctadeskModalComponent } from '../../partials/modals/try-octadesk-modal/try-octadesk-modal.component';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../services/LinkService.service";

@Component({
	moduleId: module.id,
	selector: 'octadesk-lp-zendesk',
	templateUrl: './zendesk.component.html',
	providers: [
		ModalDirective,
		TryOctadeskModalComponent,
		ContactModalCotacaoComponent,
		LinkService
	]
})

export class ZendeskComponent implements OnInit {
	@ViewChild(ModalDirective) modal: ModalDirective;
	@ViewChild(ContactModalCotacaoComponent) contactCotacaoModal: ContactModalCotacaoComponent;
	@ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;


	constructor( meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Conheça o Octadesk, a melhor alternativa para o Zendesk");
    meta.updateTag({ name: 'keywords', content: 'Zendesk'});
    meta.updateTag({ name: 'description', content: 'Procurando por uma alternativa para o Zendesk? Conheça, agora, o Octadesk! A melhor solução de Help desk e atendimento ao cliente para sua empresa! Entre em contato e faça uma avaliação gratuita!'});
	linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/concorrentes/zendesk' } )
  }

	ngOnInit() { }
	FormId: String;

	open(content) {
		this.modal.open(content);
	}
	openTrialModal() {
		this.FormId = "experimente-gratis-header";
		this.trialModal.open();
	}
	openTrialRiverModal() {
		this.FormId = "solicitar-avaliacao-river";
        this.trialModal.open();
    }
	openTrialSeaModal() {
		this.FormId = "solicitar-avaliacao-sea";
        this.trialModal.open();
    }
	opencontactCotacaoModal() {
        this.contactCotacaoModal.open();
    }
}
