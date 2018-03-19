import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { TryOctadeskModalComponent } from '../../partials/modals/try-octadesk-modal/try-octadesk-modal.component';
import { ModalDirective } from '../../partials/modals/modal.directive';
import { LinkService } from '../../services/LinkService.service';

@Component({
  selector: 'octadesk-sistema-help-desk',
  templateUrl: './sistema-help-desk.component.html',
  providers: [LinkService]
})

export class SistemaHelpDeskComponent implements OnInit {
  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;
  constructor(meta: Meta, titlle: Title, linkService: LinkService) {
    titlle.setTitle('Gestão de pessoas - O pilar mais importante para um bom atendimento');
    meta.updateTag({ name: 'keywords', content: 'gestão de pessoas' });
    meta.updateTag({ name: 'description', content: 'Descubra como a felicidade da sua equipe está diretamente ligada à satisfação dos seus clientes' });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com/sistema-de-help-desk' })
  }

  ngOnInit() {
  }

  openTrialModal() {
    this.trialModal.open();
  }

}
