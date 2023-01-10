import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var x = new String('x');
    console.log(typeof x);

    var xx = 'xx';
    console.log(typeof xx);

    var xxx: string = '';

    var xxx = x.toString()
    console.log(typeof xxx);

  }

}
