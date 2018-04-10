import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  paramSub: Subscription;
  loading = true;
  error: boolean;
  @Input() position: number = 0;
  @Input() total: number = 12;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private title: Title
  ) { }

  getPositions(){
    let count = this.position < this.total ? this.position + 1 : this.total;
    return new Array(count);
  }
}
