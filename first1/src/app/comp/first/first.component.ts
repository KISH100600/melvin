import { hero } from 'src/app/services/fitstdata';
import { FirstService } from './../../services/first.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  constructor(public FirstServe: FirstService) {}
  data = 0;
  heros: hero[] = [];
  change() {
    this.data += 1;
  }
  userName = new FormControl();
  password = new FormControl();
  onVoted(num: number) {
    this.data += num;
  }

  ngOnInit() {
    const get = this.FirstServe.getAllData();
    get.subscribe((data) => {
      console.log(data);

      this.heros = data;
    });
    console.log(this.heros);
  }
  sendData() {
    this.FirstServe.sendData({
      userName: this.userName.value,
      password: this.password.value,
    }).subscribe((data) => console.log(data));
  }
}
