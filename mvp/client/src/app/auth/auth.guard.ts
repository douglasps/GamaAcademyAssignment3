import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../core/api.service';
import { AuthToken } from './auth.token';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private api: ApiService,
    private token: AuthToken) { }

  get loggedIn() : boolean{
    return this.token.token != null;
  }

  logout(){
    this.token.token = null;
    this.router.navigateByUrl('login');
  }

  autenticate(email: string, password: string){
    return new Promise(resolve =>{
      this.api.autenticate(email, password)
      .then(autenticated => {
        if(autenticated)
        {
          this.token.token = { email: email };
          this.router.navigateByUrl('/');
        }
        resolve(autenticated);
      });
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
