import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { NotifierService } from 'angular-notifier';

@Component({
selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  searchInput:string ="";
  productId:any = {};
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      }
    },
    nav: true
  }

  products: Product[] = [];
  constructor(private _ProductsService:ProductsService, private _CartService:CartService,private notifierService: NotifierService){
    console.log(this.notifierService)
  }
  ngOnInit() {
    this._ProductsService.getAllProducts().subscribe({
      next:data=>{
        console.log(data.data);
        this.products=data.data
      },
      error:err=>{
        console.log(err)
      }
    });
  }
  addToCardMethod(id:string){
    this.productId={productId:id}
    this._CartService.addProductToCart(this.productId).subscribe(
      {
        next:data=>{
          this.notifierService.notify('success', 'Item Added to Cart'); // Changed here
          console.log(data);
        },
        error:err=>{
          console.log(err)
        }
  
      }
    );
  }
}
