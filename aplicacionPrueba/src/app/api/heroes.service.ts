import { Injectable } from '@angular/core';
import { Heroe } from '../models/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  lista_de_heroes: Heroe[] = [
    {
      id: 1,
      nombre: "Batman",
      pelicula: [
        {
          "id": 1,
          "nombre": "batman 1"
        }
      ]
    },
    {
      id: 2,
      nombre: "Super",
      pelicula: [
        {
          "id": 1,
          "nombre": "Super 1"
        },
        {
          "id": 2,
          "nombre": "Super 2"
        }
      ]
    }
  ]
  constructor() { }

  obtener_lista_heroes(): Heroe[] {
    return this.lista_de_heroes;
  }
}
