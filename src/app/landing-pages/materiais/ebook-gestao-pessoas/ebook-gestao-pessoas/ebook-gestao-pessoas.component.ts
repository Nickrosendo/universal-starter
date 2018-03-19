import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ebook-gestao-pessoas',
  templateUrl: './ebook-gestao-pessoas.component.html',
  providers: [ LinkService ]
})
export class EbookGestaoPessoasComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("O pilar mais importante para um bom atendimento ao cliente");
    meta.updateTag({ name: 'keywords', content: 'Bom atendimento ao cliente'});
    meta.updateTag({ name: 'description', content: 'Baixe, agora, nosso kit de  eBook + Infográfico desenvolvidos em parceria a Gama Academy: Gestão de pessoas - o pilar mais importante para um bom atendimento ao cliente - Download grátis!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/bom-atendimento-ao-cliente' } )
   }


  ngOnInit() {
  }

}
