import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EspeciesRespuesta } from '../interfaces/especies';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  constructor(private http: HttpClient) { }

  public getEspecies(): Observable<EspeciesRespuesta> {
    return this.http.get<EspeciesRespuesta>(`${environment.apiBaseUrl}/species/`);
  }

}