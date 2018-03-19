import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-webinar-octadesk',
  templateUrl: './webinar-octadesk.component.html',
  providers: [ LinkService ]
})
export class WebinarOctadeskComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Webinar - Conheça tudo sobre o sistema de chamados Octadesk");
    meta.updateTag({ name: 'keywords', content: 'Sistema de chamados'});
    meta.updateTag({ name: 'description', content: 'O Webinar sobre o sistema de chamados da Octadesk foi dividido em duas etapas, uma focada na utilização prática e outra nas configurações para os administradores. Assista agora e veja como o nosso Sistema de chamados poderá ajudar a sua empresa!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/webinar-sistema-de-chamados' } )
   }

  ngOnInit() {
  }

}
