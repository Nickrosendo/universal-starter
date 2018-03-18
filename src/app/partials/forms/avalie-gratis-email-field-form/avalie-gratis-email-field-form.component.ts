import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Http } from '@angular/http';

import { WindowRef } from '../../windowRef';
import { TryOctadeskModalComponent } from '../../modals/try-octadesk-modal/try-octadesk-modal.component';
import { UtmHiddenFieldsComponent } from '../../utm-parameters/utm-parameters.component';


interface KeyValue {
  value: String;
  label: String;
  disabled: Boolean;
}

interface StatusField {
  email: Boolean;
}

@Component({
  moduleId: module.id,
  selector: 'octadesk-avalie-form-email-field',
  templateUrl: './avalie-gratis-email-field-form.html',
  providers: [TryOctadeskModalComponent]
})
export class AvalieGratisEmailFormFieldComponent implements OnInit {

  @Input('gtm-form-id') GtmFormId: string;

  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;
  @ViewChild(UtmHiddenFieldsComponent) utmFields: UtmHiddenFieldsComponent;

  openTrialModal() {
    this.trialModal.open();
  }

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,  private windowRef: WindowRef) {
  }

  hasSuccess: StatusField = {
    email: undefined
  };

  hasDanger: StatusField = {
    email: undefined
  };

  email: String;
  emailModel: String;


  ngOnInit() {

    this.form = this.formBuilder.group({
      email: '',
      utm_source: '',
      utm_medium: '',
      utm_term: '',
      utm_content: '',
      utm_campaign: '',
      conversion_page: '',
      traffic_source: '',
      c_utmz: '',
      token_rdstation: 'a11b684a12a26ae8ba527c428c822f07',
      identificador: 'form-trial-experimente-o-octadesk-email'
    });

  }


  //
  // Set utm params
  //
  setUtmFieldValue() {

    this.form.value.utm_source = this.utmFields.utm_source;
    this.form.value.utm_medium = this.utmFields.utm_medium;
    this.form.value.utm_term = this.utmFields.utm_term;
    this.form.value.utm_content = this.utmFields.utm_content;
    this.form.value.utm_campaign = this.utmFields.utm_campaign;
    this.form.value.conversion_page = location.pathname;
    this.form.value.traffic_source = this.utmFields.traffic_source;
    this.form.value.c_utmz = this.utmFields.c_utmz;

  }


  //
  // Validação do campo "Email"
  //

  validateEmailregEx(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateEmail(elem) {
    if (elem.target.checkValidity() && this.validateEmailregEx(this.email)) {
      this.hasDanger.email = false;
      this.hasSuccess.email = true;
    } else {
      this.hasSuccess.email = false;
      this.hasDanger.email = true;
    }
  }

  onModalLeave(leave: boolean) {
    if (leave) {
      this.email = '';
    }
  }


  //
  // Submit
  //
  valid() {
    const keys = Object.keys(this.hasDanger);
    return !keys.some(key => this.hasDanger[key]);
  }
  onSubmit(event: Event) {
    event.preventDefault();
    const _this = this;
    _this.setUtmFieldValue();

    if (this.form.valid && this.valid()) {
      this.emailModel = this.email;
      this.email = '';
      this.windowRef.insertDataLayer('form-trial-experimente-o-octadesk-email');
      // this.http.post('https://www.rdstation.com.br/api/1.3/conversions', this.form.value)
      //   .subscribe(response => _this.openTrialModal());
    } else {
      const keys = Object.keys(this.hasDanger);
      keys.forEach(key => {
        if (_this.hasDanger[key] == undefined) {
          _this.hasDanger[key] = true;
        }
      });
    }
  }


}
