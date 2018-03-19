import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbookReduzirCustosComponent } from './ebook-reduzir-custos/ebook-reduzir-custos.component';

const routes: Routes = [{
  path: 'ebook-reduzir-custos-de-atendimento',
  component: EbookReduzirCustosComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbookReduzirCustosRoutingModule { }
