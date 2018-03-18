import { Component, OnInit, Input} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'octadesk-understand',
	templateUrl: './understand.component.html'
})
export class UnderstandComponent implements OnInit {

	@Input('cor-bg') bgColorClass: String;
	@Input('cor-bg-itens') bgItensColor: String;
	@Input('title') Title: String;
	@Input('subTitle') SubTitle: String;
	@Input('tituloPrimeiroItem') titleItenOne: String;
	@Input('conteudoPrimeiroItem') contentItenOne: String;
	@Input('tituloSegundoItem') titleItenTwo: String;
	@Input('conteudoSegundoItem') contentItenTwo: String;
	@Input('tituloTerceiroItem') titleItenThree: String;
	@Input('conteudoTerceiroItem') contentItenThree: String;
	@Input('ImagemAlt1') imgAlt1: String;
	@Input('ImagemAlt2') imgAlt2: String;
	@Input('ImagemAlt3') imgAlt3: String;
	@Input('ImagemAlt4') imgAlt4: String;

	ngOnInit() {

	  }
}
