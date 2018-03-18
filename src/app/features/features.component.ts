import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { TryOctadeskModalComponent } from '../partials/modals/try-octadesk-modal/try-octadesk-modal.component';
import { ModalDirective } from '../partials/modals/modal.directive';
import { DoingMoreComponent } from '../partials/doing-more/doing-more.component';
import { LinkService } from '../services/LinkService.service';

@Component({
  moduleId: module.id,
  selector: 'octadesk-features',
  templateUrl: './features.component.html',
  providers: [
    TryOctadeskModalComponent,
    LinkService
  ]
})
export class FeaturesComponent implements OnInit {


  constructor(meta: Meta, titlle: Title, @Inject(PLATFORM_ID) platformId: string, linkService: LinkService) {
    this.isBrowser = isPlatformBrowser(platformId);
    titlle.setTitle('Conheça as funcionalidade do sistema de Help Desk Octadesk');
    meta.updateTag({ name: 'keywords', content: 'Atendimento ao cliente' });
    meta.updateTag({ name: 'description', content: 'Conheça as funcionalidades do Sistema de Atendimento ao Cliente e Help Desk ideal para sua empresa, o Octadesk! Veja como nosso sistema de chamados pode te ajudar. Faça uma demonstração gratuita.' });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com/funcionalidades/atendimento-ao-cliente' });
  }

  isBrowser: boolean;
  freeze = false;
  anchors: any = { 5711: 'apps-e-apis', 4683: 'gestao', 3868: 'clientes-e-agentes', 2867: 'automacoes', 2044: 'personalizacao', 947: 'chamado', 59: 'multicanal' };
  activeClass: string;
  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

  ngOnInit() {
    if (this.isBrowser) {
      if (window.location.hash) {
        this.activeClass = `${window.location.hash.replace(/\#/g, '')}`;
      } else {
        this.activeClass = 'multicanal';
      }

      for (const key in this.anchors) {
        if (window.location.hash == '#' + this.anchors[key]) {
          setTimeout(function () {
            window.scrollTo(0, parseInt(key));
          }, 0);

        }
      }
    }
  }



  openTrialModal() {
    this.trialModal.open();
  }

  goTo(location: string): void {
    if (this.isBrowser) {
      window.location.hash = location;
      this.activeClass = location;
    }
  }

  @HostListener('window:scroll') onWindowScroll(event) {
    if (this.isBrowser) {
      for (const key in this.anchors) {
        if (parseInt(key) < window.scrollY + 86) {
          this.activeClass = this.anchors[key];
        }
      }
      if (window.scrollY >= 86) {
        this.freeze = true;
      } else {
        this.freeze = false;
      }
    }
  }
}
