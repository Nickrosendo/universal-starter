import { Component, OnInit , ViewChild} from '@angular/core';

import { FormModalComponent } from '../../modals/form-modal/form-modal.component';

@Component({
  selector: 'octadesk-infografo-processos',
  templateUrl: './infografo-processos.component.html',
  providers: [ FormModalComponent ]
})
export class InfografoProcessosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

      openModal() {
            this.formModalComponent.open();
        }


}

