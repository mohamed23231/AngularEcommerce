import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { BehaviorSubject, Observable } from 'rxjs';
interface ProductId{
  productId:string
}
interface Productquantity{
  count:string
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
baseUrl: string="https://ecommerce.routemisr.com/api/v1/cart"
userToken: any={
  token:localStorage.getItem('userDataToken')
}
  constructor(private _HttpClient:HttpClient) { }

  addProductToCart(productId:ProductId):Observable<any>{
    return this._HttpClient.post(this.baseUrl,productId,{
      headers:this.userToken
    })
  }
  getUserCart():Observable<any>{
    return this._HttpClient.get(this.baseUrl,{
      headers:this.userToken
    })
  }
  deleteProductFromCart(productId:string):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}/${productId}`,{
      headers:this.userToken
    })
  }
  updateProductQuantity(productId:string,quantity:Productquantity):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/${productId}`,quantity,{
      headers:this.userToken
    })
  }
  clearUserCart():Observable<any>{
    return this._HttpClient.delete(this.baseUrl,{
      headers:this.userToken
    })
  }
}
