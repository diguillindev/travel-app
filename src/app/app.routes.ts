import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./pagina/inicio/inicio.page').then( m => m.InicioPage)
  },
];
 