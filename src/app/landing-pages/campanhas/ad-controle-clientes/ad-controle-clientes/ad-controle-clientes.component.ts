import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ad-controle-clientes',
  templateUrl: './ad-controle-clientes.component.html',
  providers: [ LinkService ]
})
export class AdControleClientesComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
  titlle.setTitle("Octadesk - Sistema para cadastro de clientes");
  meta.updateTag({ name: 'keywords', content: 'Cadastro de clientes'});
  meta.updateTag({ name: 'description', content: 'A melhor maneira de controlar sua base de clientes é possuindo um software que te ajuda nessa gestão e ainda gera insights para melhorá-la! O Octadesk é um sistema de cadastro de clientes e help desk que te permite automatizar e padronizar tarefas rotineiras. Conheça agora e faça o seu teste grátis!'});
  linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/cadastro-de-clientes-ad' } )
}

ngOnInit() {
  }

}
