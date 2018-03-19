import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ad-programa-tickets',
  templateUrl: './ad-programa-tickets.component.html',
  providers: [ LinkService ]
})
export class AdProgramaTicketsComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
  titlle.setTitle("Programa de Tickets 100% Na Nuvem - Conheça o Octadesk!");
  meta.updateTag({ name: 'keywords', content: 'Programa de Tickets'});
  meta.updateTag({ name: 'description', content: 'Gerencie, automatize e ganhe velocidade em toda sua operação! Conheça o Programa de tickets da Octadesk e veja tudo o que podemos fazer pela sua empresa. Nosso sistema é 100% online, sem necessidade de instalação. Faça uma avaliação gratuita e sem compromisso!'});
  linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/programa-de-tickets-ad' } )
}

  ngOnInit() {
  }

}
