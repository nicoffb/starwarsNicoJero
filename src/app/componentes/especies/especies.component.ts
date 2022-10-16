import { Component, OnInit } from '@angular/core';
import { EspeciesService } from '../../servicios/especies.service';
import { Especie } from '../../interfaces/especies';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css'],
})
export class EspeciesComponent implements OnInit {

  listaEspecies: Especie[] = [];
  numPags = 0;
  actualPag=0;

  constructor(private especiesService: EspeciesService) {}

  ngOnInit(): void {
    this.getPagEspecies(1);
  }

  getPagEspecies(pag: number) {
    this.especiesService.getEspecies(pag).subscribe(respuesta => {
      this.listaEspecies = respuesta.results;
      this.numPags = Math.ceil(respuesta.count / 10);
      this.actualPag=pag;
    });
  }

  getEspecieImgUrl(especie : Especie) : string{
    return 'https://starwars-visualguide.com/assets/img/species/' + especie.url.split('/')[5] + '.jpg'
  }

  counter() {
    return new Array(this.numPags);
  }
}
