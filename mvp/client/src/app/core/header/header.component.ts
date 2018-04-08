import { Component } from '@angular/core';
import { AuthToken } from '../../auth/auth.token';
import { AuthGuard } from '../../auth/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    img {
      border-radius: 100px;
      width: 30px;
    }
    .loading { line-height: 31px; }
    .home-link { color: #212529; }
    .home-link:hover { text-decoration: none; }
  `]
})
export class HeaderComponent {

  constructor(private token: AuthToken, private guard: AuthGuard) {}

  logout(){
    this.guard.logout();
  }
}
