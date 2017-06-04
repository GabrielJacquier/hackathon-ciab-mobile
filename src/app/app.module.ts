import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
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
import { NumeroPipe } from '../pipes/numero/numero';
import { SaudePage } from '../pages/saude/saude';

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
    NumeroPipe,
    SaudePage,
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
    SaudePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: "pt-BR"}
  ]
})
export class AppModule {}
