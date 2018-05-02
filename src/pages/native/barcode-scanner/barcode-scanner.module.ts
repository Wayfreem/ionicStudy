import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodeScannerPage } from './barcode-scanner';

@NgModule({
  declarations: [
    BarcodeScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodeScannerPage),
  ],
})
export class BarcodeScannerPageModule {}
