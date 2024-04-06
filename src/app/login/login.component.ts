import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JWTSService } from '../jwts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errMessage: string="";
  loadingBtn: boolean=false;
  // userDataVar: string | object |null = "";
  constructor(private _AuthService: AuthService ,private _Router:Router ) { }

  loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
        ),
        Validators.required,
      ])
    },
  );

  
  submitLoginForm() {
    this.loadingBtn=true;
    this._AuthService.loginAp(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res)
        localStorage.setItem('userDataToken', res.token)
        this._AuthService.saveUserData()
        this._Router.navigate(['./home'])

      this.loadingBtn=false;
    },
      error: (err) => {
        this.errMessage=err.error.message;
        this.loadingBtn=false;

      }
    });
  }

}
