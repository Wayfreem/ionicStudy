import {Injectable} from "@angular/core";
import {Headers, Http, Request, RequestMethod, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";

//55
// export const BASE_URL = 'http://10.2.0.55:8080/yyerp/';

// 外网
export const BASE_URL = `http://14.23.148.134:8083/yyerp/`;

//32
// export const BASE_URL = 'http://10.2.0.32:8080/yyerp/';

//36
// export const BASE_URL = `http://10.2.0.36:8888/yyerp/`

//本地
//export const BASE_URL = `http://127.0.0.1:8081/yyerp/`

@Injectable()
export class HttpServiceProvider {

  headers: Headers = new Headers({'content-type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http,) {
  }

  private serialize(obj: any): URLSearchParams {
    let params = new URLSearchParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        params.set(key, obj[key]);
      }
    }
    return params;
  }

  public $get(path: string, params: URLSearchParams, contentType?: string) {
    let url = `${BASE_URL}${path}`;
    let requestOptions = this._createRequestOptions(url, RequestMethod.Get, params,);
    return this.http.request(new Request(requestOptions))
      .map(res => res.json())
      .catch(
        err => {
          return Observable.throw(err);
        })
  }

  public $post(path: string, params: object) {
    let url = `${BASE_URL}${path}`;
    let requestOptions = this._createRequestOptions(url, RequestMethod.Post, this.serialize(params));
    return this.http.request(new Request(requestOptions)).map(res => res.json());
  };


  /**
   * 生成请求项参数
   * @param {string} $url 调用的地址
   * @param {RequestMethod} $method 调用的方式（POST、GET 等）
   * @param {URLSearchParams} $params 请求的参数
   * @param $body 请求的body 可以为空
   * @returns {RequestOptions}
   * @private
   */
  private _createRequestOptions($url: string, $method: RequestMethod, $params: URLSearchParams = null, $body: any = null): RequestOptions {
    let requestOptions: RequestOptions = new RequestOptions({
      headers: this.headers,
      method: $method,
      url: $url,
      params: $params,
      body: $body
    });

    return requestOptions;
  }

}
