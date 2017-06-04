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
    valMensal: 600.00,
    valDiario: 150.00,
    data: '05'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesadaPage');
  }

  onCadastrarClick(event, item) {
    this.navCtrl.push(FilhosPage, {
      
    });
  }

  mudarVal() {
    if(this.mesada.valDiario == 150.00) {
      this.mesada.valDiario = 600.00;
    }
    else {
      this.mesada.valDiario = 150.00
    }
  }

}
