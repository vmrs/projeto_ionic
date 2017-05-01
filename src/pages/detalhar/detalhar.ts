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
  dataFormatada: string;
  meses = {"Feb":"Fev", "Apr":"Abr", "May": "Mai", "Aug": "Ago", "Sep": "Set", "Oct": "Out", "Dec":"Dez"};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("item");
    
    //formatando data
    let dia = this.item.data.substring(8,10);
    var mes = this.item.data.substring(4,7);
    if(this.meses[mes]){
      mes = this.meses[mes];
    }
    /*
    for(let m of this.mesesIng){
      if (m == mes){
        mes = this.mesesPort[this.mesesIng.indexOf(m)];
      }
    }*/
    let ano = this.item.data.substring(11);
    this.dataFormatada = dia + "/" + mes + "/" + ano;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detalhar');
  }

}
