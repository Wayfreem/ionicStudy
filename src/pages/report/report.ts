import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  items = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
    this.items = this.getItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  openPage(event, item) {
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

  getItems(){
    return [
      {
        name: "销售类",
        data: [
          {
            src: "assets/img/contact/common-01.png",
            title:"图标例子界面",
            page:"ReportDemoPage"
          },
          {
            src: "assets/img/contact/common-01.png",
            title:"销售排名",
            page:"SalesRankPage"
          },
          {
            src: "assets/img/contact/common-01.png",
            title:"个人车险销售",
            page:""
          },
          {
            src: "assets/img/contact/common-01.png",
            title:"门店车险销售",
            page:""
          },
          {
            src: "assets/img/contact/common-01.png",
            title:"门店服务销售",
            page:""
          },
        ]
      },
      {
        name: "时效类",
        data: [
          {
            src: "assets/img/contact/common-01.png",
            title:"到店未报价",
            page:""
          },
          {
            src: "assets/img/contact/common-01.png",
            title:"报案超时",
            page:""
          },
          {
            src: "assets/img/contact/common-01.png",
            title:"服务方案超时",
            page:""
          },
          {
            src: "assets/img/contact/common-01.png",
            title:"定损超时",
            page:""
          },
        ]
      }

    ];
  }
}
