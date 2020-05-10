import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './service/student.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private student: StudentService) { }

  message: string = '';
  isSubmitted: boolean = false;
  ngOnInit(): void {
    this.student.getOneStudent().subscribe(data => this.stu = data, error => this.error = error);
    console.log('checking..........')
    console.log(this.error);

  }

  error: any;
  title = 'demo3';
  isCourseInValid: boolean = false;
  stu: Student = new Student('', 0, '', '', '');
  result: any;
  ischoosed(c) {
    console.log(c);
    if (c === 'course') {
      this.isCourseInValid = true;
    }
    else {
      this.isCourseInValid = false;
    }
  }


  saveStudent() {
    this.student.saveStudent(this.stu).subscribe(
      Response => {
        this.stu = Response
      },
      error => {
        this.error = error
        this.message = "Error occured!! try again";
        console.log(error)
      },
      () => {
        this.isSubmitted = true
        this.message = ''
      }
    );
  }
  test(a){
    console.log(a);
  }
}
