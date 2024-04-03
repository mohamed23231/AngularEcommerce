import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errMessage: string="";
  loadingBtn: boolean=false;

  constructor(private _AuthService: AuthService ,private _Router:Router) {}
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
        ),
        Validators.required,
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
        ),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    this.confirmPasswordMethod
  );

  confirmPasswordMethod(pw: any) {
    if (pw.get('password')?.value == pw.get('rePassword')?.value) {
      return null;
    } else {
      return { matchedPassword: true };
    }
  }

  submitRegisterForm() {
    this.loadingBtn=true;
    this._AuthService.registerationApi(this.registerForm.value).subscribe({
      next: (res) => {
        this._Router.navigate(['./login'])

      this.loadingBtn=false;
    },
      error: (err) => {
        this.errMessage=err.error.message;
        this.loadingBtn=false;

      }
    });
  }
}
