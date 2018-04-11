import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { QuestionList } from '../../core/questionList';
import { Question } from '../../core/question';

@Component({
  selector: 'app-technical-test',
  templateUrl: './technical-test.component.html',
  styleUrls: ['./technical-test.component.css']
})

export class TechnicalTestComponent implements OnInit {
  questionList: QuestionList;
  position:  number = 0;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) { 
    this.questionList = this.api.getQuestions$();
  }

  groupVisible(i){
    return i == this.position;
  }

  ngOnInit() {
    this.questionList = this.api.getQuestions$();
  }

  selectionChanged(){
    this.position = this.questionList.questions.reduce((total, question)=> total+= (question.isFilled ? 1 : 0), 0);
  }

  back(){
    this.position -= 1;
  }


  submiteTechnicalTest(event){
    event.preventDefault();
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
      //document.querySelector('#scoreMessage').innerHTML = (score.message);
      this.api.saveQuestions();     
      this.router.navigateByUrl('thankyou');
    }
  }
}
