import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaHeroesPage } from './lista-heroes.page';

const routes: Routes = [
  
  {
    path: 'detalles-heroes',
    loadChildren: () => import('./detalles-heroes/detalles-heroes.module').then( m => m.DetallesHeroesPageModule)
  },
  {
    path: '',
    component: ListaHeroesPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaHeroesPageRoutingModule {}
