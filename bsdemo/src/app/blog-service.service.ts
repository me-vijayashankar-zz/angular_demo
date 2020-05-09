import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModel } from './blog-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http: HttpClient) { }

  public getAllBlogs(): Observable<BlogModel[]> {

    let output= this.http.get<BlogModel[]>('http://localhost:8080/blogs/getall');
    console.log(output);
    return output;
  }

}
