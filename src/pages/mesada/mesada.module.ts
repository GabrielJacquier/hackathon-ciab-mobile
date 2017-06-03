import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesadaPage } from './mesada';

@NgModule({
  declarations: [
    MesadaPage,
  ],
  imports: [
    IonicPageModule.forChild(MesadaPage),
  ],
  exports: [
    MesadaPage
  ]
})
export class MesadaPageModule {}
