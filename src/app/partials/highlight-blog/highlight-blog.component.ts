import { Component, Input, ViewChild } from '@angular/core';

import { DataService } from '../curt-features/data.service';
import { Observable } from 'rxjs/Rx';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
	moduleId: module.id,
	selector: 'highlight-blog',
	templateUrl: './highlight-blog.component.html',
	providers: [
		NgbCarousel,
		NgbCarouselConfig
	]
})
export class HighLightBlogComponent {
	@ViewChild(NgbCarousel) carousel: NgbCarousel;

	constructor(config: NgbCarouselConfig) {
		config.interval = 0;
	}

}
