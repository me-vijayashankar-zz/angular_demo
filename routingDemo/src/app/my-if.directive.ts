import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective implements OnInit {

  constructor(private templateref: TemplateRef<any>, private viewRef: ViewContainerRef) { }
  @Input('appMyIf') isVisible: boolean
  ngOnInit(): void {
    if (this.isVisible) {
      this.viewRef.createEmbeddedView(this.templateref)
    }
  }

}
