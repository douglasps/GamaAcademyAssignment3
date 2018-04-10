import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { QuestionList } from '../../core/questionList';
import { Question } from '../../core/question';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthGuard } from '../../auth/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  model;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private title: Title,
    public auth: AuthGuard,
    private router: Router
  ) { 
    this.model = {
      email: null,
      password: null
    };
  }

  onSubmit(f: NgForm) {

    if(f.valid){
      this.auth.autenticate(this.model.email, this.model.password)
        .then(autenticated => {
          if(!autenticated)
            alert('E-mail e/ou senha incorretos.');
        });
    }
  }
}
