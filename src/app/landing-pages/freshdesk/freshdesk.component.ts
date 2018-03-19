import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ModalDirective } from '../../partials/modals/modal.directive';
import { ContactModalCotacaoComponent } from '../../partials/modals/contact-cotacao/contact-modal-cotacao.component';
import { TryOctadeskModalComponent } from '../../partials/modals/try-octadesk-modal/try-octadesk-modal.component';

import { LinkService } from '../../services/LinkService.service';

@Component({
  moduleId: module.id,
  selector: 'octadesk-lp-freshdesk',
  templateUrl: './freshdesk.component.html',
  providers: [
    ModalDirective,
    TryOctadeskModalComponent,
    ContactModalCotacaoComponent,
    LinkService
  ]
})

export class FreshdeskComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;
  @ViewChild(ContactModalCotacaoComponent) contactCotacaoModal: ContactModalCotacaoComponent;
  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

  constructor(meta: Meta, titlle: Title, linkService: LinkService) {
    titlle.setTitle('Conheça o Octadesk, a melhor alternativa para o FreshDesk');
    meta.updateTag({ name: 'keywords', content: 'FreshDesk, Freshdesk Alternative, Alternativa Freshdesk' });
    meta.updateTag({ name: 'description', content: 'Procurando por uma alternativa para o FreshDesk? Conheça, agora, o Octadesk! A melhor solução de Help desk e atendimento ao cliente para sua empresa! Entre em contato e faça um teste grátis' });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com/concorrentes/freshdesk' })
  }

  ngOnInit() { }
  FormId: String;
  open(content) {
    this.modal.open(content);
  }
  openTrialModal() {
    this.FormId = 'experimente-gratis-header';
    this.trialModal.open();
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
