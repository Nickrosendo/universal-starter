import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ebook-dez-mandamentos',
  templateUrl: './ebook-dez-mandamentos.component.html',
  providers: [ LinkService ]
})
export class EbookDezMandamentosComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("10 mandamentos para aumentar a qualidade de atendimento");
    meta.updateTag({ name: 'keywords', content: 'qualidade de atendimento'});
    meta.updateTag({ name: 'description', content: 'Aumente, ainda hoje, a qualidade de atendimento da sua empresa com as 10 dicas que separamos para você. São dicas práticas e fáceis de serem aplicadas. Baixe, gratuitamente, o nosso ebook!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/mandamentos-qualidade-de-atendimento' } )
   }

  ngOnInit() {
  }

}
