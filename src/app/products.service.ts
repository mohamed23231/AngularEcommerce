import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
baseUrl: string='https://ecommerce.routemisr.com/api/v1'
  constructor(private _HttpClient:HttpClient) { }
  
  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/products`)
  }
  getSingleProduct(id:number): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/products/${id}`)
  }
}
