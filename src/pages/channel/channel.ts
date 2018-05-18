import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MyApp} from "../../app/app.component";


@IonicPage()
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelPage');
  }

  Channel(){
    this.navCtrl.push(MyApp);

  }

  // register(){
  //   this.navCtrl.push(RegisterPage);
  // }
}
