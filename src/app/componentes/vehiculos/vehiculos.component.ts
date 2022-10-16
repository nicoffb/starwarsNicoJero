import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { Vehiculo } from '../../interfaces/vehiculos';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css'],
})
export class VehiculosComponent implements OnInit {
  listaVehiculos: Vehiculo[] = [];
  numPags = 0;
  actualPag = 0;

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.getPagVehiculos(1)
  }

  getPagVehiculos(pag: number) {
    this.vehiculosService.getVehiculos(pag).subscribe(respuesta => {
      this.listaVehiculos = respuesta.results;
      this.numPags = Math.ceil(respuesta.count/10);
      this.actualPag = pag;
    });
  }

  getVehiculoImgUrl(vehiculo: Vehiculo): string {
    return (
      'https://starwars-visualguide.com/assets/img/vehicles/' +
      vehiculo.url.split('/')[5] +
      '.jpg'
    );
  }

  counter() {
    return new Array(this.numPags);
  }
}
