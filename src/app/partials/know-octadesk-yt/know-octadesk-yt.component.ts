import { Component, OnInit, ViewChild} from '@angular/core';

import { YouTubeVideoModalComponent } from '../modals/youtube-video-modal/youtube-video-modal.component';

@Component({
  selector: 'octadesk-know-octadesk-yt',
  templateUrl: './know-octadesk-yt.component.html',
  providers: [ YouTubeVideoModalComponent ]
})
export class KnowOctadeskYtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(YouTubeVideoModalComponent) videoModal: YouTubeVideoModalComponent;

    openVideoModal() {
      this.videoModal.open();
    }

}
