import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, LoadingController, NavController, Platform} from 'ionic-angular';
import {CameraProvider} from "../../../providers/utils/camera.provider";


@IonicPage()
@Component({
  selector: 'page-get-image',
  templateUrl: 'get-image.html',
})
export class GetImagePage {

  placeholder = 'assets/img/user.jpg';
  chosenPicture: any;

  constructor(public navCtrl: NavController,
              public actionsheetCtrl: ActionSheetController,
              public cameraProvider: CameraProvider,
              public platform: Platform,
              public loadingCtrl: LoadingController) {
  }

  changePicture() {

    const actionsheet = this.actionsheetCtrl.create({
      title: '上传图片',
      buttons: [
        {
          text: '相机',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? '安卓gallery' : 'Ios camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: '取消',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }

  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

}
