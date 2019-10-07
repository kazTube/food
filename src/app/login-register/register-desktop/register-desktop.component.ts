import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-desktop',
  templateUrl: './register-desktop.component.html',
  styleUrls: ['./register-desktop.component.scss']
})
export class RegisterDesktopComponent implements OnInit {
  registerationForm: FormGroup;


  // registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private registerService:LoginService,
    private router:Router) {

    this.registerationForm = this.formBuilder.group({
      first_name: new FormControl(
        undefined,
        [
          Validators.required
        ]
      ),
      last_name: new FormControl(
        undefined,
        [
          Validators.required
        ]
      ),
      email: new FormControl(
        undefined,
        [
          Validators.required
        ]
      )
    })
  }
  onSubmit() {
    if (this.registerationForm.valid) {
      // console.log();
      this.registerService.registeration(this.registerationForm.value).subscribe(
        r => {
          if(r['status']){
            this.router.navigateByUrl('');
          }
          
        }
      );

    }

  }
  ngOnInit() {
  }

}
