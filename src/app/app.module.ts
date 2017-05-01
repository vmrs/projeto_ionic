import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Cadastro } from '../pages/cadastro/cadastro';
import { Detalhar } from '../pages/detalhar/detalhar';
import { Login } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyCiHBWvMpEymSKoX8UT6Y80joDGSCdSt2g",
  authDomain: "projeto-ionic-victon.firebaseapp.com",
  databaseURL: "https://projeto-ionic-victon.firebaseio.com",
  projectId: "projeto-ionic-victon",
  storageBucket: "projeto-ionic-victon.appspot.com",
  messagingSenderId: "1060660010159"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Cadastro,
    Detalhar,
    Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Cadastro,
    Detalhar,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
