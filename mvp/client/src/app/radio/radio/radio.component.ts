import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { Option } from '../../core/option';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent  {
  
  @Input() option: Option;
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private title: Title
  ) { 
  }

  onRadioClicked(radio){
    this.selected.emit(radio.value);
  }
}
