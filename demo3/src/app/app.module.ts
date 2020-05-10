import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { StudentService } from './service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { RForm1Component } from './r-form1/r-form1.component';
import { RForm2Component } from './r-form2/r-form2.component';
import { RFormFinalComponent } from './r-form-final/r-form-final.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'

@NgModule({
  declarations: [
    AppComponent,
    RForm1Component,
    RForm2Component,
    RFormFinalComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [ReactiveFormComponent]
})
export class AppModule { }
