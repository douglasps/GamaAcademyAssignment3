import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';

const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(LOGIN_ROUTES)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
