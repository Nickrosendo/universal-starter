import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { PhoneValidationService } from '../../../services/PhoneValidation.service';

import { UtmHiddenFieldsComponent } from '../../utm-parameters/utm-parameters.component';
import { WindowRef } from '../../windowRef';
import { freeDomainList } from '../../freeDomainList';

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
  cargos: Boolean;
  departamentos: Boolean;
  totalEmployees: Boolean;
  formaGerenciamento: Boolean;
}

@Component({
	moduleId: module.id,
	selector: 'evaluation-form',
  templateUrl: 'evaluation-form.component.html',
  providers: [PhoneValidationService]
})
export class EvaluationFormComponent implements OnInit {

	@Input('email') Email: string;
	@Input('gtm-form-id') GtmFormIdentificator: string;
	@Input('rd-identificador') RdIdentificator: string;
	@Input('submit-text') SubmitText: string;
	@Output() onSubmitted = new EventEmitter<boolean>();
	@ViewChild(UtmHiddenFieldsComponent) utmFields: UtmHiddenFieldsComponent;

	public form: FormGroup;

	constructor(private formBuilder: FormBuilder, private http: Http, private windowRef: WindowRef, public phoneValidationService: PhoneValidationService) { }

	hasSuccess: StatusField = {
		name: undefined,
		email: undefined,
		phone: undefined,
    companySite: undefined,
    cargos: undefined,
    departamentos: undefined,
    totalEmployees: undefined,
    formaGerenciamento: undefined
	};
	hasWarning: StatusField = {
		name: undefined,
		email: undefined,
		phone: undefined,
    companySite: undefined,
    cargos: undefined,
    departamentos: undefined,
    totalEmployees: undefined,
    formaGerenciamento: undefined
	};
	hasDanger: StatusField = {
		name: undefined,
		email: undefined,
		phone: undefined,
    companySite: undefined,
    cargos: undefined,
		departamentos: undefined,
    totalEmployees: undefined,
    formaGerenciamento: undefined
	};

  cargoOptions: Array<KeyValue> = [
    { value: '', label: 'Cargo', disabled: true },
    { value: 'Sócio / CEO', label: 'Sócio / CEO', disabled: false },
    { value: 'Presidência', label: 'Presidência', disabled: false },
    { value: 'Diretor', label: 'Diretor', disabled: false },
    { value: 'Gerente', label: 'Gerente', disabled: false },
    { value: 'Coordenador', label: 'Coordenador', disabled: false },
    { value: 'Supervisor', label: 'Supervisor', disabled: false },
    { value: 'Analista', label: 'Analista', disabled: false },
    { value: 'Atendente', label: 'Atendente', disabled: false },
    { value: 'Outros cargos', label: 'Outros cargos', disabled: false },
    { value: 'Estudante/Estagiário', label: 'Estudante/Estagiário', disabled: false }
  ];

  departamentoOptions: Array<KeyValue> = [
    { value: '', label: 'Departamento', disabled: true },
    { value: 'Atendimento ao cliente', label: 'Atendimento ao cliente', disabled: false },
    { value: 'Vendas / Comercial', label: 'Vendas / Comercial', disabled: false },
    { value: 'TI / Suporte / Helpdesk', label: 'TI / Suporte / Helpdesk', disabled: false },
    { value: 'Serviço compartilhado', label: 'Serviço compartilhado', disabled: false },
    { value: 'Consultoria/serviços profissionais', label: 'Consultoria/serviços profissionais', disabled: false },
    { value: 'Instalações', label: 'Instalações', disabled: false },
    { value: 'Recursos humanos', label: 'Recursos humanos', disabled: false },
    { value: 'Compras', label: 'Compras', disabled: false },
    { value: 'Finanças/contabilidade', label: 'Finanças/contabilidade', disabled: false },
    { value: 'Marketing', label: 'Marketing', disabled: false },
    { value: 'Jurídico', label: 'Jurídico', disabled: false },
    { value: 'Outros', label: 'Outros', disabled: false }
  ];

