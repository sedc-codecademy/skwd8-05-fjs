import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  DEFAULT_FILMS_URL = `http://swapi.dev/api/films/`;


  constructor(
    private _http:HttpClient
  ) { }

  getFilmByUrl(url:string)
  {
    return this._http.get(url);
  }

  getAllFilms(url?:string)
  {
    url = url ? url : this.DEFAULT_FILMS_URL;
    return this._http.get(url);
  }
}
