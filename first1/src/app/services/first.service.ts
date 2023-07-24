import { Injectable } from '@angular/core';
import { heros } from './fitstdata';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor() {}
  getAllData() {
    return heros;
  }
}
