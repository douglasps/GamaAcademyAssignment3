import { Component } from '@angular/core';
import { AuthToken } from '../../auth/auth.token';
import { AuthGuard } from '../../auth/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public token: AuthToken, private guard: AuthGuard) {}

  logout(){
    this.guard.logout();
  }
}
