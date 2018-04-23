import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  public recList=[];
  public cateList=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //右侧的分类数据模拟
    for (let i = 0; i < 10; i++) {
      this.recList.push({
        pic: 'assets/img/homeImg/home-slide-0'+i+'.jpg',
        title: '第' + i + '条'
      })
    }

    //左侧模拟数据
    for (let i = 0; i < 10; i++) {
      this.cateList.push(`分类${i}`);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
