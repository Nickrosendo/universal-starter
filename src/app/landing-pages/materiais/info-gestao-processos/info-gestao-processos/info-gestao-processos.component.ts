import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-info-gestao-processos',
  templateUrl: './info-gestao-processos.component.html',
  providers: [ LinkService ]
})
export class InfoGestaoProcessosComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("6 dicas para melhorar o serviço de atendimento ao cliente!");
    meta.updateTag({ name: 'keywords', content: 'serviço de atendimento ao cliente'});
    meta.updateTag({ name: 'description', content: 'Baixe, agora, nosso infográfico e veja as 6 dicas práticas e rápidas que separamos para você melhorar, ainda hoje, o serviço de atendimento ao cliente na sua empresa. É Grátis!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/servico-de-atendimento-ao-cliente' } )
   }

  ngOnInit() {
  }

}
