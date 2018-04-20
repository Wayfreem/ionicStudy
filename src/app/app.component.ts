import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TranslateService} from '@ngx-translate/core';

import {TabsPage} from "../pages/tabs/tabs";
import {Settings} from "../providers/utils/settings";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              storage: Storage,
              private translate: TranslateService,
              settings: Settings) {

    /* 当storage准备就绪之后，判断 USER_INFO 中是否记录登录状态 */
    storage.ready().then(() => {

      settings.getValue("USER_INFO")
        .then( (value)=>{
          let isRemember = !!value ? JSON.parse(value).isRemember : false;
          if (isRemember) {
            this.rootPage = TabsPage;
          }else{
            this.rootPage = LoginPage;
          }
        })
        .catch((error) =>{
          this.rootPage = 'TutorialPage';
        });

    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.initTranslate();
  }

  initTranslate() {
    // 根据浏览器来判断字符集
    this.translate.setDefaultLang('zh-cmn-Hans');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      // 设置翻译
      this.translate.use('zh-cmn-Hans');
    }
  }

}
