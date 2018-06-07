import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import {SharedModule} from "../../app/shared.module";

@NgModule({
  declarations: [
    MessagePage,
  ],
  entryComponents: [
    MessagePage
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
    SharedModule,
  ],
})
export class MessagePageModule {}
