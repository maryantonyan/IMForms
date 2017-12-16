import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';


export function emailValidator(control: FormControl): {
  [key: string]: any
} {
  var email = control.value;
  if (email) {
    email = email.trim();
  }
  var emailRegexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (control.value && !emailRegexp.test(email)) {
    return {
      invalidEmail: true
    };
  }
}

export function passwordValidator(control: FormControl): {
  [key: string]: any
} {
  var passRegexp = /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  if (control.value && !passRegexp.test(control.value)) {
    return {
      invalidPassword: true
    };
  }
}

export function usernameValidator(control: FormControl): {
  [key: string]: any
} {
  var name = control.value;
  if (name) {
      name = name.trim();
  }
  var nameRegexp = /^(?=.*[a-zA-Z])\S*$/;
  if (control.value && !nameRegexp.test(name)) {
    return {
      invalidUsername: true
    };
  }
}

export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {
    [key: string]: any
  } => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}
