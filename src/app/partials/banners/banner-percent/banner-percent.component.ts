import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'octadesk-banner-percent',
  templateUrl: './banner-percent.component.html'
})
export class BannerPercentComponent implements OnInit {

  @Input('porcentagem') Percent: String;
  @Input('msg-before-negrito') BeforeBold: String;
  @Input('msg-negrito') Bold: String;
  @Input('msg-after-negrito') AfterBold: String;

  constructor() { }

  ngOnInit() {
  }

}
