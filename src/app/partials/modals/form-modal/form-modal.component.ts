import { Component, Input, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { ModalDirective } from '../../modals/modal.directive';
import { YouTubeVideoModalComponent } from '../../modals/youtube-video-modal/youtube-video-modal.component';

@Component({
  selector: 'octadesk-form-modal',
  templateUrl: './form-modal.component.html',
  providers: [ModalDirective, YouTubeVideoModalComponent]
})
export class FormModalComponent implements OnInit {

  @Input('gtm-form-id') GtmFormId: string;
  @Input('rd-identificator') RdIdentificator: string;
  @Input('material-url') MaterialUrl: string;
  @Input('modal-title') ModalTitle: string;
  @Input('modal-submit-text') ModalSubmitText: string;
	@ViewChild(ModalDirective) private modal;
  @ViewChild('modalTemplate') private template;
  @ViewChild('YouTubeVideoModal') public videotemplate;
  @ViewChild(YouTubeVideoModalComponent) videoModal: YouTubeVideoModalComponent;

  SafeUrlVideo: any;

  constructor( private sanitizer: DomSanitizer ) { }

  ngOnInit() {
  }

  public open() {
		this.modal.open(this.template);
	}

	onSubmitted(submmited: boolean) {
		if (submmited) {
      this.modal.close();
      if (this.MaterialUrl !== undefined) {
        window.open(this.MaterialUrl);
      } else {
        this.SafeUrlVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bIxRpZSq53g?autoplay=1');
        this.modal.open(this.videotemplate);
      }
		}
	}

}
