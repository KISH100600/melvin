import { LoginService } from './../../services/login/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(public login: LoginService) {}
  data: { name: String; age: Number }[] = [];
  ngOnInit() {
    this.login.getData().subscribe((body) => (this.data = body));
  }
}
