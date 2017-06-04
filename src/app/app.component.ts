import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FilhosPage } from '../pages/filhos/filhos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', icon: 'home', component: HomePage },
      { title: 'KiBank', icon: 'people', component: FilhosPage },
      { title: 'Investimentos', icon: 'stats', component: HomePage },
      { title: 'Poupança', icon: 'briefcase', component: HomePage },
      { title: 'Cartões', icon: 'card', component: HomePage },
      { title: 'Seguranca', icon: 'lock', component: HomePage },
      { title: 'Atendimento', icon: 'call', component: HomePage },
      { title: 'Sair', icon: 'exit', component: HomePage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
