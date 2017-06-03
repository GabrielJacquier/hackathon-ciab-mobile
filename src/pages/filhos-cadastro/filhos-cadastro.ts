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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilhosCadastroPage');
  }

  onCadastrarClick(event) {
    this.navCtrl.push(FilhosCadastroConfirmacaoPage, {
      // NavParams
    });
  }
}
