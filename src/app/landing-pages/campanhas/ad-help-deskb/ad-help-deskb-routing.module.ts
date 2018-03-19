import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdHelpDeskbComponent } from './ad-help-deskb/ad-help-deskb.component';

const dataRoute = {
	metadata: {
		title: 'Conheça o Octadesk - Sistema de help desk',
		description: 'O sistema de help desk ideal para sua empresa - Conheça agora o Octadesk',
		keywords: 'sistema de help desk'
	}};

const routes: Routes = [{
  path: 'sistema-help-desk-adb',
  component: AdHelpDeskbComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdHelpDeskbRoutingModule { }
