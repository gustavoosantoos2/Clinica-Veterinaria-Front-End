import { Observable } from 'rxjs';
import { Especie } from 'src/app/model/especie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {
  private baseUrl = 'http://localhost:8080/ClinicaVeterinaria/EspeciesService';

  constructor(
    private http: HttpClient
  ) { }

  public getEspecies(): Observable<Especie[]> {
    return this.http.get<Especie[]>(this.baseUrl);
  }

  public saveEspecie(especie: Especie): Observable<any> {
    return this.http.post(this.baseUrl, JSON.stringify(especie));
  }

  public deleteEspecie(especie: Especie): Observable<any> {
    return this.http.delete(this.baseUrl + '?id=' + especie.id);
  }
}
