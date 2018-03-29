import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  dept: any;

  dateTime = {
    startTime: "",
    endTime: ""
  };

  deptList = [
    {value: 1, label:"ERP项目组"},
    {value: 2, label:"IT运维组"},
    {value: 3, label:"APP研发组"},
    {value: 4, label:"HR组"},
  ];

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {

  }

  _submit(){
    let alert = this.alerCtrl.create({
      title: '提示消息',
      message: '提交成功!',
      buttons: ['确认']
    });
    alert.present()
  }

}
