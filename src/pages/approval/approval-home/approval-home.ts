import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

import {HttpServiceProvider} from "../../../providers/http-service/http-service";
import {HttpClientServiceProvider} from "../../../providers/http-service/http-client-service";

@IonicPage()
@Component({
  selector: 'page-approval-home',
  templateUrl: 'approval-home.html',
})
export class ApprovalHomePage {

  error = "";

  items = [];

  httpClientData: any;
  httpData: any;

  constructor(public platform: Platform,
              public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpServiceProvider,
              public httpClientService: HttpClientServiceProvider,) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalHomePage');
  }

  gotoListPage(event, item) {
    console.log(item);
  }

  _login() {
    let url = 'app/loginAction/doNotNeedSession_login.action';
    let params = {CZYID: "0001131", CZYMM: "4122cb13c7a474c1976c9706ae36521d"};
    let data = {pdata: JSON.stringify(params)};
    this.httpService.$post(url, data).subscribe(
      (resultData) => {
        this.httpData = resultData;
        console.log(resultData);
      });
  }

  getHttpData() {
    let method = `app/loginAction/doNotNeedSession_login.action`;

    let params = {CZYID: "0001131", CZYMM: "4122cb13c7a474c1976c9706ae36521d"};
    let data = {pdata: JSON.stringify(params)};

    this.httpClientService.post(method, data).subscribe(
      (resultData) => {
        this.httpData = resultData;
        console.log(resultData);
      });
  }


}
