import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../services/LinkService.service";

@Component({
  selector: 'app-ebook-erros-contabilidade',
  templateUrl: './ebook-erros-contabilidade.component.html',
  providers: [ LinkService ]
})
export class EbookErrosContabilidadeComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Octadesk - Sistema para cadastro de clientes");
    meta.updateTag({ name: 'keywords', content: 'Cadastro de clientes'});
    meta.updateTag({ name: 'description', content: 'Descubra os 7 erros mais comuns entre as empresas de contabilidade que impedem elas de ter um bom atendimento ao cliente e aprenda como contorná-los, de maneira simples e prática. Baixe, agora, o ebook gratuito!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/ebook-bom-atendimento-contabilidades' } )
   }

  ngOnInit() {
  }

}
