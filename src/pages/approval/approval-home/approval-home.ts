import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {HttpServiceProvider} from "../../../providers/http-service/http-service";

@IonicPage()
@Component({
  selector: 'page-approval-home',
  templateUrl: 'approval-home.html',
})
export class ApprovalHomePage {

  items = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpServiceProvider :HttpServiceProvider,
              public httpClient: HttpClient,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalHomePage');
  }

  gotoListPage(event, item) {
    console.log(item);
  }

  _login(){
    let url = 'app/loginAction/doNotNeedSession_login.action';
    let params = {CZYID: "0001131", CZYMM: "e6d678ce7fe7ca55d7ad8000074693ca"};
    let data = {pdata:  JSON.stringify(params)};
    this.httpServiceProvider.$post(url, data).subscribe(
      (resultData) => {
        console.log(resultData);
    });
  }

  getHttpData() {
    debugger;
    let method = `app/loginAction/doNotNeedSession_login.action`;
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let data = {pdata: {CZYID: "0001131", CZYMM: "e6d678ce7fe7ca55d7ad8000074693ca"} };

    this.post(method, JSON.stringify(data), headers).subscribe(
      (data) =>{
        console.log(data);
      });
  }


  // 将数据转换为 httpParams
  private serialize(obj: any): HttpParams {
    let params = new HttpParams();

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        params = params.set(key, obj[key]);
      }
    }
    return params;
  }

  /**
   * 发送 post 请求
   * @param {string} method 调用的方法名
   * @param body  传入后端的参数
   * @param {HttpHeaders} customHeaders 请求的头信息
   * @returns {Observable<any>}
   */
  post(method: string, body: any, customHeaders?: HttpHeaders): Observable<any>{
    debugger
    const BASE_URL = `http://14.23.148.134:8083/yyerp/`;
    const path = `${BASE_URL}${method}`;

    return this.request(path, this.serialize(body), 'POST', customHeaders);
  }

  request(path: string, body: any, method = 'POST', customHeaders?: HttpHeaders): Observable<any> {
    const req = new HttpRequest(method, path, body, {
      headers: customHeaders ,
      withCredentials: true
    });

    return this.httpClient.request(req)
      .filter(response => response instanceof HttpResponse)
      .map((response: HttpResponse<any>) => response.body)
      .catch(error => this.checkError(error));
  }

  private checkError(error: any): any {
    if (error && error.status === 401) {
      console.log('401---------------------');
    } else {
      console.log(error);
    }
    throw error;
  }

}
