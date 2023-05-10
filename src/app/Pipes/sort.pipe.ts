import { Pipe, PipeTransform } from '@angular/core';
// import { orderBy } from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, param? : any) {
    if(!value){
      return[]; 
    };
    return value.sort((a : any[], b : any[]) => {
      
      if (a[param] < b[param]) {
        return -1;
        // else
        // b[param] - a[param];
      } else if (a[param] === b[param]) {
        return 0;
      } else if (a[param] > b[param]) {
        return 1;
      }
      return;
      // if(a[propName] > b[propName]) return 1
      // else return 1;
    });
  }

}
