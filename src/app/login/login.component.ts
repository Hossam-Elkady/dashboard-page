import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users';
import UsersJson from '../../assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: Users[] = UsersJson;

  error: string = "";

  signinForm: FormGroup = new FormGroup({
    "email": new FormControl(null, [Validators.required, Validators.email]),
    "password": new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
  })

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }

  submitLoginFormGroup() {
    if (this.signinForm.invalid) {
      return
    }
    else {
      this.users.forEach(user => {
        if (this.signinForm.value.email == user.email && this.signinForm.value.password == user.password) {
          sessionStorage.setItem("userType", user.role)
          this._Router.navigateByUrl("/dashboard")
        }
        else {
          this.error = "wrong password or email"
        }
      })
    }
  }

}
