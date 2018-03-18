import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpModule } from '@angular/http';

// angular bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// partials
import { PartialsModule } from './partials/partials.module';

// layout core structures
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

// lazy load routes Array
import { routes } from './lazyRoutesArray';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    NgbModule.forRoot(),
    HttpModule,
    PartialsModule,
    RouterModule.forRoot(routes),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
