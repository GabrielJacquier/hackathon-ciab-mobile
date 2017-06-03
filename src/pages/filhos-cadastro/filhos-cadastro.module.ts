import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilhosCadastroPage } from './filhos-cadastro';

@NgModule({
  declarations: [
    FilhosCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(FilhosCadastroPage),
  ],
  exports: [
    FilhosCadastroPage
  ]
})
export class FilhosCadastroPageModule {}
