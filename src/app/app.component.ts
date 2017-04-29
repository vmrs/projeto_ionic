import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Cadastro } from '../pages/cadastro/cadastro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  pages: Array<{component: any, title: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { component: HomePage, title: 'Principal' },
      { component: Cadastro, title: 'Cadastro' }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page): void {
    this.rootPage = page.component;
  }
}

