import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { TryOctadeskModalComponent } from '../../modals/try-octadesk-modal/try-octadesk-modal.component';

@Component({
  selector: 'octadesk-lp-header-teste-ab-sem-form',
  templateUrl: './lp-header-teste-ab-sem-form.component.html',
  providers: [ TryOctadeskModalComponent ]
})
export class LpHeaderTesteAbSemFormComponent implements OnInit {


  @Input('gtm-form-id') GtmFormIdentificator: string;
  @Input('rd-identificador') RdIdentificator: string;
  @Input('imagem-header') imageHeader: String;
  @Input('hide-logo') hideLogo: boolean;
  @Input('titulo') Titulo: String;
  @Input('sub-titulo') SubTitulo: String;
  @Input('alt-header') AltHeader: String;

  constructor() { }

  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

	openFreeTrialModal() {
      this.trialModal.open();
  }


  ngOnInit() {
    if (this.hideLogo == undefined) {
      this.hideLogo = false;
    }
  }

}
