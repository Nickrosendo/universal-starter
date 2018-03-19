import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ad-sistema-atendimento-cliente',
  templateUrl: './ad-sistema-atendimento-cliente.component.html',
  providers: [ LinkService ]
})
export class AdSistemaAtendimentoClienteComponent implements OnInit {

  constructor( meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Conheça o Sistema de atendimento ao cliente da Octadesk");
    meta.updateTag({ name: 'keywords', content: 'Sistema de atendimento ao cliente'});
    meta.updateTag({ name: 'description', content: 'Use o Sistema de atendimento ao cliente da Octadesk para dar mais agilidade para o seu help desk e diminuir custos operacionais. Veja como podemos te ajudar, entre em contato e faça uma avaliação gratuita!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/sistema-de-atendimento-ao-cliente-ad' } )
  }

  ngOnInit() {
  }

}
