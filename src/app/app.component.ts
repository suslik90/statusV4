import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Settings } from '../pages/settings/settings';
import { Profile } from '../pages/profile/profile';
import { MyRewards } from '../pages/my-rewards/my-rewards';
import { RewardsLine } from '../pages/rewards-line/rewards-line';
import { Messages } from '../pages/messages/messages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = Page1;
  // rootPage: any = Messages;
  rootPage: any = RewardsLine;

  pages: Array<{title: string, icon:string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Контакты', icon:'ios-contacts-outline', component: Page1 },
      { title: 'Сообщения', icon:'ios-mail-outline', component: Messages },
      { title: 'Профиль', icon:'ios-person-outline', component: Profile },
      { title: 'Настройки', icon:'ios-settings-outline', component: Settings },
      { title: 'Все реварды', icon:'ios-clipboard-outline', component: RewardsLine },
      { title: 'Мои реварды', icon:'ios-basket-outline', component: MyRewards },
      { title: 'Выход', icon:'ios-undo-outline', component: Page1 },    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // StatusBar.styleDefault();
      StatusBar.overlaysWebView(true); // let status bar overlay webview

      // StatusBar.backgroundColorByHexString('#ffffff'); // set status bar
      StatusBar.styleBlackTranslucent(); // set status bar
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openSettings(){
    this.nav.setRoot(Settings);
  }
}
