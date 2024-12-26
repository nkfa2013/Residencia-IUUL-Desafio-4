import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExchangeRateService {
  private apiKey = '1c7ddf09c8cf31332dc866d0';
  private apiUrl = 'https://v6.exchangerate-api.com/v6/' + this.apiKey;

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<{ /* result: string; documentation: string; terms_of_use: string; */ supported_codes: [string, string][] }> {
    return this.http.get<{ /* result: string; documentation: string; terms_of_use: string; */ supported_codes: [string, string][] }>(
      `${this.apiUrl}/codes`
    );
  }

  convertCurrency(origem: string, destino: string, qtd: number): Observable<{ conversion_rate: number; conversion_result: number }> {
    return this.http.get<{ conversion_rate: number; conversion_result: number }>(
      `${this.apiUrl}/pair/${origem}/${destino}/${qtd}`
    );
  }
}