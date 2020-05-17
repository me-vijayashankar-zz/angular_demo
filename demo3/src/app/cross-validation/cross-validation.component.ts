import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-cross-validation',
  templateUrl: './cross-validation.component.html',
  styleUrls: ['./cross-validation.component.css']
})
export class CrossValidationComponent implements OnInit {

  constructor(private fbuilder: FormBuilder) { }
  signUp: FormGroup;

  ngOnInit(): void {
    this.signUp = this.fbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
      mail: [''],
      phone: ['']
    }, {
      validators: [this.passWordMismatch,this.validationcheck]
    })
  }

  // passWordMismatch(control: AbstractControl): ValidationErrors | null {
  //   const parent = control.parent;
  //   const password = parent.controls['password']
  //   if (password.value !== control.value) {
  //     return { 'misMatch': true }
  //   }
  //   return {'misMatch': true};
  // }
  passWordMismatch(group: FormGroup): ValidationErrors | null {
    const password = group.controls['password']
    const confirmPassword = group.controls['confirmPassword']
    const mobile = group.controls['mail']
    const mail = group.controls['phone']


    if (password.value !== confirmPassword.value) {
      return { 'mismatch': true }
    }
    console.log(mobile.value);
    if(mobile.value!==''){
      return {'mobileEmpty':true}
    }

    return null;

  }
  validationcheck(): null {
    console.log('validating .............')
    return null;
  }

}
