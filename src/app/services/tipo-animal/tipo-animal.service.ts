import { TipoAnimal } from 'src/app/model/tipo-animal.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class TipoAnimalService {
  private baseUrl = 'http://localhost:8080/ClinicaVeterinaria/TiposAnimaisService';

  constructor(
    private http: HttpClient
  ) { }

  public getTiposAnimais(): Observable<TipoAnimal[]> {
    return this.http.get<TipoAnimal[]>(this.baseUrl);
  }

  public saveTipoAnimal(tipo: TipoAnimal): Observable<any> {
    return this.http.post(this.baseUrl, JSON.stringify(tipo), {headers: headers});
  }

  public deleteTipoAnimal(tipo: TipoAnimal): Observable<any> {
    return this.http.delete(this.baseUrl + '?acr=' + tipo.acronimo);
  }
}
