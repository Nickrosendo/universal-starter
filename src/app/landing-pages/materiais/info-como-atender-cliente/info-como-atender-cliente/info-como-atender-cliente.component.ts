import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-info-como-atender-cliente',
  templateUrl: './info-como-atender-cliente.component.html',
  providers: [ LinkService ]
})
export class InfoComoAtenderClienteComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("6 dicas de como atender um cliente bem nas redes sociais");
    meta.updateTag({ name: 'keywords', content: 'como atender um cliente'});
    meta.updateTag({ name: 'description', content: 'Em um mercado tão competitivo, saber como atender um cliente não é mais diferencial para as empresas, é essencial! Veja, nesse infográfico gratuito, como atender um cliente bem nas redes sociais. Baixe, agora!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/info-como-atender-um-cliente' } )
   }

  ngOnInit() {
  }

}
