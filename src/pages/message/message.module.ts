import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';

@NgModule({
  declarations: [
    MessagePage,
  ],
  entryComponents: [
    MessagePage
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
  ],
})
export class MessagePageModule {}
