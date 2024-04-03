import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private httpClient:HttpClient) { }
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
}
