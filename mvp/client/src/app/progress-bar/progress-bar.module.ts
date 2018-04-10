import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const PROGRESSBAR_ROUTES: Routes = [
  {
    path: '',
    component: ProgressBarComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(PROGRESSBAR_ROUTES)
  ],
  declarations: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule { }
