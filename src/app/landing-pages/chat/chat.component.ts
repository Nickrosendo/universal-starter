import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { TryOctadeskModalComponent } from '../../partials/modals/try-octadesk-modal/try-octadesk-modal.component';
import { ContactConsultoresModalComponent } from '../../partials/modals/contact-consultores/contact-consultores-modal.component';
import { LinkService } from '../../services/LinkService.service';

@Component({
  moduleId: module.id,
  selector: 'octadesk-chat',
  templateUrl: './chat.component.html',
  providers: [TryOctadeskModalComponent, ContactConsultoresModalComponent, LinkService]
})

export class ChatComponent {

  constructor(meta: Meta, titlle: Title, linkService: LinkService) {
    titlle.setTitle('Chat para site Octadesk: Atenda seus clientes em tempo real');
    meta.updateTag({ name: 'keywords', content: 'chat para site, chat para empresas, chat empresarial' });
    meta.updateTag({ name: 'description', content: 'Conheça o chat para site da Octadesk e fique na frente da concorrência. Realize um atendimento personalizado, em tempo real e não perca mais oportunidades de negócios!' });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com/chat-para-site' })
  }

  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;
  @ViewChild(ContactConsultoresModalComponent) contactModal: ContactConsultoresModalComponent;

  openContactModal() {
    this.contactModal.open();
  }
  openTrialModal() {
    this.trialModal.open();
  }

}
