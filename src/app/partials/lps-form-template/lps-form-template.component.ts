import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SuccessGoToFeaturesComponent } from '../modals/success-go-to-features/success-go-to-features.component';

@Component({
  selector: 'octadesk-lps-form-template',
  templateUrl: './lps-form-template.component.html'
})
export class LpsFormTemplateComponent implements OnInit {
  @Input('gtm-form-id') GtmFormIdentificator: string;
  @Input('rd-identificador') RdIdentificator: string;
  @Input('titulo') Titulo: string;
  @Input('sub-titulo') SubTitulo: string;
  @Input('titulo-form') FormTitle: String;
  @Input('subtitulo-form') FormSubTitle: String;
  @Input('texto-submit') TxtSubmit: string;
  @Input('under-cta') UnderCta: String;
  @Input('formulario') Formulario: String;
  @Input('download-ebook-url') DownloadEbookUrl: String;
  @ViewChild(SuccessGoToFeaturesComponent)  successModal: SuccessGoToFeaturesComponent;
  constructor() {}

  ngOnInit() {}

  openSuccessModal() {
    this.successModal.open();
  }

  onSubmitted(submmited: boolean) {
    if (submmited) {
      if (this.DownloadEbookUrl !== undefined) {
        window.open(this.DownloadEbookUrl.toString());
      } else {
        this.openSuccessModal();
      }
    }
  }
}
