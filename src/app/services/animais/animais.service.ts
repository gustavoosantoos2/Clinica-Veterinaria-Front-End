import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/model/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  private baseUrl = 'http://localhost:8080/ClinicaVeterinaria/AnimaisService';

  constructor(
    private http: HttpClient
  ) { }

  public getAnimais(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.baseUrl);
  }

  public saveAnimal(animal: Animal): Observable<any> {
    return this.http.post(this.baseUrl, JSON.stringify(animal));
  }

  public deleteAnimal(animal: Animal): Observable<any> {
    return this.http.delete(this.baseUrl + '?id=' + animal.id);
  }
}
