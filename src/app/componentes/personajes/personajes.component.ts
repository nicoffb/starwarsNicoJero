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


  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe(respuesta => {
      this.listaPersonajes= respuesta.results;
    })
  }
}