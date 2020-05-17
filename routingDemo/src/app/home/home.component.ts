import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
  }
  navigateToChild1(){
    this.router.navigate(['home/child1']);
  }
}
