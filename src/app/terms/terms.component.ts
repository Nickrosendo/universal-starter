import { Component } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../services/LinkService.service";

@Component({
    moduleId: module.id,
    selector: 'octadesk-terms',
    templateUrl: './terms.component.html',
    providers: [ LinkService ]
})
export class TermsComponent {


  constructor( meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Termos de Uso Octadesk - Sistema de Help Desk e atendimento");
    meta.updateTag({ name: 'keywords', content: 'Help Desk'});
    meta.updateTag({ name: 'description', content: 'Conheça todos os Termos de Uso do nosso sistema de help desk e atendimento ao cliente Octadesk. Veja as condições de contratação e as obrigações de todas as partes envolvidas.'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/termo-de-uso' } )
  }
 }
