import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {IonicStorageModule} from "@ionic/storage";
import {HttpClientModule} from "@angular/common/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";

import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {MessagePageModule} from "../pages/message/message.module";
import {ApprovalPageModule} from "../pages/approval/approval.module";
import {ComponentsModule} from "../components/components.module";
import { HttpClientServiceProvider } from '../providers/http-service/http-client-service';
import { BackButtonServiceProvider } from '../providers/back-button-service/back-button-service';
import { ConfigProvider } from '../providers/config/config';
import {HttpServiceProvider} from "../providers/http-service/http-service";

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

    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
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
    HttpClientServiceProvider,
    BackButtonServiceProvider,
    ConfigProvider,
    HttpServiceProvider,
  ]
})
export class AppModule {}
