import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-info-mkt-retencao',
  templateUrl: './info-mkt-retencao.component.html',
  providers: [ LinkService ]
})
export class InfoMktRetencaoComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Dicas sobre Fidelização de clientes e marketing de retenção");
    meta.updateTag({ name: 'keywords', content: 'marketing de retenção, fidelização de clientes'});
    meta.updateTag({ name: 'description', content: 'A sua empresa ainda não investe na fidelização de clientes e em marketing de retenção? Então baixe, agora, o nosso infográfico completo e saiba tudo sobre Fidelização de clientes e marketing de retenção. Download gratuito!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/infografico-fidelizacao-clientes' } )
   }

  ngOnInit() {
  }

}
