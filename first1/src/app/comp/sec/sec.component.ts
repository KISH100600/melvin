import { Component, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KishDirective } from 'src/app/kish.directive';
@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css'],
})
export class SecComponent {
  names = new Date();
  dataArray = [1, 2, 3, 4, 45, 6, 6, 7, 8, 9, 9, 9];
  public constructor(public router: Router, public route: ActivatedRoute) {
    console.log(route.snapshot.paramMap.get('ids'));
  }
  gotoFirst() {
    this.router.navigate(['second/', 4]);
  }
}
