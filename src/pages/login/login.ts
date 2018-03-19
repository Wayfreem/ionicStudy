import { Component } from '@angular/core';
import { ModalController, ToastController} from 'ionic-angular';
import { TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public isRemember: boolean = false;
  public isShow: boolean = false;

  iconStyle: object = {'color':'#488aff','font-size':'1.4em'};

  constructor(public modalCtrl: ModalController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  _login(username: HTMLInputElement, password: HTMLInputElement){

    if (username.value.length === 0){
      this.showToast("bottom", "请输入");
      return false;
    }

    if (password.value.length === 0){
      this.showToast("bottom", "请输入密码");
      return false;
    }

    let data = {username: username.value, password: password.value, remember: this.isRemember};

    // 界面跳转
    let modal = this.modalCtrl.create(TabsPage, data);
    modal.present();
  }

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
