import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private prodService : ProductService) { }

  productId : number = 1;
  cart : any = [];
  quantity : number = 0;

  addProductToCart(productId : number) {
    let prod = this.prodService.isProductAvailable
    this.cart.push(prod);
  }
  removeProductFromCart(productId : number) {
    let prod = this.prodService.isProductAvailable
    this.cart.pop(prod);
  }
  updateQuantityOfCartProduct(productId : number, quantity : number){
    if(productId < 0)
     return this.quantity += quantity;
     return quantity;
  }
  getCartTotal(){
    return this.quantity;
  }
}