	totalEmployeesOptions: Array<KeyValue> = [
		{ value: '', label: 'Número de Funcionários', disabled: true },
		{ value: 'de 1 a 5', label: 'de 1 a 5', disabled: false },
		{ value: 'de 6 a 10', label: 'de 6 a 10', disabled: false },
		{ value: 'de 11 a 30', label: 'de 11 a 30', disabled: false },
    { value: 'de 31 a 50', label: 'de 31 a 50', disabled: false },
    { value: 'de 51 a 100', label: 'de 51 a 100', disabled: false },
    { value: 'de 101 a 250', label: 'de 101 a 250', disabled: false },
    { value: 'de 251 a 500', label: 'de 251 a 500', disabled: false },
    { value: 'de 500 a 1000', label: 'de 500 a 1000', disabled: false },
		{ value: 'de acima de 1001', label: 'acima de 1001', disabled: false }
  ];

  formaDeGerenciamentoOptions: Array<KeyValue> = [
    { value: '', label: 'Forma de gerenciar solicitações', disabled: true },
    { value: 'Planilha', label: 'Planilha', disabled: false },
    { value: 'E-mail', label: 'E-mail', disabled: false },
    { value: 'Sistema interno', label: 'Sistema interno', disabled: false },
    { value: 'Sistema de gestão(ERP)', label: 'Sistema de gestão(ERP)', disabled: false },
    { value: 'Sistema de E-commerce (Loja virtual)', label: 'Sistema de E-commerce (Loja virtual)', disabled: false },
    { value: 'Sistema de atendimento / helpdesk (CRM)', label: 'Sistema de atendimento / helpdesk (CRM)', disabled: false },
    { value: 'Não gerenciamos os atendimentos', label: 'Não gerenciamos os atendimentos', disabled: false },

  ];

	name: any;
	email: any;
	phone: any;
  companySite: any;
  selectedCargo = this.cargoOptions[0].value;
  selectedDepartamento = this.departamentoOptions[0].value;
  selectedTotalEmployees = this.totalEmployeesOptions[0].value;
  selectedFormaGerenciamento = this.formaDeGerenciamentoOptions[0].value;


	ngOnInit() {
		this.form = this.formBuilder.group({
			nome: '',
      email: this.Email,
      telefone: '',
      siteEmpresa: '',
      'Qual é o seu cargo?': '' ,
      'Departamento': '',
			'numero-de-funcionarios': '',
			'Gerenciamento': '',
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
		this.email = this.Email;
		if (this.email != undefined) {
			this.hasSuccess.email = true;
		}

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
	// Validação do campo "Cargo"
	//
	validateCargos(elem) {
		if (elem.target.checkValidity()) {
			this.hasDanger.cargos = false;
			this.hasSuccess.cargos = true;
		} else {
			this.hasSuccess.cargos = false;
			this.hasDanger.cargos = true;
		}
  }


  //
	// Validação do campo "Departamento"
	//
	validateDepartamento(elem) {
		if (elem.target.checkValidity()) {
			this.hasDanger.departamentos = false;
			this.hasSuccess.departamentos = true;
		} else {
			this.hasSuccess.departamentos = false;
			this.hasDanger.departamentos = true;
		}
  }



	//
	// Validação do campo "Número de Funcionários"
	//
	validateTotalEmployees(elem) {
		if (elem.target.checkValidity()) {
			this.hasDanger.totalEmployees = false;
			this.hasSuccess.totalEmployees = true;
		} else {
			this.hasSuccess.totalEmployees = false;
			this.hasDanger.totalEmployees = true;
		}
	}


	//
	// Validação do campo "Forma de gerenciar solicitações"
	//
	validateFormaGerenciamento(elem) {
		if (elem.target.checkValidity()) {
			this.hasDanger.formaGerenciamento = false;
			this.hasSuccess.formaGerenciamento = true;
		} else {
			this.hasSuccess.formaGerenciamento = false;
			this.hasDanger.formaGerenciamento = true;
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
				.subscribe(response => _this.onSubmitted.emit(response.status == 200));
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
