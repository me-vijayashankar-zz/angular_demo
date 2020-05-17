import { Directive, ElementRef, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appD2]'
})
export class D2Directive {

  constructor(private elRef : ElementRef) { }
  @Input('appD2') color : string[];

  ngOnInit(){
    console.log(this.color)
    this.elRef.nativeElement.style.color=this.color[0];
  }

  @HostListener('mouseover')
  onHover(){
    this.elRef.nativeElement.style.color='green';
  }
  @HostListener('mouseout')
  onUnHover(){
    this.elRef.nativeElement.style.color=this.color[0];
  }
}
