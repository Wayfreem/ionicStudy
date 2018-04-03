import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public headerSlideData = [];
  public navData = [];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.headerSlideData = this.getHeaderSlideData();
    this.navData = this.getNavData();
  }

  private getHeaderSlideData() {
    return [
      {
        alt: "双十一预热主场会",
        src: "assets/img/homeImg/home-headerSlide-1.jpg"
      },
      {
        alt: "11月11天家电低价不停歇",
        src: "assets/img/homeImg/home-headerSlide-2.jpg"
      },
      {
        alt: "家具盛典 好货提前抢",
        src: "assets/img/homeImg/home-headerSlide-3.jpg"
      },
      {
        alt: "IT抢券节",
        src: "assets/img/homeImg/home-headerSlide-4.jpg"
      },
      {
        alt: "潮流数码 双11爽购攻略",
        src: "assets/img/homeImg/home-headerSlide-5.jpg"
      }
    ];
  }

  private getNavData(){
    return [
      {
        alt: "分类查询",
        src: "assets/img/nav/nav0.png"
      },
      {
        alt: "物流查询",
        src: "assets/img/nav/nav1.png"
      },
      {
        alt: "购物车",
        src: "assets/img/nav/nav2.png"
      },
      {
        alt: "我的京东",
        src: "assets/img/nav/nav3.png"
      },
      {
        alt: "充值",
        src: "assets/img/nav/nav4.png"
      },
      {
        alt: "领券中心",
        src: "assets/img/nav/nav5.png"
      },
      {
        alt: "生活团购",
        src: "assets/img/nav/nav6.png"
      },
      {
        alt: "我的关注",
        src: "assets/img/nav/nav7.png"
      }
    ];
  }

}
