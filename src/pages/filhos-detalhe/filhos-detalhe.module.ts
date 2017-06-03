import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilhosDetalhePage } from './filhos-detalhe';

@NgModule({
  declarations: [
    FilhosDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(FilhosDetalhePage),
  ],
  exports: [
    FilhosDetalhePage
  ]
})
export class FilhosDetalhePageModule {}
