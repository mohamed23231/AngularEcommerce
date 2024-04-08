import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
interface CartItem {
  count: number;
  price: number;
  product: {
    subcategory: {
      _id: string;
      name: string;
    }[];
    _id: string;
    title: string;
    quantity: number;
    imageCover: string;
  };
  _id: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  constructor(private _CartService:CartService){}
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe(
      {
        next:data=>{
          console.log(data.data.products);
          this.cartItems=data.data.products;
        },
        error:err=>{
          console.log(err)
        }
  
      }
    );
  }

}
