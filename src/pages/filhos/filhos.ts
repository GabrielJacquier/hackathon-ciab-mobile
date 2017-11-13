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
      icon: 'assets/tamires-thumb.png',
      cpf: '078-08-5629',
      tel: '(487) 877-6532',
      senha: '4567',
      datNasc: '08/06/2000',
      saldo: 73.9,
      idade: 17,
      previdencia: 289,
      mesada: {
        frequencia: 'Weekly',
        valor: 125,
      },
      detalhesSaldo: [
        {
          data: 'Today',
          valor: 73.90
        },
        {
          data: 'Yesterday',
          valor: 73.90
        },
        {
          data: '05/02/2017',
          valor: 93.95
        },
        {
          data: '05/01/2017',
          valor: 102.15
        },
        {
          data: '04/29/2017',
          valor: 171.50
        },
        {
          data: '04/28/2017',
          valor: 53.50
        },
        {
          data: '04/27/2017',
          valor: 58.70
        },
        {
          data: '04/26/2017',
          valor: 102
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
