import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home'

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  user = {email: "", password:""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
  }

  registrarUsuario(){
    this.auth.signUpWithPassword(this.user).then().catch((error) => {
      alert(error);
    });
  }
  login(){
    this.auth.signInWithPassword(this.user).then((authData) => {
      alert(JSON.stringify(authData));
      this.navCtrl.setRoot(HomePage);
    }).catch((error) => {
      alert(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
