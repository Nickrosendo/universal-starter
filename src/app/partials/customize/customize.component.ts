import { Component, OnInit, Input, ViewChild} from '@angular/core';

import { TryOctadeskModalComponent } from '../modals/try-octadesk-modal/try-octadesk-modal.component';


@Component({
	moduleId: module.id,
	selector: 'octadesk-customize',
	templateUrl: './customize.component.html',
	providers: [TryOctadeskModalComponent]
})
export class CustomizeComponent implements OnInit {

	constructor() { }
	@Input('titulo') title: String;
	@Input('sub-titulo') subTitle: String;
	@Input('topico1') topicOne: String;
	@Input('topico2') topicTwo: String;
	@Input('topico3') topicThree: String;


	ngOnInit() {}


  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;

	  openTrialModal() {
		  this.trialModal.open();
	  }

  }
