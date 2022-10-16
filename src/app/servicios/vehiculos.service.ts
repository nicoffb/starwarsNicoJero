import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiculosRespuesta } from '../interfaces/vehiculos'; //ojo
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http: HttpClient) { }

  public getVehiculos(pag:number): Observable<VehiculosRespuesta> {
    return this.http.get<VehiculosRespuesta>(`${environment.apiBaseUrl}/vehicles/?page=${pag}`);
  }

}
