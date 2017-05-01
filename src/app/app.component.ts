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

  rootPage:any = HomePage;

  pages: Array<{component: any, title: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth: AuthService) {
    this.auth.subscribe((result) => {
      this.inicializarApp();
    });

    this.pages = [
      { component: HomePage, title: 'Principal' },
      { component: Cadastro, title: 'Cadastro' }
    ];

    
  }
  openPage(page): void {
    this.rootPage = page.component;
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

      //banco de dados
      /*
      let db = new SQLite();
      db.openDatabase({
        name: "data.db",
        location: "default"
      }).then(()=> {
        db.executeSql("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, corpo TEXT)", {}).then((data) => {
          console.log("TABELA CRIADA: ", data);
        }, (error) =>{
          console.error("EXECUÇÃO SQL INDISPONIVEL: ", error);
        })
      }, (error) => {
        console.error("EXECUÇÃO SQL INDISPONIVEL: ", error);
      }) ;*/
    });
  }
}

