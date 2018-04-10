import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { Question } from '../../core/question';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent{
  @Input() question: Question;
  @Input() number: number;
  @Input() visible: boolean = true;
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private title: Title
  ) { 
  }

  selectedChanged(event){
    this.question.selectionedOption = event;
    this.selected.emit(event);
  }
}
