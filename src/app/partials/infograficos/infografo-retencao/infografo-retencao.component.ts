import { Component, OnInit , ViewChild} from '@angular/core';

import { FormModalComponent } from '../../modals/form-modal/form-modal.component';

@Component({
  selector: 'octadesk-infografo-retencao',
  templateUrl: './infografo-retencao.component.html',
  providers: [FormModalComponent ]
})
export class InfografoRetencaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

        openModal() {
              this.formModalComponent.open();
          }


}

