import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators  } from "@angular/forms";

@Component({
  selector: 'app-r-form-final',
  templateUrl: './r-form-final.component.html',
  styleUrls: ['./r-form-final.component.css']
})
export class RFormFinalComponent implements OnInit {

  constructor(private fbuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  // studentForm : FormGroup = new FormGroup(
  //   {
  //     name:new FormControl(''),
  //     phone: new FormControl(''),
  //     email : new FormControl(''),
  //     age: new FormControl(''),
  //     address : new FormGroup({
  //       addresLine: new FormControl(''),
  //       city : new FormControl(''),
  //       state: new FormControl(''),
  //       pincode : new FormControl('')
  //     })
  //   });
  studentForm = this.fbuilder.group({
    name: ['',Validators.required],
    phone :['',Validators.pattern('[0-9]{10}')],
    email:['',Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')],
    age:['',Validators.min(18)],
    address: this.fbuilder.group({
      addresLine:[''],
      city:[''],
      state:[''],
      pincode:['',Validators.pattern('[0-9]{6}')]
    })
  })

}
