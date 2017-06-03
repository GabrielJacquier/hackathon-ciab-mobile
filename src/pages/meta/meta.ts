import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MetaCadastroPage } from '../meta-cadastro/meta-cadastro';

/**
 * Generated class for the MetaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-meta',
  templateUrl: 'meta.html',
})
export class MetaPage {

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetaPage');
  }

  onAddClick() {
    this.navCtrl.push(MetaCadastroPage, {
      // NavParams
    });
  }

  onItemClick() {
    this.navCtrl.push(MetaCadastroPage, {
      // NavParams
    });
  }
}
