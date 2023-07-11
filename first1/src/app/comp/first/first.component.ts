import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  data = 0;
  change() {
    this.data += 1;
  }

  onVoted(num: number) {
    this.data += num;
  }
}
