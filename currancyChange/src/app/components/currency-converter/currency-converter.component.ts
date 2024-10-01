import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: number | null = null;
  currencies: string[] = [];

  constructor(private currencyService: CurrencyConverterService) { }

  ngOnInit(): void {
    this.currencies = this.currencyService.getAvailableCurrencies();
  }

  convert(): void {
    this.convertedAmount = this.currencyService.convertCurrency(this.amount, this.fromCurrency, this.toCurrency);
  }
}

 
  

