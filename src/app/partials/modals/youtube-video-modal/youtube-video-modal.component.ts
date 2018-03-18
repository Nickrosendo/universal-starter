import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { ModalDirective } from '../../modals/modal.directive';

@Component({
	moduleId: module.id,
	selector: 'youtube-video-modal',
	templateUrl: './youtube-video-modal.component.html',
	providers: [ModalDirective]
})
export class YouTubeVideoModalComponent implements OnInit {

	@Input('url-video') UrlVideo: any;
	@ViewChild(ModalDirective) private modal;
	@ViewChild('YouTubeVideoModal') public template;

	constructor(private sanitizer: DomSanitizer) { }

	SafeUrlVideo: any;

	ngOnInit() {
		this.SafeUrlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.UrlVideo);
	}

	public open() {
		this.modal.open(this.template);
	}

	success: boolean;
	onSubmitted(submmited: boolean) {
		if (submmited) {
			this.success = true;
		}
	}
}
