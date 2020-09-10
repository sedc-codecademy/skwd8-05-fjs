import { Injectable } from '@angular/core';
import { iUser } from 'src/app/interfaces/user.interface';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersList = new BehaviorSubject([]);
  
  constructor() { 
    this.usersList.next(this.getUsers());
    
  }

  getUsers(){
    return [
        {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john.doe@email.com'
        },
        {
          firstname: 'Jane',
          lastname: 'Deo',
          email: 'jane.doe@email.com'
        },
        {
          firstname: 'Abc',
          lastname: 'Dae',
          email: 'john.doe@email.com'
        },
        {
          firstname: 'Cde',
          lastname: 'Dove',
          email: 'jane.doe@email.com'
        },
        {
          firstname: 'FGH',
          lastname: 'Doel',
          email: 'john.doe@email.com'
        },
        {
          firstname: 'IoP',
          lastname: 'Dole',
          email: 'jane.doe@email.com'
        }
      ];
  }

  addUser(user:iUser)
  {
    let uL = this.getUsers();
    uL.push(user);

    this.usersList.next(uL);
  }
}
