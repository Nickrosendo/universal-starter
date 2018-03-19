import { Component, OnInit, ViewChild } from '@angular/core';

import { TryOctadeskModalComponent } from '../../partials/modals/try-octadesk-modal/try-octadesk-modal.component';
import { ModalDirective } from '../../partials/modals/modal.directive';
import { Meta, Title } from '@angular/platform-browser';
import { LinkService } from '../../services/LinkService.service';

@Component({
  moduleId: module.id,
  selector: 'octadesk-lp-help-desk',
  templateUrl: './help-desk.component.html',
  providers: [LinkService]
})
export class HelpDeskComponent implements OnInit {
  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;


  constructor(meta: Meta, titlle: Title, linkService: LinkService) {
    titlle.setTitle('Conheça o Octadesk - Sistema de Help Desk');
    meta.updateTag({ name: 'keywords', content: 'Help Desk' });
    meta.updateTag({ name: 'description', content: 'O Octadesk é o melhor sistema de Help Desk online para sua empresa. Faça o gerenciamento de todos os canais de contato, tenha métricas e aumente a produtividade do seu atendimento. Conheça, agora, o sistema de Help Desk Octadesk!' });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com/help-desk' })

  }

  ngOnInit() { }

  openTrialModal() {
    this.trialModal.open();
  }
}
