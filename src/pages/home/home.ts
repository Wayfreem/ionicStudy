import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('lyScroll')
  lyScrollDiv: ElementRef;

  @ViewChild('headerSearch')
  headerSearch: ElementRef;

  public headerSlideData = [];
  public navData = [];

  searchPage = 'SearchPage';

  // 精品推荐
  recListWidth = '';
  recommendList=[];

  constructor(public navCtrl: NavController,
              public el: ElementRef) {
  }

  ionViewDidLoad() {
    this.headerChangeColor();

    this.headerSlideData = this.getHeaderSlideData();
    this.navData = this.getNavData();

    this.recommendList = this.getRecommendList();
    this.recListWidth = this.recommendList.length*92+'px';
  }

  private headerChangeColor() {
    let nowOpacity = 0;
    let headDiv = this.lyScrollDiv.nativeElement;
    let headerSearch = this.headerSearch.nativeElement;

    headDiv.onscroll = function() {
      if (this.scrollTop / 250 < 0.85) {
        nowOpacity = this.scrollTop / 250;
      }
      headerSearch.style.opacity = nowOpacity ;
    }
  }

  goSearch(){
    this.navCtrl.push(this.searchPage);
  }

  openNavPage(item){
    this.navCtrl.push(item.page).catch( (error) => {console.log(error)});
  }

  doRefresh(refresher){
    setTimeout(() => {
      refresher.complete(); //当数据请求完成调用
    }, 2000);
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
        page: "CategoryPage",
      },
      {
        alt: "物流查询",
        src: "assets/img/nav/nav1.png",
        page: "",
      },
      {
        alt: "购物车",
        src: "assets/img/nav/nav2.png",
        page: "CartPage",
      },
      {
        alt: "我的京东",
        src: "assets/img/nav/nav3.png",
        page: "",
      },
      {
        alt: "报表管理",
        src: "assets/img/nav/nav4.png",
        page: "ReportPage",
      },
      {
        alt: "领券中心",
        src: "assets/img/nav/nav5.png",
        page: "",
      },
      {
        alt: "我的审批",
        src: "assets/img/nav/nav6.png",
        page: "",
      },
      {
        alt: "我的关注",
        src: "assets/img/nav/nav7.png",
        page: "",
      }
    ];
  }

  private getRecommendList(){
    let list = [];
    for(let i=0;i<10;i++){

      list.push({
        pic:'assets/img/homeImg/home-slide-0'+i+'.jpg',
        title:'第'+i+'条',
        price: Math.round(Math.random() * 1000)
      });
    }
    return list;
  }

}
