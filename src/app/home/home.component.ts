declare const Typed: any;

import { Component, OnInit, ViewChild } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Meta, Title } from '@angular/platform-browser';

import { LinkService } from '../services/LinkService.service';


@Component({
  moduleId: module.id,
  selector: 'octadesk-home',
  templateUrl: './home.component.html',
  providers: [LinkService]
})
export class HomeComponent implements OnInit {

  isBrowser: boolean;

  constructor(meta: Meta, titlle: Title, @Inject(PLATFORM_ID) platformId: string, linkService: LinkService) {
    this.isBrowser = isPlatformBrowser(platformId);
    titlle.setTitle('Help Desk e sistema de atendimento ao cliente Octadesk');
    meta.updateTag({ name: 'keywords', content: 'Help Desk' });
    meta.updateTag({ name: 'description', content: 'Sistema de Help Desk e Atendimento ao cliente. Conheça nosso sistema de chamados na nuvem para prestar suporte ao cliente. Entre em contato agora e faça uma avaliação gratuita!' });
    linkService.addTag({ rel: 'canonical', href: 'https://www.octadesk.com' });
  }


  ngOnInit() {
    // if(this.isBrowser) {
    //   var typed = new Typed('#typed', {
    //     strings: ["atender os seus clientes", "melhorar e monitorar seus serviços", "elevar a satisfação dos seus clientes", "aumentar suas vendas"],
    //     smartBackspace: true,
    //     typeSpeed: 25,
    //     backSpeed: 25,
    //     backDelay: 2000,
    //     loop: true
    //   });
    // }
  }

}
