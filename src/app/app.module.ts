import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

//angular bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

//partials
import { PartialsModule } from './partials/partials.module';

//layout core structures
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    NgbModule.forRoot(),
    PartialsModule,
    RouterModule.forRoot([
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'funcionalidades/atendimento-ao-cliente', loadChildren: './features/features.module#FeaturesModule' },
      { path: 'planos/sistema-de-chamados', loadChildren: './pricing/pricing.module#PricingModule' },
      { path: 'materiais-para-helpdesk', loadChildren: './materials/materials.module#MaterialsModule' }
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
