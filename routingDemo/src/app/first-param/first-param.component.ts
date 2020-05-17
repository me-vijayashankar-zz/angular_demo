import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-param',
  templateUrl: './first-param.component.html',
  styleUrls: ['./first-param.component.css']
})
export class FirstParamComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router) { }
  paramvalue: any

  ngOnInit(): void {
    // this.paramvalue= this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => {
      this.paramvalue = params.get('id');
    })
  }
  goToApp(){
    this.router.navigate(['first',{lstvlue:this.paramvalue}]);
  }

}
