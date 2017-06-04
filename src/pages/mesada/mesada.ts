import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilhosPage } from '../filhos/filhos';

/**
 * Generated class for the MesadaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mesada',
  templateUrl: 'mesada.html',
})
export class MesadaPage {

  private mesada = {
    val: 600.00,
    data: "04/06/2017"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesadaPage');
  }

  onCadastrarClick(event, item) {
    this.navCtrl.push(FilhosPage, {
      mesada: this.mesada
    });
  }

}
