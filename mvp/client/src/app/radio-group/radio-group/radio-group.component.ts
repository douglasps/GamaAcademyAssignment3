import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { Question } from '../../core/question';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent {
  paramSub: Subscription;
  loading = true;
  error: boolean;
  @Input() question: Question;
  @Input() number: number;
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private title: Title
  ) { }

  getImgStyle(url: string) {
    return `url(${url})`;
  }

  selectedChanged(event){
    this.question.selectionedOption = event;
    this.selected.emit(event);
  }
}
