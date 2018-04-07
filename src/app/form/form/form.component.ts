import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  pageTitle = 'Form';
  loading = true;
  error: boolean;

  constructor(
    private title: Title,
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

}
