import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(
    private _http:HttpClient
  ) { }

  getFilmByUrl(url:string)
  {
    return this._http.get(url);
  }
}
