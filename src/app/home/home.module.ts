import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CommentsModule } from '../comments/comments.module';
import { HomeComponent } from './home/home.component';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(HOME_ROUTES),
    CommentsModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
