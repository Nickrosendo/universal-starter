import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ebook-jornada-cliente',
  templateUrl: './ebook-jornada-cliente.component.html',
  providers: [ LinkService ]
})
export class EbookJornadaClienteComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Sucesso na Jornada do cliente: da pré-vendas ao pós-vendas");
    meta.updateTag({ name: 'keywords', content: 'Jornada do Cliente'});
    meta.updateTag({ name: 'description', content: 'Baixe, gratuitamente, nosso ebook e aprenda a mapear toda a jornada do cliente da sua empresa. Tenha sucesso do pré-vendas ao pós-vendas. Baixe, agora, o nosso eBook completo!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/ebook-jornada-do-cliente' } )
   }

  ngOnInit() {
  }

}
