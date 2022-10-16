import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/peliculas';
import { PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  listaPeliculas: Pelicula[] = [];
  numPags = 0;
  actualPag=0;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.getPagPeliculas(1)
  }

  getPagPeliculas(pag:number) {
    this.peliculasService.getPeliculas(pag).subscribe(respuesta => {
      this.listaPeliculas= respuesta.results;
      this.numPags = Math.ceil(respuesta.count / 10);
      this.actualPag=pag;
    });
  }

  getPeliculaImgUrl(pelicula : Pelicula) : string{
    return 'https://starwars-visualguide.com/assets/img/films/' + pelicula.url.split('/')[5] + '.jpg'
  }

  counter() {
    return new Array(this.numPags);
  }
}
