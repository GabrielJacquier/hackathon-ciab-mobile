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
      nome: 'Tamires Polis',
      icon: '../assets/tamires-thumb.jpg',
      cpf: '635.535.851-54',
      tel: '(15)98877-6532',
      senha: '4567',
      datNasc: '06/08/2000',
      saldo: 1000,
      idade: 17,
      previdencia: 289,
      extrato: [
        {
          descricao: "Mc Donalds",
          valor: 23.80
        }
      ],
      metas: [
        {
          nome: 'Comprar celular',
          valorMeta: 1000,
          valorAcumulado: 500,
          historico: []
        },
        {
          nome: 'Comprar Ingresso Show',
          valorMeta: 300,
          valorAcumulado: 50,
          historico: []
        }
      ]
    });
  }

  onAddClick(event) {
    this.navCtrl.push(FilhosCadastroPage, {
     items: this.items
    });
  }

  onItemClick(event, item) {
    this.navCtrl.push(FilhosDetalhePage, {
      filho: item
    });
  }
}
