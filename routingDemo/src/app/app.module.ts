import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { Child1Component } from './child1/child1.component';
import { PnfComponent } from './pnf/pnf.component';
import { Child2Component } from './child2/child2.component';
import { FirstParamComponent } from './first-param/first-param.component';
import { HooksComponent } from './hooks/hooks.component';
import { Hook1Component } from './hook1/hook1.component';
import { FormsModule } from "@angular/forms";
import { DTestComponent } from './d-test/d-test.component';
import { D1Directive } from './d1.directive';
import { DTest2Component } from './d-test2/d-test2.component';
import { D2Directive } from './d2.directive';
import { DelayDirective } from './delay.directive';
import { MyIfDirective } from './my-if.directive';
import { MyForDirective } from './my-for.directive';
import { WordcountPipe } from './wordcount.pipe';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      FirstComponent,
      Child1Component,
      PnfComponent,
      Child2Component,
      FirstParamComponent,
      HooksComponent,
      Hook1Component,
      DTestComponent,
      D1Directive,
      DTest2Component,
      D2Directive,
      DelayDirective,
      MyIfDirective,
      MyForDirective,
      WordcountPipe,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
