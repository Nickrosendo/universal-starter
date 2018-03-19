import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-kit-gestao-atendimento',
  templateUrl: './kit-gestao-atendimento.component.html',
  providers: [ LinkService ]
})
export class KitGestaoAtendimentoComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Torne sua empresa em Customer centric: Baixe o kit completo");
    meta.updateTag({ name: 'keywords', content: 'customer centric'});
    meta.updateTag({ name: 'description', content: 'A sua empresa é totalmente voltada para o cliente? Se não, deveria! Veja, nesse kit gratuito, como transformar a mentalidade e cultura da sua empresa em Customer Centric. Baixe agora!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/kit-customer-centric' } )
   }

  ngOnInit() {
  }

}
