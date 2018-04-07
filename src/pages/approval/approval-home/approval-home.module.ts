import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovalHomePage } from './approval-home';

@NgModule({
  declarations: [
    ApprovalHomePage,
  ],
  entryComponents: [
    ApprovalHomePage
  ],
  imports: [
    IonicPageModule.forChild(ApprovalHomePage),
  ],
})
export class ApprovalHomePageModule {}
