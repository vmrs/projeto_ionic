import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';


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
  nomeCabecalho:string;
  nomeBotao:string;

  item: any;

  txtTituloAnotacao: string;
  txtCorpoAnotacao: string;
  dataAtual: string;

  anotacoes: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertaCtrl: AlertController, af: AngularFire) {
    if (this.navParams.get("item")){
      this.item = this.navParams.get("item");

      this.txtCorpoAnotacao = this.item.corpo;
      this.txtTituloAnotacao = this.item.titulo;

      this.nomeCabecalho = "Editar";
      this.nomeBotao = "Editar";
    }else{
      this.nomeCabecalho = "Cadastrar";
      this.nomeBotao = "Salvar";
    }

    this.anotacoes = af.database.list('anotacao');
    this.dataAtual = new Date().toDateString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cadastro');
  }

  refreshData(): void {

  }
  salvarAnotacao(){
    console.log(this.txtTituloAnotacao + " - " + this.txtCorpoAnotacao);

    let alert = this.alertaCtrl.create({
      title: 'Confirmação',
      message: "Deseja "+this.nomeBotao+" os dados?",
      buttons:[{
        text: 'Cancelar',
        role: 'cancel',
        handler:() => {}
      },{
        text: this.nomeBotao,
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
          //this.refreshData();
          if(this.item){
            this.anotacoes.update(this.item.$key, {
              titulo: this.txtTituloAnotacao,
              corpo: this.txtCorpoAnotacao,
              data: this.item.data
            }).then( newContact => {
              this.navCtrl.pop().then(() => this.navCtrl.pop());
            }, error => {
              console.log(error);
            });
          }else{
            this.anotacoes.push({
              titulo: this.txtTituloAnotacao,
              corpo: this.txtCorpoAnotacao,
              data: this.dataAtual
            });
          }
          
          this.txtCorpoAnotacao = "";
          this.txtTituloAnotacao = "";
  }

}
