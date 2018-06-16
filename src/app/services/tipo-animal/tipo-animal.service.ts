import { TipoAnimal } from 'src/app/model/tipo-animal.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.post(this.baseUrl, JSON.stringify(tipo));
  }

  public deleteTipoAnimal(tipo: TipoAnimal): Observable<any> {
    return this.http.delete(this.baseUrl + '?acr=' + tipo.acronimo);
  }
}
