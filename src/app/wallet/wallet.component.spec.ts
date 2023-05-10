import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletComponent } from './wallet.component';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check initial balance', () => {
    expect(component.balance).toBe(0);
  })

  it('should add balance', () => {
    component.balance = 10;
    component.addBalance(1);
    expect(component.balance).toBe(11);
  })
  it('should withdraw', ()=> {
    component.balance = 100;
    component.withDraw(50);
    expect(component.balance).toBe(50);
  })

  it('should check insufficient balance', ()=> {
    component.balance = 100;
    expect(component.withDraw(150)).toBeFalsy;
  })

  it('should check balance', () => {
    component.balance = 100;
    expect(component.checkBalance()).toBe(100);
  })
});
