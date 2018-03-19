import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../../../../services/LinkService.service";

@Component({
  selector: 'app-planilha-cadastro-clientes',
  templateUrl: './planilha-cadastro-clientes.component.html',
  providers: [ LinkService ]
})
export class PlanilhaCadastroClientesComponent implements OnInit {

  constructor(meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Planilha de Cadastro de Clientes - centralize todos os dados");
    meta.updateTag({ name: 'keywords', content: 'planilha de cadastro de clientes'});
    meta.updateTag({ name: 'description', content: 'Baixe a Planilha de Cadastro de Clientes da Octadesk, a melhor alternativa de um sistema para centralizar todas as informações importantes dos seus clientes em um único lugar. Baixe, agora, nossa planilha gratuita!'});
    linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/planilha-cadastro-de-clientes' } )
   }

  ngOnInit() {
  }

}
