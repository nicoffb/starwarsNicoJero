import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { Vehiculo } from '../../interfaces/Vehiculos';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  listaVehiculos: Vehiculo[] = [];

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe(resp => { this.listaVehiculos = resp.results });
  }

}
