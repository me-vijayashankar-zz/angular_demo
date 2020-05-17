import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appD1]'
})
export class D1Directive {

  constructor(private elref: ElementRef) { }

  @HostListener('mouseover') 
  onHover(){
    this.elref.nativeElement.style.color='green';
  }
  // mouseout
  @HostListener('mouseout') 
  onUnHover(){
    this.elref.nativeElement.style.color='blue';
  }

  ngOnInit() {
    this.elref.nativeElement.style.color = 'blue';
  }

}
