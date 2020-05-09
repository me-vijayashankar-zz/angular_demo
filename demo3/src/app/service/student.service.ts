import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Student } from '../student';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public getOneStudent(): Observable<Student>{
    return this.http.get<Student>('http://localhost:8080/stu/one');
  }

  public saveStudent(stu : Student) :Observable<Student>{
    return this.http.post<Student>('http://localhost:8080/stu/save',stu)
    .pipe(
      catchError(this.handleError)
  );
  }
  handleError(error : HttpErrorResponse ) {
    return throwError(error);
}

}
