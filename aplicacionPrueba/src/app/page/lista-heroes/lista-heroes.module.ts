import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaHeroesPageRoutingModule } from './lista-heroes-routing.module';

import { ListaHeroesPage } from './lista-heroes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaHeroesPageRoutingModule
  ],
  declarations: [ListaHeroesPage]
})
export class ListaHeroesPageModule {}
