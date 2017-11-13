import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public mesada = {
    valor: 35.00,
    data: "06/04/2017",
    frequencia: "Weekly"
  }

  private filho;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filho = this.navParams.data.filho;
    if (this.filho.mesada) {
      this.mesada = this.filho.mesada;
      this.mesada.data = "04/06/2017";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesadaPage');
  }

  onCadastrarClick(event, item) {
    this.filho.mesada = this.mesada;
    this.navCtrl.pop();
  }

}
