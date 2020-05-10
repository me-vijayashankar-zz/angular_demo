import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { StudentService } from '../service/student.service';
import { Student } from '../student';
import { Formvalidators } from '../validators/formvalidators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fbuilder: FormBuilder, private stu: StudentService) { }

  // studentForm : FormGroup;
  student: Student
  min=17;
  max=31;
  ngOnInit(): void {
    // this.stu.getOneStudent().subscribe(
    //   data => {
    //     this.student = data;
    //   })
  }

  // onLoad() {
  //   this.studentForm.patchValue({
  //     name: this.student.Name,
  //     phone: this.student.Phone,
  //     mail: this.student.Mail,
  //     age: 24
  //   })


  // }


  // studentForm : FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   phone:new FormControl(''),
  //   mail:new FormControl(''),
  //   age:new FormControl(''),
  //   address:new FormGroup({
  //     addressLine:new FormControl(''),
  //     city :new FormControl(''),
  //     state : new FormControl(''),
  //     pin : new FormControl('')
  //   })
  // });
  studentForm = this.fbuilder.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    mail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
    age: ['', Formvalidators.ageValidator_builder(this.min,this.max)],
    address: this.fbuilder.group({
      addressLine: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required]
    })
  })
  studentName = this.studentForm.get('name');
  studentPhone = this.studentForm.get('phone');
  studentAge = this.studentForm.get('age');
  studentPin = this.studentForm.get('address').get('pin');
}
