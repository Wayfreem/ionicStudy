import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {MessagePageModule} from "../pages/message/message.module";
import {ApprovalPageModule} from "../pages/approval/approval.module";
import {ComponentsModule} from "../components/components.module";
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { BackButtonServiceProvider } from '../providers/back-button-service/back-button-service';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
  ],
  imports: [
    // 自定义组件
    ComponentsModule,

    // 自定义模块
    MessagePageModule,
    ApprovalPageModule,

    BrowserModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',  // 隐藏全部子页面 tabs
      // backButtonText: '返回',     修改返回按钮
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],  // 全局配置日期的月份名称
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ContactPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackButtonServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
    BackButtonServiceProvider
  ]
})
export class AppModule {}
