import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  constructor(
    private _http:HttpClient
  ) { }

  getResidentsByUrl(url)
  {
    return this._http.get(url);
  }
}
