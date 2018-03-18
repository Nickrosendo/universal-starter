import { Component, Input	} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'octadesk-multi-channel',
	templateUrl: './multi-channel.component.html'
})
export class MultiChannelComponent {

  @Input('bg-color-class') bgColorClass: String;
  @Input('titulo') Titulo: String;
  @Input('sub-titulo') SubTitulo: String;
  //Email
  @Input('titulo-email') TituloEmail: String;
  @Input('conteudo-email') ConteudoEmail: String;
  @Input('alt-email') AltEmail: String;
  //Chat
  @Input('titulo-chat') TituloChat: String;
  @Input('conteudo-chat') ConteudoChat: String;
  @Input('alt-chat') AltChat: String;
  //Central de Ajuda
  @Input('titulo-central-ajuda') TituloCentralAjuda: String;
  @Input('conteudo-central-ajuda') ConteudoCentralAjuda: String;
  @Input('alt-central-ajuda') AltCentralAjuda: String;
  //Base Conhecimento
  @Input('titulo-base-conhecimento') TituloBaseConhecimento: String;
  @Input('conteudo-base-conhecimento') ConteudoBaseConhecimento: String;
  @Input('alt-base-conhecimento') AltBaseConhecimento: String;
  //Telefone
  @Input('titulo-telefone') TituloTelefone: String;
  @Input('conteudo-telefone') ConteudoTelefone: String;
  @Input('alt-telefone') AltTelefone: String;
  //Facebook
  @Input('titulo-facebook') TituloFacebook: String;
  @Input('conteudo-facebook') ConteudoFacebook: String;
  @Input('alt-facebook') AltFacebook: String;
  //Formulario de Contato
  @Input('titulo-form-contato') TituloFormContato: String;
  @Input('conteudo-form-contato') ConteudoFormContato: String;
  @Input('alt-form-contato') AltFormContato: String;

}
