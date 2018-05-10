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

      proxyUrl: `/yyerp/`,
      proxyUrl_new:`/yyerpNew/`
    };

    return urlConfig.proxyUrl;
  }


}
