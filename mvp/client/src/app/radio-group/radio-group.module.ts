import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { RadioGroupComponent } from './radio-group/radio-group.component';

const RADIOGROUP_ROUTES: Routes = [
  {
    path: '',
    component: RadioGroupComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(RADIOGROUP_ROUTES)
  ],
  declarations: [
    RadioGroupComponent
  ],
  exports: [
    RadioGroupComponent
  ]
})
export class RadioGroupModule { }
