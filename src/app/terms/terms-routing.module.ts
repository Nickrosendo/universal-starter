import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TermsComponent } from './terms.component';

const routeData = {
  metadata: {
    title: 'Termos de Uso Octadesk - Sistema de Help Desk e atendimento',
    description: 'Conheça todos os Termos de Uso do nosso sistema de help desk e atendimento ao cliente Octadesk. Veja as condições de contratação e as obrigações de todas as partes envolvidas.',
    keywords: 'Help Desk'
  }
};

const termsRoutes: Routes = [
  {
    path: 'termo-de-uso',
    component: TermsComponent,
    data: routeData
  },
  {
    path: 'company/terms',
    component: TermsComponent,
    data: routeData
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(termsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TermsRouting { }
