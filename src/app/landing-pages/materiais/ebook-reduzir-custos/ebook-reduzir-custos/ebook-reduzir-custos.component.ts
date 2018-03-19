import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ebook-reduzir-custos',
  templateUrl: './ebook-reduzir-custos.component.html',
  providers: [ LinkService ]
})
export class EbookReduzirCustosComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("13 atitudes para reduzir custos com atendimento ao cliente");
    meta.updateTag({ name: 'keywords', content: 'Reduzir custos'});
    meta.updateTag({ name: 'description', content: 'Precisando reduzir custos com atendimento ao cliente? Veja, agora, as 13 dicas matadoras para reduzir custos com o atendimento ao cliente que separamos para você aplicar na sua empresa, ainda hoje! Baixe o eBook grátis!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/ebook-reduzir-custos-de-atendimento' } )
   }

  ngOnInit() {
  }

}
