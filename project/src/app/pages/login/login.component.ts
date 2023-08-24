import { LoginService } from './../../services/login/login.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName = new FormControl();
  password = new FormControl();
  constructor(public loginService: LoginService, public router: Router) {}
  login() {
    this.loginService.Login(this.userName.value, this.password.value).subscribe(
      (data) => {
        console.log(data.token);

        sessionStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => alert('Invalid user name or password')
    );
  }
}
