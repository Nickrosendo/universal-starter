import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ebook-dicas-fidelizar-clientes',
  templateUrl: './ebook-dicas-fidelizar-clientes.component.html',
  providers: [ LinkService ]
})
export class EbookDicasFidelizarClientesComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Baixe o ebook: 7 dicas infalíveis para fidelizar clientes");
    meta.updateTag({ name: 'keywords', content: 'fidelizar clientes'});
    meta.updateTag({ name: 'description', content: 'Você precisa fidelizar clientes? Então baixe, gratuitamente, o nosso eBook com 7 dicas infalíveis para você aumentar a taxa de fidelização dos seus clientes. Não esqueça de compartilhar!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/ebook-dicas-fidelizar-clientes' } )
   }

  ngOnInit() {
  }

}
