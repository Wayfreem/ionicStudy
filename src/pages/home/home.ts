import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public headerSlideData = [];
  public navData = [];

  // 精品推荐
  recListWidth = '';
  recommendList=[];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.headerSlideData = this.getHeaderSlideData();
    this.navData = this.getNavData();

    this.recommendList = this.getRecommendList();
    this.recListWidth = this.recommendList.length*92+'px';
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
        src: "assets/img/nav/nav0.png",
        click: () => {
          console.log("分类查询");
        }
      },
      {
        alt: "物流查询",
        src: "assets/img/nav/nav1.png",
        click: () => {
          console.log("物流查询");
        }
      },
      {
        alt: "购物车",
        src: "assets/img/nav/nav2.png",
        click: () => {
          console.log("购物车");
        }
      },
      {
        alt: "我的京东",
        src: "assets/img/nav/nav3.png",
        click: () => {
          console.log("我的京东");
        }
      },
      {
        alt: "充值",
        src: "assets/img/nav/nav4.png",
        click: () => {
          console.log("充值");
        }
      },
      {
        alt: "领券中心",
        src: "assets/img/nav/nav5.png",
        click: () => {
          console.log("分类查询");
        }
      },
      {
        alt: "我的审批",
        src: "assets/img/nav/nav6.png",
        click: () => {
          console.log("我的审批");
        }
      },
      {
        alt: "我的关注",
        src: "assets/img/nav/nav7.png",
        click: () => {
          console.log("我的关注");
        }
      }
    ];
  }

  private getRecommendList(){
    let list = [];
    for(let i=0;i<10;i++){

      list.push({
        pic:'assets/img/homeImg/home-slide-0'+i+'.jpg',
        title:'第'+i+'条'
      });
    }
    return list;
  }

}
