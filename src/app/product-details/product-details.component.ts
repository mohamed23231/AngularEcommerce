import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  loadingBtn: boolean=false;

  productId: number=0;
  productDetails:any;
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
      }
    },
    nav: true
  }

  constructor(private _ActivatedRoute :ActivatedRoute, private _ProductsService:ProductsService ) { } 
  ngOnInit() {
    this.loadingBtn=true;

    this._ActivatedRoute.params.subscribe(params => {
      this.productId=params["id"]
      console.log(this.productId)
      
    });
    this._ProductsService.getSingleProduct(this.productId).subscribe({
      next:data=>{
        this.productDetails=data.data
        this.loadingBtn=false;

      },
      error:err=>{
        console.log(err)
      }
    });

  }
}
