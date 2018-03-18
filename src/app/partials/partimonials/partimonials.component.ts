import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'octadesk-partimonials',
  templateUrl: './partimonials.component.html'
})
export class PartimonialsComponent implements OnInit {

  constructor() { }
  @Input('texto-citacao') quoteText: String;
  @Input('pessoa-thumb-url') personImg: String;
  @Input('pessoa-img-alt') personImgAlt: String;
  @Input('pessoa-nome') personName: String;
  @Input('pessoa-cargo') personJob: String;
  @Input('empresa1-thumb-url') company1Img: String;
  @Input('empresa1-img-alt') company1ImgAlt: String;
  @Input('empresa2-thumb-url') company2Img: String;
  @Input('empresa2-img-alt') company2ImgAlt: String;
  @Input('empresa3-thumb-url') company3Img: String;
  @Input('empresa3-img-alt') company3ImgAlt: String;


  ngOnInit() {
  }

}
