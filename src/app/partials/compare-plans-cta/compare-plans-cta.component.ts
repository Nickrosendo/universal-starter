import { Component, OnInit, ViewChild} from '@angular/core';

import { ModalDirective } from '../modals/modal.directive';
import { ContactConsultoresModalComponent } from '../modals/contact-consultores/contact-consultores-modal.component';


@Component({
  selector: 'octadesk-compare-plans-cta',
  templateUrl: './compare-plans-cta.component.html',
  providers: [
    ModalDirective,
    ContactConsultoresModalComponent
  ]
})
export class ComparePlansCtaComponent implements OnInit {

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
