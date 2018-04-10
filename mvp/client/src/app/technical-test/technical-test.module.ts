import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { TechnicalTestComponent } from './technical-test/technical-test.component';

const TECHNICALTEST_ROUTES: Routes = [
  {
    path: '',
    component: TechnicalTestComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(TECHNICALTEST_ROUTES),
  ],
  declarations: [
    TechnicalTestComponent
  ],
  exports: [
    TechnicalTestComponent
  ]
})
export class TechnicalTestModule { }
