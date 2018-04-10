import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { RadioComponent } from './radio/radio.component';

const RADIO_ROUTES: Routes = [
  {
    path: '',
    component: RadioComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(RADIO_ROUTES)
  ],
  declarations: [
    RadioComponent
  ],
  exports: [
    RadioComponent
  ]
})
export class RadioModule { }
