import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavesRespuesta } from '../interfaces/naves';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor(private http: HttpClient) { }

  public getNaves(pag :number): Observable<NavesRespuesta> {
    return this.http.get<NavesRespuesta>(`${environment.apiBaseUrl}/starships/?page=${pag}`);
  }

}
