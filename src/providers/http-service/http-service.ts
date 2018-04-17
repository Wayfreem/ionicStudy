import {Injectable} from "@angular/core";
import {Headers, Http, Request, RequestMethod, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ConfigProvider} from "../config/config";

@Injectable()
export class HttpServiceProvider {

  headers: Headers = new Headers({'content-type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http,
              private configProvider: ConfigProvider) {
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
    let url = `${this.configProvider.getProductionUrl()}${path}`;
    let requestOptions = this._createRequestOptions(url, RequestMethod.Get, params,);
    return this.http.request(new Request(requestOptions))
      .map(res => res.json())
      .catch(
        err => {
          return Observable.throw(err);
        })
  }

  public $post(path: string, params: object) {
    let url = `${this.configProvider.getProductionUrl()}${path}`;
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
