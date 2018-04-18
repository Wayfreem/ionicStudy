import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetImagePage } from './get-image';

@NgModule({
  declarations: [
    GetImagePage,
  ],
  imports: [
    IonicPageModule.forChild(GetImagePage),
  ],
})
export class GetImagePageModule {}
