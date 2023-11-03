import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { DirectComponent } from './components/direct/direct.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'page1',
    component: Page1Component,
  },
  {
    path: 'page2',
    component: Page2Component,
  },
  {
    path: 'direct/:id',
    component: DirectComponent,
  },
  {
    path: 'login',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
