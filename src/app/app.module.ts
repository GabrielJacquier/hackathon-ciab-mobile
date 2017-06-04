import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FilhosPage } from '../pages/filhos/filhos';
import { FilhosCadastroPage } from '../pages/filhos-cadastro/filhos-cadastro';
import { FilhosCadastroConfirmacaoPage } from '../pages/filhos-cadastro-confirmacao/filhos-cadastro-confirmacao';
import { FilhosDetalhePage } from '../pages/filhos-detalhe/filhos-detalhe';
import { MesadaPage } from '../pages/mesada/mesada';
import { PerfilPage } from '../pages/perfil/perfil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilhosPage,
    FilhosCadastroPage,
    FilhosCadastroConfirmacaoPage,
    FilhosDetalhePage,
    MesadaPage,
    PerfilPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilhosPage,
    FilhosCadastroPage,
    FilhosCadastroConfirmacaoPage,
    FilhosDetalhePage,
    MesadaPage,
    PerfilPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
