import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent {
  firstInput = new FormControl();
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  updateNAme() {
    this.firstInput.setValue('kish');
  }
  reset() {
    this.firstInput.reset();
  }
}
