import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportDemoPage } from './report-demo';

@NgModule({
  declarations: [
    ReportDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportDemoPage),
  ],
})
export class ReportDemoPageModule {}
