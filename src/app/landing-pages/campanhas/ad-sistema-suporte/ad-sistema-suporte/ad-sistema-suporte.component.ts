import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ad-sistema-suporte',
  templateUrl: './ad-sistema-suporte.component.html',
  providers: [ LinkService ]
})
export class AdSistemaSuporteComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Sistema de suporte e atendimento ao cliente Octadesk");
    meta.updateTag({ name: 'keywords', content: 'Sistema de suporte'});
    meta.updateTag({ name: 'description', content: 'Sistema de Suporte ao cliente Online - Octadesk. Transforme o atendimento da sua empresa e tenha clientes muito mais satisfeitos com a nossa solução de suporte baseada na nuvem. Faça sua avaliação gratuita!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/sistema-de-suporte-ad' } )
   }

  ngOnInit() {
  }

}
