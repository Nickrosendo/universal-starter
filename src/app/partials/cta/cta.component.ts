import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'octadesk-cta',
  templateUrl: './cta.component.html'
})
export class CtaComponent implements OnInit {

  @Input('classe') Classe: String;
  @Input('texto') Texto: String;
  @Input('texto-btn') TextoBtn: String;

  constructor() { }

  ngOnInit() {
  }

}
