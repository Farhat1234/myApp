import { TestBed } from '@angular/core/testing';

import { TestBedLoginService } from './test-bed-login.service';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';

describe('TestBedLoginService', () => {
  let loginService: LoginService;
  let authServiceSpy : jasmine.SpyObj<AuthService>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AuthService',['getValue', 'getAuthValue']);

    TestBed.configureTestingModule({
      providers : [LoginService, {provide : AuthService, useValue : spy }
      ]
    });
    loginService = TestBed.inject(LoginService);
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    
  });

  it('loginService should be created', () => {
    expect(loginService).toBeTruthy();
  });
  it('authService should be created', () => {
    expect(authServiceSpy).toBeTruthy();
  });

  it('getValue should return stubbed value', () => {
    authServiceSpy.getValue.and.returnValue('auth proxy value');
    expect(loginService.getValue())
        .withContext('LogInService returned my stub value')
        .toBe('auth proxy value');
});

it('isLoggedIn should return true when user is logged in',()=>{
   // spy auth service is a proxy with stubbed value , its not dependent on local storage
    authServiceSpy.getAuthValue.and.returnValue(true);
    expect(loginService.isLoggedIn())
    .withContext('should return auth stubbed value')
    .toBe(true);
});
});
