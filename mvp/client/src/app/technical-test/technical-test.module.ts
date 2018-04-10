import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { TechnicalTestComponent } from './technical-test/technical-test.component';
import { RadioGroupComponent } from '../radio-group/radio-group/radio-group.component';
import { RadioComponent } from '../radio/radio/radio.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar/progress-bar.component';

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
    RouterModule.forChild(TECHNICALTEST_ROUTES)
  ],
  declarations: [
    TechnicalTestComponent,
    RadioGroupComponent,
    RadioComponent,
    ProgressBarComponent
  ]
})
export class TechnicalTestModule { }
