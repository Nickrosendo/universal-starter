import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'octadesk-channels',
    templateUrl: './channels.component.html'
})
export class Channels {

  @Input('color') Color: String;
  @Input('classe') Style: String;
  @Input('titulo-email') TituloEmail: String;
  @Input('conteudo-email') ConteudoEmail: String;
  @Input('titulo-chat') TituloChat: String;
  @Input('conteudo-chat') ConteudoChat: String;
  @Input('titulo-central-ajuda') TituloCentralAjuda: String;
  @Input('conteudo-central-ajuda') ConteudoCentralAjuda: String;
  @Input('titulo-base-conhecimento') TituloBaseConhecimento: String;
  @Input('conteudo-base-conhecimento') ConteudoBaseConhecimento: String;
  @Input('titulo-telefone') TituloTelefone: String;
  @Input('conteudo-telefone') ConteudoTelefone: String;
  @Input('titulo-facebook') TituloFacebook: String;
  @Input('conteudo-facebook') ConteudoFacebook: String;
  @Input('titulo-form-contato') TituloFormContato: String;
  @Input('conteudo-form-contato') ConteudoFormContato: String;

}
