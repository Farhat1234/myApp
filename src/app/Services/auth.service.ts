import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    let user = {'id': 101, 'name':'techM'}
    localStorage.setItem('user',JSON.stringify(user));
  }

  getValue(){
    return 'Actual Auth value';
  }

  getAuthValue(){
    return localStorage.getItem('user') !=null ? true : false;
  }
}
