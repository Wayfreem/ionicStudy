import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesRankPage } from './sales-rank';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    SalesRankPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesRankPage),
    ComponentsModule,
  ],
})
export class SalesRankPageModule {}
