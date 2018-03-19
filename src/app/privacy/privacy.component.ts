import { Component } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../services/LinkService.service";

@Component({
    moduleId: module.id,
    selector: 'octadesk-privacy',
    templateUrl: './privacy.component.html',
    providers: [ LinkService ]
})
export class PrivacyComponent {

  constructor( meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Politica de Privacidade Octadesk - Sistema de Help Desk");
    meta.updateTag({ name: 'keywords', content: 'Help Desk'});
    meta.updateTag({ name: 'description', content: 'Conheça toda a politica de privacidade d Sistema de Help desk e atendimento ao cliente da Octadesk, entenda como protegemos e mantemos seguras as suas informações!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/politica-de-privacidade' } )
  }
 }
