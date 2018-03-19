import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import { ChatVideoComponent } from './chat-video.component';
import { PartialsModule } from '../../partials/partials.module';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule.forChild([
      { path: '', component: ChatComponent, pathMatch: 'full' }
    ]),
  ],
  declarations: [
    ChatComponent,
    ChatVideoComponent
  ]
})

export class ChatModule { }
