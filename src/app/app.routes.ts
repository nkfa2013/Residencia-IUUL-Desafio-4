import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaComponent } from './components/lista/lista.component';
import { ConversaoComponent } from './components/conversao/conversao.component';
import { HistoricoComponent } from './components/historico/historico.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'lista', component: ListaComponent },
    { path: 'conversao', component: ConversaoComponent },
    { path: 'historico', component: HistoricoComponent },
];
