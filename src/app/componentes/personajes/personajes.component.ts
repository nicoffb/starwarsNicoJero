import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personajes';
import { PersonajesService } from '../../servicios/personajes.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
getPagEspecies(arg0: number) {
throw new Error('Method not implemented.');
}
  listaPersonajes: Personaje[] = [];
  numPags = 0;
  actualPag=0;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.getPagPersonajes(1)
  }

  getPagPersonajes(pag: number) {
    this.personajesService.getPersonajes(pag).subscribe(respuesta => {
      this.listaPersonajes = respuesta.results;
      this.numPags = Math.ceil(respuesta.count / 10);
      this.actualPag=pag;
    });
  }

  getPersonajeImgUrl(personaje : Personaje) : string{
    return 'https://starwars-visualguide.com/assets/img/characters/' + personaje.url.split('/')[5] + '.jpg'
  }

  counter() {
    return new Array(this.numPags);
  }
}
