import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDesktopComponent } from './login-desktop/login-desktop.component';
import { LoginMobileComponent } from './login-mobile/login-mobile.component';
import { RegisterDesktopComponent } from './register-desktop/register-desktop.component';
import { RegisterMobileComponent } from './register-mobile/register-mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterDesktopComponent
  },
  {
    path: 'login',
    component: LoginDesktopComponent
  }
]


@NgModule({
  declarations: [LoginDesktopComponent, LoginMobileComponent, RegisterDesktopComponent, RegisterMobileComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LoginModule { }
