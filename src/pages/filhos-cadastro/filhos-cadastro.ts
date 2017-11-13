import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilhosCadastroConfirmacaoPage } from '../filhos-cadastro-confirmacao/filhos-cadastro-confirmacao';

/**
 * Generated class for the FilhosCadastroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-filhos-cadastro',
  templateUrl: 'filhos-cadastro.html',
})
export class FilhosCadastroPage {

  private filho = {
    nome: 'Niel Polis',
    cpf: '078-12-5543',
    tel: '(329) 669-1123',
    senha: '4567',
    datNasc: '06/04/2006',
    idade: '11',
    saldo: 0,
    icon: 'assets/novo-filho-thumb.png',
    previdencia: 0,
    extrato: [],
    metas: []
  };

  private items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.data.items;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilhosCadastroPage');
  }

  onCadastrarClick(event) {
    this.items.push(this.filho);
    this.navCtrl.push(FilhosCadastroConfirmacaoPage, {
      filho: this.filho
    });
  }
}
