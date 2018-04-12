import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovalPage } from './approval';

@NgModule({
  declarations: [
    ApprovalPage,
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(ApprovalPage),
  ],
})
export class ApprovalPageModule {}
