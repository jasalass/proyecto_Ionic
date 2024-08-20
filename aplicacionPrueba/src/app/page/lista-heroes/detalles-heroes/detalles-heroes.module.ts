import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesHeroesPageRoutingModule } from './detalles-heroes-routing.module';

import { DetallesHeroesPage } from './detalles-heroes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesHeroesPageRoutingModule
  ],
  declarations: [DetallesHeroesPage]
})
export class DetallesHeroesPageModule {}
