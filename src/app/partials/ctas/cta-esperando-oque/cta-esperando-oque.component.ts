import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TryOctadeskModalComponent } from '../../modals/try-octadesk-modal/try-octadesk-modal.component';

@Component({
  selector: 'octadesk-cta-esperando-oque',
  templateUrl: './cta-esperando-oque.component.html',
  providers: [ TryOctadeskModalComponent ]
})
export class CtaEsperandoOqueComponent implements OnInit {

  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;
  @Input('gtm-form-id') GtmFormId: String;
  @Input('rd-identificador') RdIdentificator: String;
  @Input('titulo') Titulo: String;
  @Input('sub-titulo') SubTitulo: String;
  @Input('texto-btn') TextoBtn: String;

	openTrialModal() {
      this.trialModal.open();
  }

  constructor() { }

  ngOnInit() {
  }

}
