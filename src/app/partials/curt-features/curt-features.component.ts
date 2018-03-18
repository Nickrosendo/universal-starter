import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { DataService } from './data.service';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from '../modals/modal.directive';
import { ContactConsultoresModalComponent } from '../modals/contact-consultores/contact-consultores-modal.component';

@Component({
	moduleId: module.id,
	selector: 'octadesk-curt-features',
	templateUrl: './curt-features.component.html',
	providers: [
		NgbCarousel,
		NgbCarouselConfig,
    ModalDirective,
    DataService
	]
})
export class CurtFeaturesComponent implements OnInit {

	constructor(config: NgbCarouselConfig, public dataService: DataService) {
    config.interval = 0;
	}

	menuItems: any[];
  slides: any[];
  carouselData: any[];
  ActiveSlide = 'od-HomeSlide-ticket';

	@Input('area') Area: string;
	@ViewChild(NgbCarousel) carousel: NgbCarousel;

	@ViewChild(ModalDirective) modal;
	@ViewChild(ContactConsultoresModalComponent) contactModal: ContactConsultoresModalComponent;

  open(content) {
    this.modal.open(content);
  }

	openContactModal() {
    this.contactModal.open();
  }



	ngOnInit() {
    this.carouselData = this.dataService[this.Area]();
	}

	selectMenu(slide: String) {
		return slide === this.ActiveSlide;
	}

	selectSlide(id: any) {
    this.carousel.select(id);
    this.ActiveSlide = id;
	}
}
