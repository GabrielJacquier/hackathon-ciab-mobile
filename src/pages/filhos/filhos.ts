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
      detalhesSaldo: [
        {
          data: 'Hoje',
          valor: 83.90
        },
        {
          data: 'Ontem',
          valor: 73.90
        },
        {
          data: '02/05/2017',
          valor: 63.90
        },
        {
          data: '01/05/2017',
          valor: 57.30
        },
        {
          data: '29/04/2017',
          valor: 60
        },
        {
          data: '28/04/2017',
          valor: 50
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
