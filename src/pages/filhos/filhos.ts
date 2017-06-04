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
      icon: 'assets/tamires-thumb.jpg',
      cpf: '635.535.851-54',
      tel: '(15)98877-6532',
      senha: '4567',
      datNasc: '06/08/2000',
      saldo: 1000,
      idade: 17,
      previdencia: 289,
      mesada: {
        frequencia: 'Semanal',
        valor: 125,
      },
      detalhesSaldo: [
        {
          data: 'Hoje',
          valor: 73.90
        },
        {
          data: 'Ontem',
          valor: 73.90
        },
        {
          data: '02/05/2017',
          valor: 93.95
        },
        {
          data: '01/05/2017',
          valor: 102.15
        },
        {
          data: '29/04/2017',
          valor: 171.50
        },
        {
          data: '28/04/2017',
          valor: 178.50
        },
        {
          data: '27/04/2017',
          valor: 178.50
        },
        {
          data: '26/04/2017',
          valor: 200
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
