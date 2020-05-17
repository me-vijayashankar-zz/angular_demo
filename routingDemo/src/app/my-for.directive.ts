import { Directive, TemplateRef, ViewContainerRef, OnInit, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appMyFor]'
})
export class MyForDirective implements OnInit, OnChanges {

  @Input() appMyForOf: Array<any>;
  // @Input() appMyFor: Array<any>;
  

  constructor(private temRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

    // for (const input of this.appMyForOf) {
    //   this.viewRef.createEmbeddedView(this.temRef, {
    //     $implicit: input,
    //     index: this.appMyForOf.indexOf(input),
    //   });
    // }
    console.log(this.appMyForOf);
    // console.log(this.);
    
  }
  ngOnInit(): void {
  }
}
