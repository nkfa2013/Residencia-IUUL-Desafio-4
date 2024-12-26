import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { ListaComponent } from "./components/lista/lista.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InicioComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Residencia-IUUL-Desafio-4';
currencies: any;
}
