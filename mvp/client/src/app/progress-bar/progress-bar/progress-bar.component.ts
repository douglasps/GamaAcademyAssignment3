import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent {
  @Input() position: number = 0;
  @Input() total: number = 12;

  getPositions(){
    let count = this.position < this.total ? this.position + 1 : this.total;
    return new Array(count);
  }
}
