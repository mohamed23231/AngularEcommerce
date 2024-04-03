import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  loadingBtn: boolean = false;
  errMessage: string = ""; // Error message variable
  firstForm: boolean = true;
  secondForm: boolean = false;
  thirdForm: boolean = false;
  constructor(private _AuthService: AuthService) {}

  // First Form to get Verification Code From mail
  forgetPw1stForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
  });

  // Submit function for the first form
  submitForgetPwForm() {
    this.loadingBtn = true;
    this._AuthService.forgetPwEmail(this.forgetPw1stForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.firstForm = false;
        this.secondForm = true;
        this.thirdForm = false;
      
        this.loadingBtn = false;
      },
      error: (err) => {
        this.errMessage = err.error.message;
        console.log(err);
        this.loadingBtn = false;
      }
    });
  }

  // Form To write Verification Code after got it from mail
  forgetPw2stForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  });

  // Submit function for the second form
  submitVerifyCodeForm() {
    this.loadingBtn = true;
    this._AuthService.forgetPwVerifyCode(this.forgetPw2stForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.firstForm = false;
        this.secondForm = false;
        this.thirdForm = true;

        this.loadingBtn = false;
      },
      error: (err) => {
        this.errMessage = err.error.message;
        console.log(err);
        this.loadingBtn = false;
      }
    });
  }

  // After Write Verification Code Form to reset Pw
  forgetPw3stForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required,Validators.email]),
    newPassword: new FormControl(null, [Validators.required,Validators.pattern(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    )]),
  });

  // Submit function for the third form
  submitResetPw() {
    this.loadingBtn = true;
    this._AuthService.forgetPwResetPassword(this.forgetPw3stForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.loadingBtn = false;
      },
      error: (err) => {
        this.errMessage = err.error.message;
        console.log(err);
        this.loadingBtn = false;
      }
    });
  }
}
