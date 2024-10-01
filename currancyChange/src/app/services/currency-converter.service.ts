import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {


   // Dummy conversion rates
   private conversionRates: { [key: string]: number } = {
    USD: 1,  // Base currency
    EUR: 0.85,
    GBP: 0.75,
    INR: 74.30,
    JPY: 110.50
  };

  constructor() { }

   // Method to convert currency
   convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
    const fromRate = this.conversionRates[fromCurrency];
    const toRate = this.conversionRates[toCurrency];

    if (fromRate && toRate) {
      return (amount / fromRate) * toRate;
    } else {
      return 0;
    }
  }

  // Get available currencies
  getAvailableCurrencies(): string[] {
    return Object.keys(this.conversionRates);
  }
}
