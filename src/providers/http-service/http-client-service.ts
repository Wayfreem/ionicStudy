import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConfigProvider} from "../config/config";
import {Observable} from "rxjs/Observable";
import {Storage} from "@ionic/storage";
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

export enum RequestMethod {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  PATCH = 'PATCH'
}

@Injectable()
export class HttpClientServiceProvider {

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(public http: HttpClient,
              public storage: Storage,
              public config: ConfigProvider) {
    console.log('Hello HttpServiceProvider Provider');
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

  /*private sign(param: object, secret: string) {
    // 对参数名进行字典排序
    const arrayParam: any[] = [];
    for (const key in param) {
      arrayParam.push(key);
    }
    arrayParam.sort();

    // 拼接有序的参数名-值串
    const paramArray = new Array();
    paramArray.push(secret);

    for (let i of arrayParam) {
      paramArray.push(i + param[i]);
    }
    paramArray.push(secret);
    // SHA-1编码，并转换成大写，即可获得签名
    const shaSource = paramArray.join('');
    const sign = CryptoJS.SHA1(shaSource).toString(CryptoJS.enc.Hex).toUpperCase();
    return sign;
  }*/

  get(path: string, args?: any): Observable<any> {
    const options = {
      headers: this.headers,
      withCredentials: true
    };

    if (args) {
      options['params'] = this.serialize(args);
    }

    return this.http.get(path, options)
      .catch(this.checkError.bind(this));
  }

  post(method: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
    const data = body || {};
    data.method = method;
    data.appKey = '00001';
    const secret = 'abcdeabcdeabcdeabcdeabcde';
    data.version = '1.0';
    if (method.indexOf("login") == -1) {
      data.sessionId = this.storage.get("USER_INFO");
    }
    // data.sign = this.sign(data, secret);
    return this.request(this.config.getPublicProductUrl(), this.serialize(data), RequestMethod.POST, customHeaders);
  }

  private request(path: string, body: any, method = RequestMethod.POST,  customerHeaders?: HttpHeaders): Observable<any> {
    const req = new HttpRequest(method, path, body, {
      headers: customerHeaders || this.headers,
      withCredentials: true
    });

    return this.http.request(req)
      .filter(response => response instanceof HttpResponse)
      .map((response: HttpResponse<any>) => response.body)
      .catch(error => this.checkError(error));
  }


  // 错误检查
  private checkError(error: any): any {
    if (error && error.status === 401) {
      console.log('401---------------------');
    } else {
      console.log(error);
    }
    throw error;
  }




}
