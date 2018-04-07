import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {ApprovalPage} from "../approval/approval";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  modalPage = 'ModalPage';  // 使用懒加载

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  _logOut(){
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  _navToAboutUs(){
    let data = {
      message: "a coder",
      callback: data => {
        console.log(data.info);
      }
    };
    this.navCtrl.push(this.modalPage, data);
  }

  _navToApproval(){
    this.navCtrl.push(ApprovalPage);
  }

}
