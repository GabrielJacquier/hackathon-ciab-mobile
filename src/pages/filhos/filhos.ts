import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilhosCadastroPage } from '../filhos-cadastro/filhos-cadastro';
import { FilhosDetalhePage } from '../filhos-detalhe/filhos-detalhe';

@Component({
  selector: 'page-filhos',
  templateUrl: 'filhos.html'
})
export class FilhosPage {
  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push({
      nome: 'Tamires',
      saldo: 1000,
      idade: 19,
      previdencia: 289,
      extrato: [],
      metas: [
        {
          nome: 'Comprar celular',
          valorMeta: 1000,
          valorAcumulado: 500,
          historico: []
        }
      ]
    });
  }

  onAddClick(event) {
    this.navCtrl.push(FilhosCadastroPage, {
      // NavParams
    });
  }

  onItemClick(event, item) {
    this.navCtrl.push(FilhosDetalhePage, {
      filho: item
    });
  }
}
