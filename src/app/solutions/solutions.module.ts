import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CommentsModule } from '../comments/comments.module';
import { SolutionsComponent } from './solutions/solutions.component';

const SOLUTIONS_ROUTES: Routes = [
  {
    path: '',
    component: SolutionsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(SOLUTIONS_ROUTES),
    CommentsModule
  ],
  declarations: [
    SolutionsComponent
  ]
})
export class SolutionsModule { }
