import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovalTodoPage } from './approval-todo';

@NgModule({
  declarations: [
    ApprovalTodoPage,
  ],
  entryComponents:[
    ApprovalTodoPage
  ],
  imports: [
    IonicPageModule.forChild(ApprovalTodoPage),
  ],
})
export class ApprovalTodoPageModule {}
