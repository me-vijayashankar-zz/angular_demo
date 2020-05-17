import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-test2',
  templateUrl: './d-test2.component.html',
  styleUrls: ['./d-test2.component.css']
})
export class DTest2Component implements OnInit {

  constructor() { }
  numbers = [1, 2, 3];
  test="this is a test and this testing string have a test and show how many a as result";

  ngOnInit(): void {
  }

}
