import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Formvalidators } from '../validators/formvalidators';

@Component({
  selector: 'app-r-form2',
  templateUrl: './r-form2.component.html',
  styleUrls: ['./r-form2.component.css']
})
export class RForm2Component implements OnInit {

  constructor(private fbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  studentForm = this.fbuilder.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    age:['',[this.ageRangeValidator]],
    address: this.fbuilder.group({
      addressline: [''],
      city: [''],
      state: [''],
      PostalCode: ['', [this.pincodeValidator]]
    })
  });

  testVal: string;
  saveStudent() {
    console.log(this.studentForm.value);
  }
  testClck() {
    var patt = new RegExp('[0-9]');
    console.log(this.testVal);
    console.log(patt.test(this.testVal))
  }
  pincodeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    var patt = new RegExp('[0-9]{6}');  
    if(control.value !== undefined && (isNaN(control.value) || !patt.test(control.value))) return {'pin':true}
    return null;
  }

   ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
 
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        return { 'ageRange': true };
    }
    return null;
}

// function ageRangeValidator(min: number, max: number): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: boolean } | null => {
//       if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
//           return { 'ageRange': true };
//       }
//       return null;
//   };
// }

}
