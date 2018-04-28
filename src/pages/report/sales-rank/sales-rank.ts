import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClientServiceProvider} from "../../../providers/http-service/http-client-service";

@IonicPage()
@Component({
  selector: 'page-sales-rank',
  templateUrl: 'sales-rank.html',
})
export class SalesRankPage {

  topRankList: any[];
  lastRankList: any[];

  targetAmount: number;
  actualAmount: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClientService: HttpClientServiceProvider,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesRankPage');
    this.getRankData();
    this.getMoneyData();
  }

  getRankData(){
      const url = `base/funcAction/doNotNeedSession_queryMDRank.action`;
    this.httpClientService.post(url, {body: JSON.stringify({})}).subscribe(
      (resultData) => {
        if( resultData.success ){
          const array = resultData.obj;
          this.topRankList = array.slice(0,10);
          this.lastRankList = array.slice(array.length - 10, array.length).reverse();
        }else{
          this.showMessage("查询数据失败");
        }
      });
  }

  getMoneyData(){
    const url = `base/funcAction/doNotNeedSession_queryMDAllMoney.action`;
    this.httpClientService.post(url, {body: JSON.stringify({})}).subscribe(
      (resultData) => {

        if( resultData.success ){
          const amountData = resultData.obj;
          this.targetAmount = amountData.MDXSMB;
          this.actualAmount =  Number(amountData.ALLMONEY) / 10000;
        }else{
          this.showMessage("查询数据失败");
        }


      });
  }

  showMessage(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "bottom"
    });

    toast.present(toast);
  }

}
