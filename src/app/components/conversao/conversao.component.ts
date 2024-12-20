import { Component } from '@angular/core';

@Component({
  selector: 'app-conversao',
  imports: [],
  templateUrl: './conversao.component.html',
  styleUrl: './conversao.component.css'
})
export class ConversaoComponent {
convertCurrency() {
throw new Error('Method not implemented.');
}
fromCurrency: any;
toCurrency: any;
amount: any;
conversionResult: any;
conversionRate: any;

}

export interface Conversion {
  date: string;
  time: string;
  fromCurrency: string;
  toCurrency: string;
  inputValue: number;
  outputValue: number;
  rate: number;
}
