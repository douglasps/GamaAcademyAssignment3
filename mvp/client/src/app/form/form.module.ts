import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CommentsModule } from '../comments/comments.module';
import { FormComponent } from './form/form.component';

const FORM_ROUTES: Routes = [
  {
    path: '',
    component: FormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(FORM_ROUTES),
    CommentsModule
  ],
  declarations: [
    FormComponent
  ]
})
export class FormModule { }