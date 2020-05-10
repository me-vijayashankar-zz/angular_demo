import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-r-form1',
  templateUrl: './r-form1.component.html',
  styleUrls: ['./r-form1.component.css']
})
export class RForm1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // name = new FormControl('');
  studentForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    address: new FormGroup({
      addressline : new FormControl(''),
      city :new FormControl(''),
      state:new FormControl(''),
      PostalCode : new FormControl('')
    })
  });

  saveStudent(){
    console.log(this.studentForm.value);
  }

}
