import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MesadaPage } from '../mesada/mesada';
import { MetaPage } from '../meta/meta';
import { PerfilPage } from '../perfil/perfil';
import { TimelinePage } from '../timeline/timeline';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filho = this.navParams.data.filho;
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
    this.navCtrl.push(TimelinePage, {
      filho: this.filho
    });
  }

  onMesadaClick(event) {
    this.navCtrl.push(MesadaPage, {
      filho: this.filho
    });
  }

  onMetaClick(event) {
    this.navCtrl.push(MetaPage, {
      filho: this.filho
    });
  }
}
