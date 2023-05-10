import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { 
    let product = {'productId': 101, 'quantity':2, 'price' : 1000}
    localStorage.setItem('product',JSON.stringify(product));
  }

  isProductAvailable(productId : number){
    let prod = localStorage.getItem('product')
    return prod !=null ? true : false;
  }

  isProductQuantityAvailable(productId : number, quantity : number){
     return localStorage.getItem('product')
  }

  getProductPrice(productId : number){
    let prod = localStorage.getItem('product')
  }
}
