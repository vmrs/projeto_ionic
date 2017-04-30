import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Detalhar } from './detalhar';

@NgModule({
  declarations: [
    Detalhar,
  ],
  imports: [
    IonicPageModule.forChild(Detalhar),
  ],
  exports: [
    Detalhar
  ]
})
export class DetalharModule {}
