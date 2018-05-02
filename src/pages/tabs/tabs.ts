import {Component, ViewChild} from '@angular/core';
import {ContactPage} from '../contact/contact';
import {MessagePage} from "../message/message";
import {HomePage} from '../home/home';
import {Events, NavParams, Platform, Tabs} from 'ionic-angular';
import {BackButtonServiceProvider} from "../../providers/utils/back-button-service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  messageTabBadge: number = 0;

  tab1Root = HomePage;
  tab2Root = MessagePage;
  tab3Root = ContactPage;
  tab4Root = 'SettingPage';   // 使用懒加载

  constructor(public navParams: NavParams,
              public platform: Platform,
              public backButtonService: BackButtonServiceProvider,
              public events: Events) {

    platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });

    this.events.subscribe('messageTabBadge:change', (number)=>{
      console.log("------------->");
      this.messageTabBadge = number;
    })
  }

  ionViewDidLoad() {
    let modelData: string = '用户名：' + this.navParams.get('username');
    console.log(modelData);
  }

}
