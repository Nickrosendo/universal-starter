import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { TryOctadeskModalComponent } from '../../partials/modals/try-octadesk-modal/try-octadesk-modal.component';
import { ModalDirective } from '../../partials/modals/modal.directive';
import { LinkService } from '../../services/LinkService.service';

@Component({
  moduleId: module.id,
  selector: 'octadesk-lp-atendimento-ao-cliente',
  templateUrl: './atendimento-ao-cliente.component.html',
  providers: [LinkService]
})
export class AtendimentoAoClienteComponent implements OnInit {
  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;


  constructor(meta: Meta, titlle: Title, linkService: LinkService) {
    titlle.setTitle('Conheça o Octadesk - Sistema de Atendimento ao cliente');
    meta.updateTag({ name: 'keywords', content: 'Atendimento ao cliente' });
    meta.updateTag({ name: 'description', content: 'Solução para atendimento ao cliente totalmente na nuvem, com integração de canais e extremamente fácil de usar. Conheça, agora, o Sistema de atendimento ao cliente ideal para sua empresa, o Octadesk! Entre em contato e faça seu teste grátis.' });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com/atendimento-ao-cliente' })
  }
  ngOnInit() { }

  openTrialModal() {
    this.trialModal.open();
  }
}
