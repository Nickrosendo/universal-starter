import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'octadesk-success-case-dinamico',
  templateUrl: './success-case-dinamico.component.html'
})
export class SuccessCaseDinamicoComponent implements OnInit {

  @Input('titulo') Titulo: String;
  @Input('sub-titulo') SubTitulo: String;
  @Input('imagem-cliente') CompanyImg: String;
  @Input('alt-imagem') ImgAlt: String;
  @Input('titulo-biografia') CompanyBioTitle: String;
  @Input('biografia') CompanyBio: String;


  constructor() { }

  ngOnInit() {
  }

}
