import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { TryOctadeskModalComponent } from '../partials/modals/try-octadesk-modal/try-octadesk-modal.component';


@Component({
  moduleId: module.id,
  selector: 'octadesk-not-found',
  templateUrl: './not-found.html',
  providers: [TryOctadeskModalComponent]
})
export class NotFoundComponent {

  constructor(meta: Meta, titlle: Title) {
    titlle.setTitle('Erro 404 - Não conseguimos achar a página que você procurava');

  }

  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

  openTrialModal() {
    this.trialModal.open();
  }
}
