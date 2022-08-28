import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  //JS -> los objetos pasan por referencia
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private _baseUrl: string = 'https://restcountries.com/v2';

  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string) : Observable<PaisSmall[]> {
    const url: string = `https://restcountries.com/v3.1/region/${region}?fields=name,cca2`;
    return this.http.get<PaisSmall[]>(url)
  }
}
