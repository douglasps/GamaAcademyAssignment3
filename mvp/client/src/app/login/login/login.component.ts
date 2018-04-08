import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { QuestionList } from '../../core/questionList';
import { Question } from '../../core/question';
import {NgForm} from '@angular/forms';
import { AuthGuard } from '../../auth/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  paramSub: Subscription;
  loading = true;
  error: boolean;
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

  private _onError(err, caught): Observable<any> {
    this.loading = false;
    this.error = true;
    return Observable.throw('An error occurred fetching detail data for this dog.');
  }

  getPageTitle(question: Question[]): string {
    //const pageTitle = `#${question.question}: ${question.answer}`;
    //this.title.setTitle(pageTitle);
    //return pageTitle;
    return this.title.getTitle();
  }

  getImgStyle(url: string) {
    return `url(${url})`;
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
