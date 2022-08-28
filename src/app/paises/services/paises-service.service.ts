import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaisPorCodigo, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  //JS -> los objetos pasan por referencia
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private _baseUrl: string = 'https://restcountries.com/v3.1';

  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string) : Observable<PaisSmall[]> {
    const url: string = `${ this._baseUrl }/region/${region}?fields=name,cca2`;
    return this.http.get<PaisSmall[]>(url);
  }

  getPaisPorAlphaCode(code: string) : Observable<PaisPorCodigo| null> {
    if (!code) {
      return of(null);
    }

    const url: string = `${ this._baseUrl }/alpha/${code}?fields=name,borders`;
    return this.http.get<PaisPorCodigo>(url);
  }
}
