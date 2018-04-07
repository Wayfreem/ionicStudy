import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovalPage } from './approval';
import {ApprovalHomePageModule} from "./approval-home/approval-home.module";
import {ApprovalTodoPageModule} from "./approval-todo/approval-todo.module";

@NgModule({
  declarations: [
    ApprovalPage,
  ],
  imports: [
    // 子模块
    ApprovalHomePageModule,
    ApprovalTodoPageModule,

    IonicPageModule.forChild(ApprovalPage),
  ],
})
export class ApprovalPageModule {}
