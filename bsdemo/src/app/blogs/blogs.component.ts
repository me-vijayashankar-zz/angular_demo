import { Component, OnInit, Input } from '@angular/core';
import { BlogModel } from '../blog-model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }
@Input("blog") blog : BlogModel
  ngOnInit(): void {
  }

}
