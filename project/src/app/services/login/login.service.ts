import { LoginComponent } from './../../pages/login/login.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  Login(userName: String, password: String) {
    return this.http.post<{ data: []; token: string }>(
      `http://localhost:8081/login?userName=${userName}&password=${password}`,
      {
        params: { userName, password },
      },
      {
        observe: 'body',
      }
    );
  }
  getData() {
    const token = sessionStorage.getItem('token');
    return this.http.get<{ name: String; age: Number }[]>(
      `http://localhost:8081/getData?token=${token}`
    );
  }
  // sendData(data: postData) {
  //   return this.http.post('http://localhost:8081/postData', data, {
  //     observe: 'body',
  //   });
  // }
}
