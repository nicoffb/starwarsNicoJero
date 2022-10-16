import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PlanetasRespuesta } from '../interfaces/planetas';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private http: HttpClient){}

  public getPlanetas(pag:number): Observable<PlanetasRespuesta> {
    return this.http.get<PlanetasRespuesta>(`${environment.apiBaseUrl}/planets/?page=${pag}`);
  }
}
