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
export class ListaComponent implements OnInit{
  
  moedas: any[] = [];
  //listou: boolean = true;
  
  constructor(private _ExchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this._ExchangeRateService.getExchangeRates().subscribe((data) => {
      this.moedas = Object.entries(data).map(([cod, nome]) => ({
        codigo: cod,
        nome: nome,
      }));
      //this.listou = false;
    });
  }
  
}
