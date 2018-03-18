import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { lpRotas } from './lps-no-header-footer';
import { WindowRef } from './partials/windowRef';


@Component({
  selector: 'octadesk-app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) platformId: string,
    private router: Router,
    private windowRef: WindowRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  isHide: boolean;
  isBrowser: boolean;

  ngOnInit() {
    this.isHide = false;
    if (this.isBrowser) {
      this.abTestHandler();
      setTimeout(() => {
        if (document.querySelector('.orlando-element-close')) {
          document.querySelector('.orlando-element-close').addEventListener('click', function () { document.getElementById('om-mgu8g9g5x4p6tjmh4qyj').style.display = 'none'; });
        }
      }, 6000);

      if (lpRotas.includes(window.location.pathname)) {
        this.isHide = true;
      } else {
        this.isHide = false;
      }

      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }

        if (window.location.hash) {
          return;
        }
        window.scrollTo(0, 0);

        if (lpRotas.includes(window.location.pathname)) {
          this.isHide = true;
        } else {
          this.isHide = false;
        }
      });
    }
  }

  abTestHandler() {
    const chances = Math.random();
    const testCookieExists = this.getCookie('pricing-test');
    console.log('test: ', testCookieExists);
    if (!testCookieExists) {
      if (chances > 0.5) {
        this.createCookie('pricing-test', true, 30);
        console.log('entrou');
      } else {
        console.log('nao entrou');
        this.createCookie('pricing-test', false, 30);
      }
    }
  }

  createCookie(name, value, days) {
    let date, expires;
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toGMTString();
    } else {
      expires = '';
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  // Get Cookie
  getCookie(name) {
    if (this.isBrowser) {
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
    }
  }
}
