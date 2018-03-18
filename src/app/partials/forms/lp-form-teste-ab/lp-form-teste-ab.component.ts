
import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { PhoneValidationService } from '../../../services/PhoneValidation.service';

import { UtmHiddenFieldsComponent } from '../../utm-parameters/utm-parameters.component';
import { WindowRef } from '../../windowRef';
import { freeDomainList } from '../../freeDomainList';
import { SuccessGoToFeaturesComponent } from '../../modals/success-go-to-features/success-go-to-features.component';

interface KeyValue {
	value: String;
	label: String;
	disabled: Boolean;
}

interface StatusField {
	name: Boolean;
	email: Boolean;
	phone: Boolean;
  companySite: Boolean;
}

@Component({
  selector: 'octadesk-lp-form-teste-ab',
  templateUrl: './lp-form-teste-ab.component.html',
  providers: [ PhoneValidationService ]
})

export class LpFormTesteAbComponent implements OnInit {


	@Input('gtm-form-id') GtmFormIdentificator: string;
	@Input('rd-identificador') RdIdentificator: string;
	@Input('submit-text') SubmitText: string;
  @ViewChild(UtmHiddenFieldsComponent) utmFields: UtmHiddenFieldsComponent;
  @ViewChild(SuccessGoToFeaturesComponent) successModal: SuccessGoToFeaturesComponent;

  openSuccessModal() {
    this.successModal.open();
  }

	public form: FormGroup;

	constructor(private formBuilder: FormBuilder, private http: Http, private windowRef: WindowRef, public phoneValidationService: PhoneValidationService) { }

	hasSuccess: StatusField = {
		name: undefined,
		email: undefined,
		phone: undefined,
    companySite: undefined
	};
	hasWarning: StatusField = {
		name: undefined,
		email: undefined,
		phone: undefined,
    companySite: undefined
	};
	hasDanger: StatusField = {
		name: undefined,
		email: undefined,
		phone: undefined,
    companySite: undefined
	};

	name: any;
	email: any;
	phone: any;
  companySite: any;

	ngOnInit() {
		this.form = this.formBuilder.group({
			nome: '',
      email: '',
      telefone: '',
      siteEmpresa: '',
			utm_source: '',
			utm_medium: '',
			utm_term: '',
			utm_content: '',
			utm_campaign: '',
			conversion_page: '',
      traffic_source: '',
      c_utmz: '',
			token_rdstation: 'a11b684a12a26ae8ba527c428c822f07',
			identificador: this.RdIdentificator
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
	// Validação do campo "Nome"
	//
	validateName(elem) {
		if (elem.target.checkValidity()) {
			this.hasDanger.name = false;
			this.hasSuccess.name = true;
		} else {
			this.hasSuccess.name = false;
			this.hasDanger.name = true;
		}
	}

	//
	// Validação do campo "Email"
	//

	validateEmailregEx(email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	validateEmail(elem) {
		if (this.validateFreeDomainsList(this.email)) {
			this.hasDanger.email = false;
			this.hasSuccess.email = false;
			this.hasWarning.email = true;
		} else if (elem.target.checkValidity() && this.validateEmailregEx(this.email)) {
			this.hasDanger.email = false;
			this.hasWarning.email = false;
			this.hasSuccess.email = true;
		} else {
			this.hasSuccess.email = false;
			this.hasWarning.email = false;
			this.hasDanger.email = true;
		}
	}

	//
	// Validação do campo "Telefone"
	//

	onlyNumbers() {
		let number = '';
		if (this.phone) {
			for (let i = 0; i < this.phone.length; i++) {
				if (this.phone[i] != ' ' && !isNaN(this.phone[i])) {
					number += this.phone[i].toString();
				}
			}
		}
		return {
			areaCode: number.substring(0, 2),
			phoneNumber: number.substring(2, number.length)
		};
	}

	validatePhone() {
		const phone = `${this.onlyNumbers().areaCode}-${this.onlyNumbers().phoneNumber}`;
    this.phoneValidationService.validateNumber(phone)
      .toPromise()
      .then((res) => {
        if (res.ok)  {
            this.hasDanger.phone = false;
            this.hasSuccess.phone = true;
        }
      }, (error) => {
        this.hasDanger.phone = true;
        this.hasSuccess.phone = false;
      });
	}

	removeMask(value) {
		let mask = '';
		for (let i = 0; i < value.length; i++) {
			if (value[i] != ' ' && !isNaN(value[i])) {
				mask += value[i].toString();
			}
		}
		return mask;
	}

	applyMask(value) {
		let mask = '';
		value = this.removeMask(value);
		if (value.length > 10) {
			mask = '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) + '-' + value.substring(7, value.length);
		}
		return mask;
	}

	//
	// Validação do campo "Site da Empresa"
  //
  validateURL(url) {
    const regEx = /^((https?):\/\/)?(([w|W]{3}\.)?)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    return regEx.test(url);
  }

	validateCompany(elem) {

		if (elem.target.checkValidity() && this.validateURL(this.companySite)) {
			this.hasDanger.companySite = false;
			this.hasSuccess.companySite = true;
		} else {
			this.hasSuccess.companySite = false;
			this.hasDanger.companySite = true;
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

			this.windowRef.insertDataLayer(this.GtmFormIdentificator);
      this.http.post('https://www.rdstation.com.br/api/1.3/conversions', this.form.value)
      .subscribe(response => _this.openSuccessModal());

		} else {
			const keys = Object.keys(this.hasDanger);
			keys.forEach(key => {
				if (_this.hasDanger[key] == undefined) {
					_this.hasDanger[key] = true;
				}
			});
		}
	}

	//
	// Lista de domínios
	//
	validateFreeDomainsList(value) {
		let hasDomain = false;
		const emailAddress = value;
		freeDomainList.forEach(function (domain) {
			if (emailAddress && emailAddress.indexOf(domain) != -1) {
				hasDomain = true;
			}
		});
		return hasDomain;
	}

}

