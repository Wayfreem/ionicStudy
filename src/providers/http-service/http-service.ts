import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }

}
