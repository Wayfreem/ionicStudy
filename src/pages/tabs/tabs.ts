import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = 'SettingPage';   // 使用懒加载

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    let modelData: string = '用户名：' + this.navParams.get('username');
    console.log(modelData);
  }
}
