import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../products';
@Component({
selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  searchInput:string ="";
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
  constructor(private _ProductsService:ProductsService){}
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
}
