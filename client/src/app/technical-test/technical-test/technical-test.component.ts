import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { Question } from '../../core/question';

@Component({
  selector: 'app-technical-test',
  templateUrl: './technical-test.component.html',
  styleUrls: ['./technical-test.component.css']
})
export class TechnicalTestComponent implements OnInit, OnDestroy {
  paramSub: Subscription;
  loading = true;
  error: boolean;
  questions$: Observable<Question[]>;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private title: Title
  ) { }

  ngOnInit() {
    this.paramSub = this.route.params
      .subscribe(
        params => {
          this.questions$ = this.api.getQuestions$().pipe(
            tap(val => this._onNext(val)),
            catchError((err, caught) => this._onError(err, caught))
          );
        }
      );
  }

  private _onNext(val: Question[]) {
    this.loading = false;
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

  ngOnDestroy() {
    this.paramSub.unsubscribe();
  }

}
