import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http:HttpClient
  ) { }

  getPlanets()
  {
    return this._http.get(`http://swapi.dev/api/planets/`);
  }
}
