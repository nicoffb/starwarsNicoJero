import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasRespuesta } from '../interfaces/peliculas';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  public getPeliculas(): Observable<PeliculasRespuesta> {
    return this.http.get<PeliculasRespuesta>(`${environment.apiBaseUrl}/films/`);
  }

}