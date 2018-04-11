import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'thankyou',
    loadChildren: './thank-you/thank-you.module#ThankYouModule',
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: '',
    loadChildren: './technical-test/technical-test.module#TechnicalTestModule',
    pathMatch: 'full',
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
