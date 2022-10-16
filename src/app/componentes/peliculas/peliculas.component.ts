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

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(resp => { this.listaPeliculas = resp.results });
  }
}
