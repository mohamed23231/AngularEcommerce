import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JWTSService } from './jwts.service';
interface AuthInterface{
  email: string;
  password: string;
  repasswords?: string
  name?: string;
  phone?: string;
}
interface ForgetPw{
  email?: string;
  resetCode?: string;
  newPassword?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getValue() {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient:HttpClient,private _JWTSService:JWTSService) { 

    if(localStorage.getItem('userDataToken')!=null){
      this.userDataVar.next((localStorage.getItem('userDataToken')!))
    }
  }

  userDataVar:BehaviorSubject<any> = new BehaviorSubject(null);

baseApiUrl:string = "https://ecommerce.routemisr.com/api/v1/auth/";
  registerationApi(_data:AuthInterface):Observable<any>{
    return this.httpClient.post(`${this.baseApiUrl}signup`,_data)
  }

  loginAp(_data:AuthInterface):Observable<any>{
    return this.httpClient.post(`${this.baseApiUrl}signin`,_data)
  }

  forgetPwEmail(_data:ForgetPw):Observable<any>{
    return this.httpClient.post(`${this.baseApiUrl}forgotPasswords`,_data)
  }
  forgetPwVerifyCode(_data:ForgetPw):Observable<any>{
    return this.httpClient.post(`${this.baseApiUrl}verifyResetCode`,_data)
  }
  forgetPwResetPassword(_data:ForgetPw):Observable<any>{
    return this.httpClient.put(`${this.baseApiUrl}resetPassword`,_data)
  }
  saveUserData(){
    if(localStorage.getItem('userDataToken')!=null){
      this.userDataVar.next(localStorage.getItem('userDataToken'));
      console.log(this.userDataVar)
      this.userDataVar.next(this._JWTSService.decodeData(this.userDataVar.getValue()));
      console.log(this.userDataVar)
    }
  
}
}