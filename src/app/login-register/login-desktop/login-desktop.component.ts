import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-desktop',
  templateUrl: './login-desktop.component.html',
  styleUrls: ['./login-desktop.component.scss']
})
export class LoginDesktopComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username:new FormControl(
        undefined,[Validators.required]
      ),
      password: new FormControl(
        undefined,[Validators.required]
      )
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.registerService.login(this.loginForm.value['username'],this.loginForm.value['password']).subscribe(
        r => {
          console.log(r);
          
        }
      );
    }
    
  }
  ngOnInit() {
  }

}
