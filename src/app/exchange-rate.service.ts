import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExchangeRateService {
  private apiKey = '1c7ddf09c8cf31332dc866d0';
  private apiUrl = 'https://v6.exchangerate-api.com/v6/${apiKey}/quota';

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  convertCurrency(from: string, to: string, amount: number): Observable<any> {
    
    // Implementar lógica de conversão
  }
}