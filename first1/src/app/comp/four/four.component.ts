import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  // styleUrls: ['./four.component.css'],
  styles: ['h1 {background-color : red}', '.staff{color:red}'],
})
export class FourComponent {
  @Input() data = 0;
  @Output() voted = new EventEmitter<number>();

  ngOnInit() {
    console.log(this.data);

    console.log('rendered');
  }
  ngOnChanges() {
    // alert('file chanbged ' + this.data);
  }
  changeChild() {
    this.voted.emit(this.data + 1);
  }
  internalChangeChild() {
    this.data += 1;
  }
}
