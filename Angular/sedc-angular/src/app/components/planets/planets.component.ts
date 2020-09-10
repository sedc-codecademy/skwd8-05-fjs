import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/modules/shared/services/planets.service';
import { iPlanet, iPlanetsResponse } from 'src/app/interfaces/planets.interface';
import { ResidentsService } from 'src/app/modules/shared/services/residents.service';
import { take } from 'rxjs/operators';
import { FilmsService } from 'src/app/modules/shared/services/films.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planetResponse:iPlanetsResponse;
  planetsList:Array<iPlanet> = [];

  constructor(
    private _planets:PlanetsService,
    private _residents:ResidentsService,
    private _films:FilmsService
  ) { }

  ngOnInit() {

    if( ! localStorage.getItem('planets') )
    this._loadPlanets();
    else
    {
      console.log('Cached data');
      this.planetsList = JSON.parse(localStorage.getItem('planets'));
      this.planetResponse = JSON.parse(localStorage.getItem('planetsResponse'))
    }
  }

  private _loadPlanets(url?:string)
  {
    this._planets.getPlanets(url).subscribe((planets:iPlanetsResponse) => {
      this.planetResponse = planets;
      this.planetsList = this.planetsList.concat(planets.results);

      localStorage.setItem('planets', JSON.stringify(this.planetsList));
      localStorage.setItem('planetsResponse', JSON.stringify(this.planetResponse));
      console.log(this.planetResponse)
    })
  }

  getPlanetHeaders()
  {
    return Object.keys(this.planetsList[0]);
  }

  loadMorePlanets()
  {
    if(this.planetResponse.next)
    this._loadPlanets(this.planetResponse.next)
  }

  isADate(key:string)
  {
    if(key === "created" || key === "edited")
    return true;

    return false;
  }

  isALink(key:string)
  {
    if(key === "residents" || key === "films")
    return true;

    return false;
  }

  loadUrl(url:string, key: string)
  {
    console.log(url, key)
    if(key === 'residents')
    this._residents.getResidentsByUrl(url).pipe(take(1)).subscribe((data) => {
      console.log(data);
    })
    else if(key === 'films')
    this._films.getFilmByUrl(url).pipe(take(1)).subscribe((data) => {
      console.log(data);
    })

    //alternative of take 1
    // this._residents.getResidentsByUrl(url).toPromise().then((data) => {
    //   console.log(data);
    // })
  }
}
