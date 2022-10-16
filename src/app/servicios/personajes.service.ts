import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PersonajesRespuesta } from '../interfaces/personajes';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient){}

  public getPersonajes(): Observable<PersonajesRespuesta> {
    return this.http.get<PersonajesRespuesta>(`${environment.apiBaseUrl}/people/`);
  }
}