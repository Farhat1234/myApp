import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  balance: number = 0;

  addBalance(amount: number){
    this.balance += amount;
  }

  withDraw(amount: number):boolean { // not handling insufficent case

    if (this.balance < amount)
      return false;
    this.balance -= amount;
    return true;
  }

  checkBalance(){
    return this.balance;
  }
}
