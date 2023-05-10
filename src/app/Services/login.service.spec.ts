import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { AuthService } from './auth.service';

describe('LoginService', () => {
  let service: LoginService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(LoginService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should expect actual auth value', () => {
    service = new LoginService(new AuthService());
    expect(service.getValue()).toBe('Actual Auth value');
  })

  it('expect spy to return value', () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['getValue']);
    authServiceSpy.getValue.and.returnValue('Spy auth getValue');

    service = new LoginService(authServiceSpy);

    expect(service.getValue())
    .withContext('Login service returns stub value')
      .toBe('Spy auth getValue');
  })
});
