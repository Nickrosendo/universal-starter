import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from '../../modals/modal.directive';
import { ContactConsultoresModalComponent } from '../../modals/contact-consultores/contact-consultores-modal.component';

@Component({
  selector: 'octadesk-chat-banner',
  templateUrl: './chat-banner.component.html',
  providers: [ModalDirective,
              ContactConsultoresModalComponent]
})
export class ChatBannerComponent implements OnInit {



  constructor() { }

  ngOnInit() {
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
