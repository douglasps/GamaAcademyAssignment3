import { Component, OnInit, OnDestroy} from '@angular/core';
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
  message: string;
  messageAreaPreVendas: string;
  messageAreaVendas: string;
  messageTecnicas: string;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private title: Title,
    public auth: AuthGuard,
    private router: Router,
  ) 
  { 
    this.questionList = this.api.getQuestions$();
    var score = this.questionList.calculateScore();
    this.message = (score.message);
    //this.messageAreaPreVendas = ();
    //this.messageAreaVendas = ();
    //this.messageTecnicas = ();
  }

  getPageTitle(): string {
    return this.title.getTitle();
  }
}
