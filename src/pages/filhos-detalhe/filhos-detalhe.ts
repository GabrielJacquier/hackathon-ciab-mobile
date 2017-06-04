import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MesadaPage } from '../mesada/mesada';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the FilhosDetalhePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-filhos-detalhe',
  templateUrl: 'filhos-detalhe.html',
})
export class FilhosDetalhePage {

  private filho:any;
  private visoes:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filho = this.navParams.data.filho;
    this.visoes = 'metas';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilhosDetalhePage');
  }

  onPerfilClick(event) {
    this.navCtrl.push(PerfilPage, {
      filho: this.filho
    });
  }

  onTimelineClick(event) {
    
  }

  onMesadaClick(event) {
    this.navCtrl.push(MesadaPage, {
      filho: this.filho
    });
  }

  onSegmentChanged(event) {

  }
}
