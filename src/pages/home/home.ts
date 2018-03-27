import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public headerSlideData = [];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.headerSlideData = this.getHeaderSlideData();
  }

  private getHeaderSlideData() {
    return [
      {
        alt: "双十一预热主场会",
        src: "assets/imgs/homeImg/home-headerSlide-1.jpg"
      },
      {
        alt: "11月11天家电低价不停歇",
        src: "assets/imgs/homeImg/home-headerSlide-2.jpg"
      },
      {
        alt: "家具盛典 好货提前抢",
        src: "assets/imgs/homeImg/home-headerSlide-3.jpg"
      },
      {
        alt: "IT抢券节",
        src: "assets/imgs/homeImg/home-headerSlide-4.jpg"
      },
      {
        alt: "潮流数码 双11爽购攻略",
        src: "assets/imgs/homeImg/home-headerSlide-5.jpg"
      }
    ];
  }

}
