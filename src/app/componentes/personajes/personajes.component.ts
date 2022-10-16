import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personajes';
import { PersonajesService } from '../../servicios/personajes.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  listaPersonajes: Personaje[] = [];
  numPags = 0;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.getPagPersonajes(1)
  }

  getPagPersonajes(pag: number) {
    this.personajesService.getPersonajes(pag).subscribe(respuesta => {
      this.listaPersonajes = respuesta.results;
      this.numPags = Math.ceil(respuesta.count / 10);
    });
  }

  counter() {
    return new Array(this.numPags);
  }
}