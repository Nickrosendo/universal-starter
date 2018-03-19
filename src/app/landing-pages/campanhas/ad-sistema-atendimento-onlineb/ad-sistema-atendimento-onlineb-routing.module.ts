import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdSistemaAtendimentoOnlinebComponent } from './ad-sistema-atendimento-onlineb/ad-sistema-atendimento-onlineb.component'

const routes: Routes = [
  {
    path: 'sistema-atendimento-online-adb',
    component: AdSistemaAtendimentoOnlinebComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdSistemaAtendimentoOnlinebRoutingModule {}
