import {
  Component,
  Input,
  OnInit
} from '@angular/core';


import { routing } from '../../app.router';

import { Router } from '@angular/router'

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';

import {
  emailValidator,
  matchingPasswords,
  passwordValidator,
  usernameValidator
} from './validators';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.less', '../../../assets/styles/bootstrap-costum/costum-variables.less'],
})

export class LoginRegisterComponent implements OnInit {
  goHome: any;
  registrationForm: FormGroup;
  loginForm: FormGroup;
  errorMessage: string;
  isRegister: boolean;

  constructor(public fb: FormBuilder, private router: Router) {
    this.isRegister = false;
    this.errorMessage = 'This field is required';
    this.registrationForm = fb.group({
      name: ['', Validators.compose([Validators.required, usernameValidator])],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      password: ['', Validators.compose([Validators.required, passwordValidator])],
      confirmPassword: ['', Validators.required]

    }, {
      validator: matchingPasswords('password', 'confirmPassword')
    })

    this.loginForm = fb.group({
      nameEmail: ['', Validators.required],
      password: ['', Validators.required]

    })
    this.goHome = function() {
      if (localStorage.getItem('token') !== null) {
        return;
      }
      localStorage.setItem('token','true');
      this.router.navigateByUrl('/home');
    }

  }
  registerData(data) {
    console.log(data);
    this.registrationForm.reset();
  }


  loginData(data) {
    console.log(data);
    this.loginForm.reset();

  }

  openRegister() {
    if (false === this.isRegister) {
      this.isRegister = true;
      this.registrationForm.reset();
    }

  }

  ngOnInit() {}

}
