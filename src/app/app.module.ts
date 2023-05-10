import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { ExponentPipe } from './Pipes/exponent.pipe';
import { BannerComponent } from './Components/banner/banner.component';
import { QuoteComponent } from './Components/quote/quote.component';
import { SortPipe } from './Pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    ExponentPipe,
    BannerComponent,
    QuoteComponent,
    SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
