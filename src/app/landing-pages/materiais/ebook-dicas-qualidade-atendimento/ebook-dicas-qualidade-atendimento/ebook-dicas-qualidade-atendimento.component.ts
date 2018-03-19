import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ebook-dicas-qualidade-atendimento',
  templateUrl: './ebook-dicas-qualidade-atendimento.component.html',
  providers: [ LinkService ]
})
export class EbookDicasQualidadeAtendimentoComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("17 dicas para aumentar a qualidade no atendimento ao cliente");
    meta.updateTag({ name: 'keywords', content: 'Cadastro de clientes'});
    meta.updateTag({ name: 'description', content: 'Seus clientes estão insatisfeitos com o atendimento ao cliente da sua empresa? Então baixe, agora, o nosso eBook gratuito com 17 dicas para você aumentar a qualidade no atendimento ao cliente da sua empresa!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/ebook-qualidade-no-atendimento-ao-cliente' } )
   }

  ngOnInit() {
  }

}
