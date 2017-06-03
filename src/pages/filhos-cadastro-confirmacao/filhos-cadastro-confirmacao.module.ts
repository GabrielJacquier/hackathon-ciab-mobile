import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilhosCadastroConfirmacaoPage } from './filhos-cadastro-confirmacao';

@NgModule({
  declarations: [
    FilhosCadastroConfirmacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(FilhosCadastroConfirmacaoPage),
  ],
  exports: [
    FilhosCadastroConfirmacaoPage
  ]
})
export class FilhosCadastroConfirmacaoPageModule {}
