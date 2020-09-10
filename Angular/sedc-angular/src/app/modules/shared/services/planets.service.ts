import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  DEFAULT_PLANETS_URL = `http://swapi.dev/api/planets/`;

  constructor(
    private _http:HttpClient
  ) { }

  getPlanets(url?)
  {
    url = url ? url : this.DEFAULT_PLANETS_URL;
    return this._http.get(url);
  }
}
