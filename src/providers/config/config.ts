import {Injectable} from '@angular/core';

/**
 * 提供系统的一些常用配置属性
 */
@Injectable()
export class ConfigProvider {

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }



  getProductionUrl() {
    let urlConfig = {
      localUrl: `http://127.0.0.1:8081/yyerp/`,
      testUrl: `http://10.2.0.55:8080/yyerp/`,
      _32Url: `http://10.2.0.32:8080/yyerp/`,
      _36Url: `http://10.2.0.36:8888/yyerp/`,
      productionUrl: `http://14.23.148.134:8083/yyerp/`,
      proxyUrl: `/yyerp`,
    };

    return urlConfig.productionUrl;
  }


}
