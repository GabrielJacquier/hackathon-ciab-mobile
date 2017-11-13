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
    {mes: 'June 2017', tipo: 1},
    {mes: 'May 2017', tipo: 1},
    {mes: 'April 2017', tipo: 1},
    {mes: 'March 2017', tipo: 1},
    {mes: 'February 2017', tipo: 2},
    {mes: 'January 2017', tipo: 2},
    {mes: 'December 2016', tipo: 2},
    {mes: 'November 2016', tipo: 2},
    {mes: 'October 2016', tipo: 2},
    {mes: 'September 2016', tipo: 1},
    {mes: 'August 2016', tipo: 2},
    {mes: 'July 2016', tipo: 2}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePage');
  }

}
