import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Cadastro } from '../pages/cadastro/cadastro';
import { Login } from '../pages/login/login';

import { AuthService } from '../providers/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = Login;

  pages: Array<{component: any, title: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth: AuthService) {
    this.auth.subscribe((result) => {
      this.inicializarApp();
      
    });

    this.pages = [
      { component: HomePage, title: 'Minhas Anotações' },
      { component: Cadastro, title: 'Cadastro' }
    ];

    
  }
  openPage(page): void {
    this.rootPage = page.component;
  }
  logout(){
    this.auth.signOut(); 
  }
  inicializarApp(){
    this.platform.ready().then(() => {

      if(this.auth.authenticated){
        this.nav.setRoot(HomePage);
      }else{
        this.nav.setRoot(Login);
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }
}

