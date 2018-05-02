import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
/*import {BarcodeScanner} from "@ionic-native/barcode-scanner";*/

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  public barcodeData;

  constructor(public navCtrl: NavController,
             /* public barcodeScanner: BarcodeScanner,*/
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  scan() {
    // 设置参数
    const options = {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      prompt: '在扫描区域内放置条形码', // Android
      // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
      // Android only (portrait|landscape), default unset so it rotates with the device
      orientation: 'portrait',
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS
    };

    /*this.barcodeScanner
      .scan(options)
      .then((data) => {
        this.barcodeData = data;
        const alert = this.alertCtrl.create({
          title: '扫描结果',
          subTitle: data.text,
          buttons: ['确定']
        });
        alert.present();
      })
      .catch((err) => {
        const alert = this.alertCtrl.create({
          title: '注意!',
          subTitle: err,
          buttons: ['关闭']
        });
        alert.present();
      });*/
  }

}
