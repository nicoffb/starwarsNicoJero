import { Component, OnInit } from '@angular/core';
import { EspeciesService } from '../../servicios/especies.service';
import { Especie } from '../../interfaces/especies';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  listaEspecies: Especie[] = [];

  constructor(private especiesService: EspeciesService) { }

  ngOnInit(): void {
    this.especiesService.getEspecies().subscribe(resp => { this.listaEspecies = resp.results });
  }

}
