import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Detalhar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhar',
  templateUrl: 'detalhar.html',
})
export class Detalhar {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detalhar');
  }

}
