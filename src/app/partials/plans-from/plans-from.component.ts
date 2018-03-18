import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'octadesk-plans-from',
    templateUrl: './plans-from.component.html'
})
export class PlansFromComponent {
  @Input('texto') Texto: String;
  @Input('texto-botao') TextoBtn: String;
}
