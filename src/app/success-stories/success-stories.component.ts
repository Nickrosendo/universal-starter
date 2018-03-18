import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ModalDirective } from '../partials/modals/modal.directive';
import { ContactConsultoresModalComponent } from '../partials/modals/contact-consultores/contact-consultores-modal.component';
import { LinkService } from '../services/LinkService.service';

@Component({
  moduleId: module.id,
  selector: 'octadesk-success-stories',
  templateUrl: './success-stories.component.html',
  providers: [
    ModalDirective,
    LinkService
  ]
})
export class SuccessStoriesComponent {

  constructor(meta: Meta, titlle: Title, linkService: LinkService) {
    titlle.setTitle('Sistema de Atendimento Octadesk - Veja os casos de sucesso');
    meta.updateTag({ name: 'keywords', content: 'Sistema de atendimento' });
    meta.updateTag({ name: 'description', content: 'Veja os casos de sucesso do nosso Sistema de Atendimento Online. Entenda como nosso Software de Help Desk pode ajudar a sua empresa. Entre em contato e solicite uma demonstração gratuita!' });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com/casos-de-sucesso/sistema-de-atendimento' })
  }

  @ViewChild(ModalDirective) modal;
  @ViewChild(ContactConsultoresModalComponent) contactModal: ContactConsultoresModalComponent;

  open(content) {
    this.modal.open(content);
  }

  openContactModal() {
    this.contactModal.open();
  }
}
