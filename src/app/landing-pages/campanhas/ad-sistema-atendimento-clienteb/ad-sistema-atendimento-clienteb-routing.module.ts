import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdSistemaAtendimentoClientebComponent } from './ad-sistema-atendimento-clienteb/ad-sistema-atendimento-clienteb.component';

const routes: Routes = [{
  path: 'sistema-de-atendimento-ao-cliente-adb',
  component: AdSistemaAtendimentoClientebComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdSistemaAtendimentoClientebRoutingModule { }
