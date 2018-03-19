import { Component, OnInit, ViewChild } from '@angular/core';

import { TryOctadeskModalComponent } from '../../partials/modals/try-octadesk-modal/try-octadesk-modal.component';
import { ModalDirective } from '../../partials/modals/modal.directive';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../services/LinkService.service";

@Component({
	moduleId: module.id,
    selector: 'octadesk-lp-sistema-de-chamados',
    templateUrl: './sistema-de-chamados.component.html',
    providers: [ LinkService ]
})
export class SistemaDeChamadosComponent implements OnInit {
	@ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

  constructor( meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Sistema De Chamados Octadesk - Melhore o Fluxo de Atendimento");
    meta.updateTag({ name: 'keywords', content: 'Sistema de chamados'});
    meta.updateTag({ name: 'description', content: 'Conheça o Sistema de Chamados na nuvem da Octadesk para sua Empresa. Acompanhe, avalie, priorize e controle os chamados da sua empresa. Tenha métricas e melhore a gestão dos chamados. Avaliação gratuita e sem compromisso, experimente agora!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/sistema-de-chamados' } )

  }


	ngOnInit() { }

	openTrialModal() {
        this.trialModal.open();
    }
}
