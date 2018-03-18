import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'octadesk-lp-header-com-form',
  templateUrl: './lp-header-com-form.component.html'
})
export class LpHeaderComFormComponent implements OnInit {

  @Input('gtm-form-id') GtmFormIdentificator: string;
  @Input('rd-identificador') RdIdentificator: string;
  @Input('imagem-header') imageHeader: String;
  @Input('hide-logo') hideLogo: boolean;
  @Input('titulo') Titulo: String;
  @Input('sub-titulo') SubTitulo: String;
  @Input('alt-header') AltHeader: String;
  @Input('texto-submit') TxtSubmit: String;
  @Input('titulo-form') FormTitle: String;
  @Input('subtitulo-form') FormSubTitle: String;
  @Input('under-cta') UnderCta: String;
  @Input('download-ebook-url') DownloadEbookUrl: String;

  constructor() { }

  ngOnInit() {
    if (this.hideLogo == undefined) {
      this.hideLogo = false;
    }
  }

}
