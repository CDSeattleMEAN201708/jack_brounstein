import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  name: string = "Jack"
  numbers: Array<number> // number[]

  constructor() { }

  ngOnInit() {
    this.numbers = [2, 7, 10, 382, 41, 13, 1.2]
  }

}
