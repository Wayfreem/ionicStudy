import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {IonicStorageModule} from "@ionic/storage";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";

import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Camera} from '@ionic-native/camera';

import {MyApp} from './app.component';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {MessagePageModule} from "../pages/message/message.module";
import {ComponentsModule} from "../components/components.module";
import {HttpClientServiceProvider} from '../providers/http-service/http-client-service';
import {BackButtonServiceProvider} from '../providers/utils/back-button-service';
import {ConfigProvider} from '../providers/config/config';
import {HttpServiceProvider} from "../providers/http-service/http-service";
import {CameraProvider} from "../providers/utils/camera.provider";
import {Settings} from "../providers/utils/settings";
/*import {BarcodeScanner} from "@ionic-native/barcode-scanner";*/

const PROVIDERS = [
  // 自定义模块
  HttpClientServiceProvider,
  BackButtonServiceProvider,
  ConfigProvider,
  HttpServiceProvider,
  CameraProvider,
  Settings,

  // Ionic native specific providers
  Camera,
 /* BarcodeScanner,*/
];

// 设置翻译文件的路径
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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

    HttpModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',  // 隐藏全部子页面 tabs
      // backButtonText: '返回',     修改返回按钮
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],  // 全局配置日期的月份名称
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    ...PROVIDERS,
  ]
})
export class AppModule {
}
