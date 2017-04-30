import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the Cadastro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class Cadastro {
  txtTituloAnotacao: string;
  txtCorpoAnotacao: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertaCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cadastro');
  }

  refreshData(): void {

  }

  salvarAnotacao(){
    console.log(this.txtTituloAnotacao + " - " + this.txtCorpoAnotacao);

    let alert = this.alertaCtrl.create({
      title: 'Confirmar',
      message: this.txtCorpoAnotacao,
      buttons:[{
        text: 'Cancelar',
        role: 'cancel',
        handler:() => {}
      },{
        text: 'Salvar',
        handler:() => {
          //função de salvar é chama aqui
          this.salvar();
        }
      }]
    });
    alert.present();

  }

  salvar() : void{
    /*this.database.executeSql("INSERT INTO todos (titulo, corpo) values ('"+this.txtTituloAnotacao+"', '"+this.txtCorpoAnotacao+"')", []).then ((data)=> {
            console.log ("INSERIDO COM SUCESSO");
          }, (error) =>{
            console.error ("ERRO: "+ JSON.stringify(error.err));
          });*/
          this.refreshData();
          this.txtCorpoAnotacao = "";
          this.txtTituloAnotacao = "";
  }

}
