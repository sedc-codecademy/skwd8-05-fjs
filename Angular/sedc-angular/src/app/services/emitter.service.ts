import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  @Output() emiterServiceEvent:EventEmitter<any> = new EventEmitter();
  userLoggedIn = new BehaviorSubject(undefined);

  constructor(
    private _http:HttpClient
  ) { 
    this._delayEmit();
  }

  private _delayEmit()
  {
    setInterval(() => {
      this.emiterServiceEvent.emit(Math.ceil(Math.random() * 10))
    }, 4000)
  }

  login(loginData)
  {
    return this._http.post('url', loginData).pipe(
      map((data) => {
        this.emiterServiceEvent.emit(data);
        this.userLoggedIn.next(data);
        return data;
      })
    )
  }

  getUsers():Observable<any>
  {

    let users = Observable.create(observer => {
       

      setTimeout(() => {
        observer.next([{
          id: 1,
          fullname: 'ASd'
        },
        {
          id: 2,
          fullname: 'asdasd'
        }
      ]);
        observer.complete();
      }, 5000)
      
    })
    return users;
  }

  getSecondUsers():Observable<any>
  {
    return Observable.create( observer => {
      setTimeout(() => {
        observer.next([
          {
            id: 4,
            fullname: "Second users list"
          },
          {
            id: 5,
            fullname: "Second users list 2"
          }
        ])
      }, 2000)
    })
  }

}
