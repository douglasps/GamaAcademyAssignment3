import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { RadioGroupComponent } from './radio-group/radio-group.component';

import { RadioComponent } from '../radio/radio/radio.component';
import { RadioModule } from '../radio/radio.module';

const RADIOGROUP_ROUTES: Routes = [
  {
    path: '',
    component: RadioGroupComponent,
    children:[
      {
        path: '', 
        component: RadioComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(RADIOGROUP_ROUTES)
  ]
})
export class RadioGroupModule {
 }
