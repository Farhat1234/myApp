import { pipe } from 'rxjs';
import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {

  beforeEach(() => {
    
  })
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should Check if product array gets sorted by id by default', () => {
    const pipe = new SortPipe();
    const products = [{id:2,name:'Mobile',price:1000},{id:1,name:'mouse',price:100}]
    const sortedProducts = pipe.transform(products, '')
    expect(sortedProducts[0].id).toEqual(1)
    // expect(sortedProducts).toBe( [{id:1,name:'mouse',price:100},{id:2,name:'Mobile',price:1000}])
  })

  it('should Check if product array gets sorted by name', () => {
    const pipe = new SortPipe();
    const products = [{id:2,name:'Printer',price:10000},{id:1,name:'LapTop',price:25000}]
    const sortedProducts = pipe.transform(products , 'name')
    expect(sortedProducts[0].name).toEqual('LapTop')
    expect(sortedProducts[1].name).toEqual('Printer')
    
  })

  it('should Check if product array gets sorted by price', () => {
    const pipe = new SortPipe();
    const products = [{id:2,name:'Printer',price:10000},{id:1,name:'LapTop',price:25000}]
    const sortedProducts = pipe.transform(products, 'price')
    expect(sortedProducts[0].price).toEqual(10000)
    expect(sortedProducts[1].price).toEqual(25000)
  })

  it('should Check if sorting is in ascending order by default', () => {
    const pipe = new SortPipe();
    const products = [{id:2,name:'Mobile',price:1000},{id:1,name:'mouse',price:100}]
    const sortedProducts = pipe.transform(products);
    expect(sortedProducts).toEqual([[{id:1,name:'mouse',price:100},{id:2,name:'Mobile',price:1000}]])
  })

  it('should Check if products is empty', () => {
    const pipe = new SortPipe();
    const products: ArrayLike<any> = [];
    expect(products).toEqual([]);
  })

  it('should Check if products is null', () => {
    const pipe = new SortPipe();
    const products = null;
    expect(products).toBeNull;
  })

  it('should Check if returned array size remains same', () => {
    const pipe = new SortPipe();
    const products = [{id:1,name:null,price:5000},{id:3,name:'Mobile',price:1000},{id:2,name:'mouse',price:100}];
    expect(products.length).toEqual(3);
  })
});
