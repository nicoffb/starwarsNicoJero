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
  numPags = 0;
  actualPag=0;

  constructor(private planetasService: PlanetasService) { }

  ngOnInit(): void {
    this.getPagPlanetas(1);
  }

  getPagPlanetas(pag:number){
    this.planetasService.getPlanetas(pag).subscribe(respuesta => {
      this.listaPlanetas = respuesta.results;
      this.numPags= Math.ceil(respuesta.count/10)
      this.actualPag=pag;
    })
  }

  getPlanetaImgUrl(planeta : Planeta) : string{
    return 'https://starwars-visualguide.com/assets/img/planets/' + planeta.url.split('/')[5] + '.jpg'
  }

  counter() {
    return new Array(this.numPags);
  }

}
