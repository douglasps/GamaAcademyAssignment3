import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { QuestionList, Score } from '../../core/questionList';
import { Question } from '../../core/question';
import {NgForm} from '@angular/forms';
import { AuthGuard } from '../../auth/auth.guard';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})

export class ThankYouComponent{
  paramSub: Subscription;
  loading = true;
  error: boolean;
  model;
  questionList: QuestionList;
  score: Score;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private title: Title,
    public auth: AuthGuard,
    private router: Router,
  ) 
  { 
    this.questionList = this.api.getQuestions$();
    this.score = this.questionList.calculateScore();
  }

  getPageTitle(): string {
    return this.title.getTitle();
  }
}
