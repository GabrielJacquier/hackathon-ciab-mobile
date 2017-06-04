import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaudePage } from './saude';

@NgModule({
  declarations: [
    SaudePage,
  ],
  imports: [
    IonicPageModule.forChild(SaudePage),
  ],
  exports: [
    SaudePage
  ]
})
export class SaudePageModule {}
