import { Pelicula } from "./pelicula";

export interface Heroe{
    id: number;
    nombre: string;
    pelicula: Pelicula[];
}