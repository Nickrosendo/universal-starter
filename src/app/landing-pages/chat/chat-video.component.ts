import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
	selector: 'video-chat',
	template: `
		<video width="100%" #videoPlayer>
			<source src="./assets/videos/lp/chat/chat.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	`
})

export class ChatVideoComponent implements OnInit {

  isBrowser: boolean;

	constructor(private element: ElementRef, @Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

	ngOnInit() {

	}

	@HostListener('window:scroll') onWindowScroll(event) {
    if(this.isBrowser) {
      if (window.scrollY > 380)
        this.element.nativeElement.children.play();
      else
        this.element.nativeElement.children.pause();
    }
	}
}
