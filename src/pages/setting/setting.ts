import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  // 使用懒加载
  modalPage = 'ModalPage';
  ApprovalPage = 'ApprovalPage';
  NativePage = 'NativePage';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  _logOut() {
    this.storage.remove("USER_INFO");

    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  _navToAboutUs() {
    let data = {
      message: "a coder",
      callback: data => {
        console.log(data.info);
      }
    };
    this.navCtrl.push(this.modalPage, data);
  }

  _navToApproval() {
    this.navCtrl.push(this.ApprovalPage);
  }

  _navToNative(){
    this.navCtrl.push(this.NativePage);
  }


}
