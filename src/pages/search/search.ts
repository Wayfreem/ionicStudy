import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public flag=true;  /*有没有关键词、关键词开关*/

  public list=[];  /*模拟商品数据*/

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    for(let i=0;i<10;i++){

      this.list.push({
        pic:'assets/img/homeImg/home-slide-0'+i+'.jpg',
        title:'第'+i+'条'
      })
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  changeContent(){
    this.flag = !this.flag;
  }

}
