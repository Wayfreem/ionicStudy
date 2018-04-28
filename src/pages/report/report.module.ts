import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    ComponentsModule,
  ],
})
export class ReportPageModule {}
