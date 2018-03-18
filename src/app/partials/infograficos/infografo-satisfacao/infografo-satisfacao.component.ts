import { Component, OnInit, ViewChild } from '@angular/core';

import { FormModalComponent } from '../../modals/form-modal/form-modal.component';

@Component({
  selector: 'octadesk-infografo-satisfacao',
  templateUrl: './infografo-satisfacao.component.html',
  providers: [FormModalComponent]
})
export class InfografoSatisfacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

      openModal() {
            this.formModalComponent.open();
        }

}
