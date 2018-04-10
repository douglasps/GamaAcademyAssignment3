import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { QuestionList } from '../../core/questionList';
import { Question } from '../../core/question';

@Component({
  selector: 'app-technical-test',
  templateUrl: './technical-test.component.html',
  styleUrls: ['./technical-test.component.css']
})
export class TechnicalTestComponent implements OnInit {
  paramSub: Subscription;
  loading = true;
  error: boolean;
  questionList: QuestionList;
  position:  number = 0;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit() {
    this.questionList = this.api.getQuestions$();
  }

  selectionChanged(){
    this.position = this.questionList.questions.reduce((total, question)=> total+= (question.isFilled ? 1 : 0), 0);
  }

  back(){
    this.position -= 1;
  }

  submiteTechnicalTest(){
    let valid = true;
    this.questionList.questions.forEach(q =>{
      if(q.selectionedOption == -1)
      {
        q.style = 'required';
        valid = false;
      }
      else
        q.style = '';
    });

    if(valid){
      var score = this.questionList.calculateScore();
      alert(score.message);
      this.api.saveQuestions();
      this.router.navigateByUrl('thankyou');
    }
  }
}
