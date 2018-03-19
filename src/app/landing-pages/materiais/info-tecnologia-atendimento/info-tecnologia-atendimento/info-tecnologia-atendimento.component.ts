import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-info-tecnologia-atendimento',
  templateUrl: './info-tecnologia-atendimento.component.html',
  providers: [ LinkService ]
})
export class InfoTecnologiaAtendimentoComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Veja como a tecnologia integra os canais de atendimento!");
    meta.updateTag({ name: 'keywords', content: 'Canais de atendimento'});
    meta.updateTag({ name: 'description', content: 'Baixe, gratuitamente, o nosso infográfico e veja como a tecnologia pode integrar os canais de atendimento, aumentar a qualidade do suporte oferecido e otimizar os processos do dia-a-dia da sua operação!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/infografico-canais-de-atendimento' } )
   }

  ngOnInit() {
  }

}
