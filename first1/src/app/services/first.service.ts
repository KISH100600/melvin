import { Injectable } from '@angular/core';
import { hero, heros } from './fitstdata';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor(private http: HttpClient) {}
  getAllData() {
    return this.http.get<hero[]>('http://localhost:8081/getData');
  }
}
