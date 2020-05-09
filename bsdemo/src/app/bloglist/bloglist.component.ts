import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { BlogModel } from '../blog-model';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  blogs : BlogModel[];
  constructor(private blgService : BlogServiceService) { }

  ngOnInit(): void {
    this.blgService.getAllBlogs().subscribe(data=>this.blogs=data);
    console.log(this.blogs);
  }

}
