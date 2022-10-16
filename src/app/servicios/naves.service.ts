import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavesRespuesta } from '../interfaces/Naves';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor(private http: HttpClient) { }

  public getNaves(): Observable<NavesRespuesta> {
    return this.http.get<NavesRespuesta>(`${environment.apiBaseUrl}/starships/`);
  }

}