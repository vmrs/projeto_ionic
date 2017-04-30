import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Detalhar } from '../detalhar/detalhar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  itens: Array<{title:string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    this.itens = [{title:"item1",note:"note1"}];
    for(let i=1;i<11;i++){
      this.itens.push({
        title: 'Item ' + i,
        note: 'Este é o item #' + i
      });
    }
  }
  itemTapped(event, item){
    this.navCtrl.push(Detalhar, {
      item: item
    });
  }

}
