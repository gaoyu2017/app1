import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera} from "@ionic-native/camera";
import {ImagePicker} from "@ionic-native/image-picker";
import {  FileTransferObject }from'@ionic-native/file-transfer';
import { File }from '@ionic-native/file';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ChannelPage } from '../pages/channel/channel';
import { TabsPage } from '../pages/tabs/tabs';
import {EditPage} from "../pages/edit/edit";
import {Pagemenu1Page} from "../pages/pagemenu1/pagemenu1";
import {Pagemenu2Page} from "../pages/pagemenu2/pagemenu2";




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ChannelPage,
    Pagemenu1Page,
    Pagemenu2Page,
    EditPage,
    TabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ChannelPage,
    Pagemenu1Page,
    Pagemenu2Page,
    EditPage,
    TabsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    ImagePicker,
    File,
    FileTransferObject,

  ]

})
export class AppModule {}
