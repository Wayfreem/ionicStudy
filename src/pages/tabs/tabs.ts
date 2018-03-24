import {Component, ViewChild} from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {NavParams, Platform, Tabs, ViewController} from "ionic-angular";
import {BackButtonService} from "../../services/backButton.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = 'SettingPage';   // 使用懒加载

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public platform: Platform,
              public backButtonService: BackButtonService) {

    platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });
  }

  ionViewDidLoad() {
    let modelData: string = '用户名：' + this.navParams.get('username');
    console.log(modelData);
  }
}
