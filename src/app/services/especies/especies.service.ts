import { Observable } from 'rxjs';
import { Especie } from 'src/app/model/especie.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

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
    return this.http.post(this.baseUrl, JSON.stringify(especie), {headers: headers});
  }

  public deleteEspecie(especie: Especie): Observable<any> {
    return this.http.delete(this.baseUrl + '?id=' + especie.id);
  }
}
