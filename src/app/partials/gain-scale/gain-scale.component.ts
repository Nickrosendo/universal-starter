import { Component, OnInit, Input} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'octadesk-gain-scale',
	templateUrl: './gain-scale.component.html'
})
export class GainScaleComponent implements OnInit {

	constructor() { }
	@Input('bg-Color') bgColor: String;
	@Input('titulo-header') headerTitle: String;
	@Input('titulo-header2') headerTitle2: String;
	@Input('img-alt1') imgAlt1: String;
	@Input('topic-title1') topicTitle1: String;
	@Input('topic-subtitle1') topicSubtitle1: String;
	@Input('topico1') topic1: String;
	@Input('topico2') topic2: String;
	@Input('topico3') topic3: String;
	@Input('topic-title2') topicTitle2: String;
	@Input('topic-subtitle2') topicSubtitle2: String;
	@Input('topico4') topic4: String;
	@Input('topico5') topic5: String;
	@Input('topico6') topic6: String;
	@Input('topic-title3') topicTitle3: String;
	@Input('topic-subtitle3') topicSubtitle3: String;
	@Input('topico7') topic7: String;
	@Input('topico8') topic8: String;
	@Input('topico9') topic9: String;
	@Input('topic-title4') topicTitle4: String;
	@Input('topic-subtitle4') topicSubtitle4: String;
	@Input('topico10') topic10: String;
	@Input('topico11') topic11: String;
	@Input('topico12') topic12: String;
	@Input('img-alt2') imgAlt2: String;


	ngOnInit() {
	}

  }
