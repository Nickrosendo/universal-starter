import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ContactModalComponent } from '../partials/modals/contact-modal/contact-modal.component';

import { LinkService } from '../services/LinkService.service';

@Component({
  moduleId: module.id,
  selector: 'octadesk-contact',
  templateUrl: './contact.component.html',
  providers: [ContactModalComponent, LinkService]
})
export class ContactComponent {

  constructor(meta: Meta, titlle: Title, linkService: LinkService) {
    titlle.setTitle('Converse com nossos especialista em Atendimento e Helpdesk');
    meta.updateTag({ name: 'keywords', content: 'Help Desk' });
    meta.updateTag({
      name: 'description',
      content: 'Entre em contato com nossos consultores de Atendimento ao Cliente e Help desk. Tire suas dúvidas e descubra como podemos ajudar sua empresa. Solicite uma avaliação gratuita!'
    });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com/contato' })
  }

  @ViewChild(ContactModalComponent) contactModal: ContactModalComponent;

  openContactModal() {
    this.contactModal.open();
  }
}
