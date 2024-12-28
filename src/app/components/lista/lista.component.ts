import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, TableModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  dados: any{ any[], any[] } = {
    codigo: [],
    nome: []
};
  moedas: any = [];
  //listou: boolean = true;

  constructor(private _ExchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this._ExchangeRateService.getExchangeRates().subscribe((data) => {
      this.dados.codigo = Object.entries(data.supported_codes).map(([i, value]) => ({
        index: i,
        value: value,
      }).value).map(([key, value]) => ({
        codigo: key,
        nome: value,
      }).codigo);

      this.dados.nome = Object.entries(data.supported_codes).map(([i, value]) => ({
        index: i,
        value: value,
      }).value).map(([key, value]) => ({
        codigo: key,
        nome: value,
      }).nome);

      console.log(this.moedas);
    });
  }

  /* ngOnInit() {
    this._ExchangeRateService.getExchangeRates().subscribe(data => this.moedas = data.supported_codes);
  } */
}
