import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { Child1Component } from './child1/child1.component';
import { PnfComponent } from './pnf/pnf.component';
import { Child2Component } from './child2/child2.component';
import { FirstParamComponent } from './first-param/first-param.component';
import { HooksComponent } from './hooks/hooks.component';
import { DTestComponent } from './d-test/d-test.component';
import { DTest2Component } from './d-test2/d-test2.component';


const routes: Route[] = [

  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ]

  },
  {
    path:'first/:id',
    component:FirstParamComponent
  },
  {
    path: 'first',
    component: FirstComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ]
  },
  {
    path:'life',
    component:HooksComponent
  },
  {
    path:'d-test',
    component:DTestComponent
  },
  {
    path:'d-test2',
    component : DTest2Component
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PnfComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
