import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ConfigProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConfigProvider Provider');
  }

  getLocalUrl() {
    return `http://127.0.0.1:8081/yyerp/`;
  }

  getUrlByIp(ip: string){
    //32 BASE_URL = 'http://10.2.0.32:8080/yyerp/'
    //36 BASE_URL = `http://10.2.0.36:8888/yyerp/`
    return `http://10.2.0.${ip}:8080/yyerp/`;
  }

  getTestUrl() {
    return `http://10.2.0.55:8080/yyerp/`;
  }

  getPublicProductUrl() {
    return `http://14.23.148.134:8083/yyerp/`;
  }




}
