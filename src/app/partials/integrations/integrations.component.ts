import { Component, ViewChild } from '@angular/core';

import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { FormModalComponent } from '../modals/form-modal/form-modal.component';


@Component({
  moduleId: module.id,
  selector: 'octadesk-integrations',
  templateUrl: './integrations.component.html',
  providers: [
    NgbCarousel,
    NgbCarouselConfig,
    FormModalComponent,
  ]
})
export class IntegrationsComponent {
  @ViewChild(NgbCarousel) carousel: NgbCarousel;
  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

  materialUrl: string;
  gtmFormId: string;
  rdIdentificator: string;
  modalTitle: string;
  modalSubmitText: string;

  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
  }

  selectSlide(id: string) {
    this.carousel.select(id);
  }

  downloadMaterialNfboxModal() {
    this.materialUrl = '/documentos/material-nfbox-octadesk.pdf';
    this.gtmFormId = 'material-nfbox-conversion';
    this.rdIdentificator = 'site-materiais-nfbox';
    this.modalTitle = 'Nfbox amplie sua capacidade de atendimento';
    this.modalSubmitText = 'Baixar Apresentação';
    this.formModalComponent.open();
  }

  downloadMaterialKitfixModal() {
    this.materialUrl = '/documentos/material-kitfix-octadesk.pdf';
    this.gtmFormId = 'material-kitfix-conversion';
    this.rdIdentificator = 'site-materiais-kitfix';
    this.modalTitle = 'Kitfix assistência técnica e field service';
    this.modalSubmitText = 'Baixar Apresentação';
    this.formModalComponent.open();
  }
}
