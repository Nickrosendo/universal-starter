import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from '../../modals/modal.directive';

@Component({
  selector: 'octadesk-success-go-to-features',
  templateUrl: './success-go-to-features.component.html',
  providers: [ ModalDirective ]
})
export class SuccessGoToFeaturesComponent implements OnInit {

  @ViewChild(ModalDirective) private modal;
  @ViewChild('goToFeaturesModal') private template;

  constructor() { }

  ngOnInit() {
  }

  public open() {
		return this.modal.open(this.template);
	}

	public close() {
		this.modal.close();
	}


}
