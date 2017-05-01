import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController} from 'ionic-angular';

//import { Detalhar } from '../detalhar/detalhar';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  //itens: Array<{title:string, note: string}>;
  itens: FirebaseListObservable<any>;
  tamanho: number = 0;

  limit = 15;//infinityscrool

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.selectedItem = navParams.get('item');
    //this.itens = af.database.list('/anotacao');

    this.queryTasks(null);
    /*
    this.itens = [{title:"item1",note:"note1"}];
    for(let i=1;i<11;i++){
      this.itens.push({
        title: 'Item ' + i,
        note: 'Este é o item #' + i
      });
    }*/
  }
  itemTapped(event, item){
    this.apresentarActionSheet(item);
    /*
    this.navCtrl.push(Detalhar, {
      item: item
    });
    */
  }

  apresentarActionSheet(item){
    let actionSheet = this.actionSheetCtrl.create({
      title: "Ações",
      buttons:[
        {
          text: "Apagar",
          icon: "trash",
          role: "destructive",
          handler: () => {
            this.delete(item);
          }
        },
        {
          text: "Cancelar",
          icon: "close",
          role: "cancel",
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  delete(item){
    this.itens.remove(item);
  }

  queryTasks(infiniteScrool){
    this.itens = this.af.database.list('/anotacao', {
      query: {limitToFirst: this.limit}
    });
    if(infiniteScrool){
      this.itens.subscribe(
        result => infiniteScrool.complete()
      );
    }
    
    this.limit *= 2;//aumenta do limite a cada 2x
    
    this.itens.subscribe(
      val => this.tamanho = val.length
    );
  }
}
