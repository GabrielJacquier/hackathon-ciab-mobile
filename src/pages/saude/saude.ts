import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SaudePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-saude',
  templateUrl: 'saude.html',
})
export class SaudePage {

  private saudeList = [
    {mes: 'Junho de 2017', tipo: 1},
    {mes: 'Maio de 2017', tipo: 1},
    {mes: 'Abril de 2017', tipo: 1},
    {mes: 'Março de 2017', tipo: 1},
    {mes: 'Fevereiro de 2017', tipo: 2},
    {mes: 'Janeiro de 2017', tipo: 2},
    {mes: 'Dezembro de 2016', tipo: 2},
    {mes: 'Novembro de 2016', tipo: 2},
    {mes: 'Outubro de 2016', tipo: 2},
    {mes: 'Setembro de 2016', tipo: 1},
    {mes: 'Agosto de 2016', tipo: 2},
    {mes: 'Julho de 2016', tipo: 2}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePage');
  }

}
