import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, AfterViewChecked } from '@angular/core';
import { Hook1Component } from '../hook1/hook1.component';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements  OnInit,AfterViewChecked {

  constructor() { }
  ngAfterViewChecked(): void {
    console.log(this.child);
    
  }

 @ViewChild(Hook1Component) child :Hook1Component


  testInput = 'helooo';
  changed: number = 0
  ngOnInit(): void {
  }

  // ngAfterViewInit (){
  //   console.log('hloo it is viewed')
  //   console.log(this.child);
    
  // }




}
