import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";
import { WindowRef } from '../../../../partials/windowRef';

@Component({
  selector: 'app-ad-help-desk',
  templateUrl: './ad-help-desk.component.html',
  providers: [ LinkService ]
})
export class AdHelpDeskComponent implements OnInit {
  isBrowser: boolean;
  constructor( meta: Meta , titlle: Title, private windowRef: WindowRef, linkService: LinkService) {
    titlle.setTitle("Conheça o Sistema de Help Desk da Octadesk!");
    meta.updateTag({ name: 'keywords', content: 'Sistema de help desk'});
    meta.updateTag({ name: 'description', content: 'O Octadesk é o melhor sistema de Help Desk online, Atendimento ao Cliente, e Gestão de chamados para empresas. Atenda os clientes internos, externos, fornecedores e CSC. Rápido, fácil e eficaz. Faça a sua Avaliação Gratuita!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/sistema-help-desk-ad' } )
  }

  ngOnInit() {
  }

}
