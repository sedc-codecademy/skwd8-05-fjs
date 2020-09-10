import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/modules/shared/services/films.service';
import {take} from 'rxjs/operators';
import { iFilm, iFilmsResponse } from 'src/app/interfaces/films.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films:Array<iFilm> = [];
  filmsResponse:iFilmsResponse;

  constructor(
    private _filmsService:FilmsService
  ) { }

  ngOnInit() {

    if( ! localStorage.getItem('films'))
    this._loadFilms();
    else
    {
      this.films = JSON.parse(localStorage.getItem('films'));
      this.filmsResponse = JSON.parse(localStorage.getItem('filmsResponse'));
    }
  }

  private _loadFilms()
  {
    this._filmsService.getAllFilms().pipe(take(1)).subscribe((films:iFilmsResponse) => {
      this.films = films.results;
      this.filmsResponse = films;
      localStorage.setItem('films', JSON.stringify(this.films));
      localStorage.setItem('filmsResponse', JSON.stringify(this.filmsResponse));
    });
  }


  filmKeys()
  {
    return Object.keys(this.films[0]);
  }
}
