import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Formvalidators } from '../validators/formvalidators';

@Component({
  selector: 'app-rf-conditional',
  templateUrl: './rf-conditional.component.html',
  styleUrls: ['./rf-conditional.component.css']
})
export class RfConditionalComponent implements OnInit {

  constructor(private fbuilder: FormBuilder) { }
  signUp: FormGroup;

  ngOnInit(): void {
    this.signUp = this.fbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      mail: [''],
      phone: ['']
    }, { validator: Formvalidators.passwordMatchValidator })
  }

}
