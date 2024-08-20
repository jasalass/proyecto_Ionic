import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/api/heroes.service';
import { Heroe } from 'src/app/models/heroes';
import {Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.page.html',
  styleUrls: ['./lista-heroes.page.scss'],
})
export class ListaHeroesPage implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroeService: HeroesService, private router: Router ) { }

  ngOnInit() {

    this.heroes = this._heroeService.obtener_lista_heroes();
   
    
  }


  ir_detalle_heroe(heroe: Heroe){
    console.info(heroe)
    this.router.navigate(['detalles-heroes'], 
      {
        queryParams:{
          superheroe: JSON.stringify(heroe)
        }
      }
    )
  }

}
