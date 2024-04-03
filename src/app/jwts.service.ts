import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JWTSService {
decodeData(data: any){
  return jwtDecode(data);
}
  constructor() { }
}
