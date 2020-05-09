import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bsdemo';

  strButtonName : string = "show blogs";
  flgBlogsVisible : boolean = false;
  toggleBlocks(){
    if (this.flgBlogsVisible){
      this.strButtonName="hide blogs";
      this.flgBlogsVisible = false
    }else{
      this.strButtonName="show blogs";
      this.flgBlogsVisible = true
    }
  }

}
