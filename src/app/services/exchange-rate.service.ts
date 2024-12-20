import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaModule } from '../models/lista.module';
import { ConversaoModule } from '../models/conversao.module';

@Injectable({
  providedIn: 'root'
})

export class ExchangeRateService {
  private apiKey = '1c7ddf09c8cf31332dc866d0';
  private apiUrl = 'https://v6.exchangerate-api.com/v6/${apiKey}/quota';

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<{ result: string; documentation: string; terms_of_use: string; supported_codes: [string, string][] }> {
    return this.http.get<{ result: string; documentation: string; terms_of_use: string; supported_codes: [string, string][] }>(
      `${this.apiUrl}/codes`
    );
  }

  convertCurrency(from: string, to: string, amount: number): Observable<{ conversion_rate: number; conversion_result: number }> {
    return this.http.get<{ conversion_rate: number; conversion_result: number }>(
      `${this.API_URL}/pair/${from}/${to}/${amount}`
    );
  }
}