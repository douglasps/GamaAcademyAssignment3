import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ThankYouComponent } from './thank-you/thank-you.component';

const THANKYOU_ROUTES: Routes = [
  {
    path: '',
    component: ThankYouComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(THANKYOU_ROUTES)
  ],
  declarations: [
    ThankYouComponent
  ]
})
export class ThankYouModule { }
