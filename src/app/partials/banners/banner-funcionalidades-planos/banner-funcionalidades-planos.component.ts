import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'octadesk-banner-funcionalidades-planos',
  templateUrl: './banner-funcionalidades-planos.component.html'
})
export class BannerFuncionalidadesPlanosComponent implements OnInit {

  @Input('titulo-esquerda') TitleLeft: String;
  @Input('titulo-btn-esquerda') TitleBtnLeft: String;
  @Input('titulo-direita') TitleRight: String;
  @Input('titulo-btn-direita') TitleBtnRight: String;


  constructor() { }

  ngOnInit() {
  }

}
