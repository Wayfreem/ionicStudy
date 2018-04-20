import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';

/**
 * Generated class for the NativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-native',
  templateUrl: 'native.html',
})
export class NativePage {

  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,) {
    this.rootPage = 'IonicNativePage';

    this.items = [
      {
        title: 'Barcode scan',
        page: 'BarcodeScannerPage'
      },
      {
        title: 'Credit card scanning',
        page: 'CreditCardScanPage'
      },
      {
        title: '从相机/画廊获取照片',
        page: 'GetImagePage'
      },
      {
        title: 'Google Maps',
        page: 'NativeGoogleMapsPage'
      },
      {
        title: 'Runtime permissions',
        page: 'RuntimePermissionsPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page).catch( (error) => {
     console.log(error);

      let toast = this.toastCtrl.create({
        message: "紧急开发中...",
        duration: 2000,
        position: "bottom"
      });

      toast.present(toast);
    });
  }

}
