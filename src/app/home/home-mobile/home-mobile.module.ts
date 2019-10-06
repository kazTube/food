import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeMobileComponent } from './home-mobile.component';


const routes: Routes = [

  {
    path: '',
    component: HomeMobileComponent
  }
];

@NgModule({
  declarations: [
    HomeMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class HomeMobileModule { }
