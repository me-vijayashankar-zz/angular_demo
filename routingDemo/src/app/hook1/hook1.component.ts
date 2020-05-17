import { Component, DoCheck, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook1',
  templateUrl: './hook1.component.html',
  styleUrls: ['./hook1.component.css']
})
export class Hook1Component implements OnInit,DoCheck {
  changed: any = 0;
  changeLog: any;
  doCheckCount=0;


  constructor() { }
  ngDoCheck(): void {
    this.doCheckCount++;
  }
  @Input('fromHook') fromHook: string
  ngOnInit(): void {
    console.log('from on init:' + this.fromHook);

  }
  ngOnChanges(changes: SimpleChanges): void {

    // this.changed++;
    // console.log(this.changed);

    // console.log(changes);

    // for (let propName in changes) {
    //   // console.log(propName)
    //   let chng = changes[propName];
    //   let cur = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    //   console.log(chng.currentValue + '--' + prev)
    // }
    this.changeLog=changes;

  }
}
