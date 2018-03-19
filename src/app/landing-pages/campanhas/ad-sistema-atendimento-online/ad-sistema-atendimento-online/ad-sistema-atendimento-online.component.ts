import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ad-sistema-atendimento-online',
  templateUrl: './ad-sistema-atendimento-online.component.html',
  providers: [ LinkService ]
})
export class AdSistemaAtendimentoOnlineComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Conheça o Sistema de atendimento online da Octadesk");
    meta.updateTag({ name: 'keywords', content: 'Sistema de atendimento online'});
    meta.updateTag({ name: 'description', content: 'A Octadesk é um sistema de atendimento online que simplifica o atendimento ao cliente. Integre todos os seus canais de atendimento como: chat online, email, voz, redes sociais e etc em uma única plataforma. Atenda e gerencie em um só lugar. Avalie grátis!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/sistema-atendimento-online-ad' } )
  }

  ngOnInit() {
  }

}
