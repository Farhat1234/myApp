import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { ProductService } from './product.service';

describe('CartService', () => {
  let cartService: CartService;
  let productServiceSpy : jasmine.SpyObj<ProductService>

  const spy = jasmine.createSpyObj('ProductService', ['isProductAvailable','isProductQuantityAvailable'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [CartService , {provide : ProductService, useValue: spy }]
    });
    cartService = TestBed.inject(CartService);
    productServiceSpy = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>
    
  });

  it('cart should be created', () => {
    expect(cartService).toBeTruthy();
  });
  it('productService spy should be created', () => {
    expect(productServiceSpy).toBeTruthy();
  });
  it('addProducttoCart should add Product', () => {
    expect(productServiceSpy.isProductAvailable).toBeTruthy;
  });

  it('addProductToCart to return stubbed value', () => {
    productServiceSpy.isProductAvailable.and.returnValue(true);
    expect(cartService.addProductToCart(1))
    .withContext('Cartservice returned my stubbed value')
    .toBeTrue;
  })

  // it('isProductAvailable to return stubbed value', () => {
  //   productServiceSpy.isProductAvailable.and.returnValue(true);
  //   expect(cartService.addProductToCart(1))
  //   .withContext('Cartservice returned my stubbed value')
  //   .toBeTrue;
  // })

  
});
