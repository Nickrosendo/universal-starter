import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ad-sistema-chamados',
  templateUrl: './ad-sistema-chamados.component.html',
  providers: [ LinkService ]
})
export class AdSistemaChamadosComponent implements OnInit {

  constructor( meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Conheça o Sistema de chamados da Octadesk - 100% na nuvem");
    meta.updateTag({ name: 'keywords', content: 'Sistema de chamados'});
    meta.updateTag({ name: 'description', content: 'O Melhor e Mais Completo Sistema de Chamados do mercado para sua Empresa. Totalmente online. Acompanhe, avalie e priorize os chamados da sua empresa. Faça, agora, uma Avaliação gratuita.'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/sistema-de-chamados-ad' } )
  }

  ngOnInit() {
  }

}
