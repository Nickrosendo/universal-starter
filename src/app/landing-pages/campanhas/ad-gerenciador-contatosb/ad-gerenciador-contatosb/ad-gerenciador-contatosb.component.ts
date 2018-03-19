import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ad-gerenciador-contatosb',
  templateUrl: './ad-gerenciador-contatosb.component.html',
  providers: [ LinkService ]
})
export class AdGerenciadorContatosbComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Conheça o Octadesk - Sistema de gerenciador de contatos");
    meta.updateTag({ name: 'keywords', content: 'gerenciador de contatos'});
    meta.updateTag({ name: 'description', content: 'Toda empresa precisa gerenciar os contatos de maneira simples e eficiente. Conheça, agora, o Octadesk, o gerenciador de contatos ideal para sua empresa. Faça uma demonstração gratuita e sem compromisso!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/cadastro-de-clientes-adb' } )
   }

  ngOnInit() {
  }

}
