import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from ''

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

}

export interface Currency {
  code: string;
  name: string;
}
