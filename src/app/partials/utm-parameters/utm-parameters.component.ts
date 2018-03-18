import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'utm-hidden-fields',
  template: `
  <input [(ngModel)]="utm_source" id="utm_source" name="utm_source" type="hidden" />
  <input [(ngModel)]="utm_medium" id="utm_medium"  name="utm_medium" type="hidden"/>
  <input [(ngModel)]="utm_term" id="utm_term"  name="utm_term" type="hidden"/>
  <input [(ngModel)]="utm_content" id="utm_content" name="utm_content" type="hidden"/>
  <input [(ngModel)]="utm_campaign" id="utm_campaign" name="utm_campaign" type="hidden"/>
  <input [(ngModel)]="traffic_source" id="traffic_source" name="traffic_source" type="hidden"/>
  <input [(ngModel)]="c_utmz" id="c_utmz" name="c_utmz" type="hidden"/>
  `
})

export class UtmHiddenFieldsComponent implements OnInit {

  constructor( @Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  isBrowser: boolean;
  utm_source: any;
  utm_medium: any;
  utm_term: any;
  utm_content: any;
  utm_campaign: any;
  conversion_page: any;
  traffic_source: any;
  c_utmz: any;

  ngOnInit() {
    //Source
    this.checkUTM(this.parameter().utm_source, 'utm_source');
    //Medium
    this.checkUTM(this.parameter().utm_medium, 'utm_medium');
    //Terms
    this.checkUTM(this.parameter().utm_term, 'utm_term');
    //Content
    this.checkUTM(this.parameter().utm_content, 'utm_content');
    //Campaign
    this.checkUTM(this.parameter().utm_campaign, 'utm_campaign');
    //traffic_source
    if (this.getCookie('__trf.src') != null) {
      this.traffic_source = this.getCookie('__trf.src');
    }
    //c_utmz
    if (this.getCookie('__utmz') != null) {
      this.c_utmz = this.getCookie('__utmz');
    }

  }

  // Parse the URL
  getParameterByName(name) {
    if (this.isBrowser) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      const regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
  }

  // Set Parameters
  parameter() {
    return {
      utm_source: this.getParameterByName('utm_source'),
      utm_medium: this.getParameterByName('utm_medium'),
      utm_term: this.getParameterByName('utm_term'),
      utm_content: this.getParameterByName('utm_content'),
      utm_campaign: this.getParameterByName('utm_campaign'),
    };
  }


  // utmcsr = utm_source
  // utmccn = utm_campaign
  // utmcmd = utm_medium
  // utmctr = utm_term
  // utmcct = utm_content
  //
  parseUTMZ(utm) {
    switch (utm) {
      case 'utm_source':
        utm = 'utmcsr';
        break;
      case 'utm_campaign':
        utm = 'utmccn';
        break;
      case 'utm_medium':
        utm = 'utmcmd';
        break;
      case 'utm_term':
        utm = 'utmctr';
        break;
      case 'utm_content':
        utm = 'utmcct';
        break;
    }
    const cookie = this.getCookie('__utmz');
    if (cookie) {
      const allUTM = cookie.split(utm + '=');
      if (allUTM.length == 2) {
        return allUTM.pop().split('|').shift().replace(/\(|\)/g, '');
      }

    }

  }

  // Get Cookie
  getCookie(name) {
    if (this.isBrowser) {
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length == 2) {
        return parts.pop().split(';').shift();
      }
    }
  }

  // Set Cookie
  setCookie(name, value) { if (this.isBrowser) { document.cookie = name + '=' + value + ';path=/'; } }

  //Checks if the parameter exists
  checkUTM(param, field) {
    if (param) {
      this.setCookie(field, param);
      this[field] = param;
    } else {
      if (this.getCookie(field) != null && this.getCookie(field) != '' && this.getCookie(field) != 'n/a' && this.getCookie(field) != undefined) {
        this[field] = this.getCookie(field);
      } else {
        if (this.parseUTMZ(field)) {
          if (field == 'utm_term' && this.parseUTMZ('utm_campaign') == 'not%20provided') {
            this[field] = 'n/a';
          } else {
            this[field] = this.parseUTMZ(field);
          }
          if (field == 'utm_campaign' && this.parseUTMZ('utm_campaign') == 'direct') {
            this[field] = 'n/a';
          } else {
            this[field] = this.parseUTMZ(field);
          }
        } else {
          this[field] = 'n/a';
        }
      }
    }

    return field;
  }


}
