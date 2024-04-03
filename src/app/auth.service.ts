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
}
