import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativePage } from './native';

@NgModule({
  declarations: [
    NativePage,
  ],
  imports: [
    IonicPageModule.forChild(NativePage),
  ],
})
export class NativePageModule {}
