import { Component, OnInit , ViewChild} from '@angular/core';

import { FormModalComponent } from '../../modals/form-modal/form-modal.component';

@Component({
  selector: 'octadesk-infografo-pessoas',
  templateUrl: './infografo-pessoas.component.html',
  providers: [ FormModalComponent ]
})
export class InfografoPessoasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(FormModalComponent) formModalComponent: FormModalComponent;

    downloadInfograficoModal() {
          this.formModalComponent.open();
      }

}
