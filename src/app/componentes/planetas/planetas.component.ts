import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../../servicios/planetas.service';
import { Planeta } from '../../interfaces/planetas';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  listaPlanetas: Planeta[] = [];

  constructor(private planetasService: PlanetasService) { }

  ngOnInit(): void {
    this.planetasService.getPlanetas().subscribe(resp => { this.listaPlanetas = resp.results });
  }

}
