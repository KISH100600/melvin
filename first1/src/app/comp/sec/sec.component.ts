import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css'],
})
export class SecComponent {
  public constructor(public router: Router, public route: ActivatedRoute) {
    console.log(route.snapshot.paramMap.get('ids'));
  }
  gotoFirst() {
    this.router.navigate(['second/', 4]);
  }
}
