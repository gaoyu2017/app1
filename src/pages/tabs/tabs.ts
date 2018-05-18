
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {ChannelPage} from "../channel/channel";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabIcon: 'home'
      },
      {
        root:ChannelPage,
        tabIcon:'compass'

      },
      {
        root: ContactPage,
        tabIcon: 'chatboxes'
      },
      {
        root: AboutPage,
        tabIcon: 'contact'
      }

    ];
  }
}
