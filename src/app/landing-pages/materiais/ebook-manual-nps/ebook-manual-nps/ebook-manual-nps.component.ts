import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-ebook-manual-nps',
  templateUrl: './ebook-manual-nps.component.html',
  providers: [ LinkService ]
})
export class EbookManualNpsComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Manual rápido do NPS - Conheça tudo sobre essa métrica");
    meta.updateTag({ name: 'keywords', content: 'NPS'});
    meta.updateTag({ name: 'description', content: 'Você já conhece a métrica de atendimento ao cliente chamada NPS (Net promoter score)? Baixe, agora, nosso eBook: "Manual rápido do NPS - A gestão de feedback do seu cliente em tempo real" e veja tudo o que você precisa saber sobre essa métrica!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/ebook-manual-nps' } )
   }

  ngOnInit() {
  }

}
