import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LinkService } from '../services/LinkService.service';
import { WindowRef } from '../partials/windowRef';

@Component({
  moduleId: module.id,
  selector: 'octadesk-princing',
  templateUrl: './pricing.component.html',
  providers: [LinkService]
})
export class PricingComponent {


  constructor(meta: Meta, titlle: Title, linkService: LinkService, private windowRef: WindowRef) {
    titlle.setTitle('Conheça todos os planos do Sistema de Chamados Octadesk');
    meta.updateTag({ name: 'keywords', content: 'Sistema de chamados' });
    meta.updateTag({ name: 'description', content: 'Conheça todos os planos do nosso Sistema de Chamados e Atendimento ao Cliente e veja qual atende melhor as suas necessidades. Peça uma avaliação gratuita e descubra como podemos ajudar sua empresa!' });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com/planos/sistema-de-chamados' });
    // this.windowRef.insertDataLayerEvent('optimize-activate');
  }

}
