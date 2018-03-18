import { Component, OnInit, ViewChild } from '@angular/core';

import { FormModalComponent } from '../../modals/form-modal/form-modal.component';
@Component({
  selector: 'octadesk-ebook-jornada',
  templateUrl: './ebook-jornada.component.html',
  providers: [FormModalComponent]
})
export class EbookJornadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

    downloadEbookModal() {
      this.formModalComponent.open();
    }
}
