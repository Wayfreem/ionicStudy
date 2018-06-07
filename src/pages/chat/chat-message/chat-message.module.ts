import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatMessagePage } from './chat-message';
import {SharedModule} from "../../../app/shared.module";

@NgModule({
  declarations: [
    ChatMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatMessagePage),
    SharedModule
  ],
})
export class ChatMessagePageModule {}
