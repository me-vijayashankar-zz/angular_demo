import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  output: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this .output=this.route.snapshot.paramMap.get('lstvalue');
    this.route.paramMap.subscribe(param => this.output = param.get('lstvlue'));
  }

}
