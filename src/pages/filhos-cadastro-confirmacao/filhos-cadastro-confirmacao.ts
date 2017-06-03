import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilhosDetalhePage } from '../filhos-detalhe/filhos-detalhe';

/**
 * Generated class for the FilhosCadastroConfirmacaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-filhos-cadastro-confirmacao',
  templateUrl: 'filhos-cadastro-confirmacao.html',
})
export class FilhosCadastroConfirmacaoPage {

  private filho: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filho = this.navParams.data.filho;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilhosCadastroConfirmacaoPage');
  }

  onOKClick(event) {
    this.navCtrl.push(FilhosDetalhePage, {
      filho: this.filho
    });
  }
}
