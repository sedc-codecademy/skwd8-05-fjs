import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { iUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Output() changeUser:EventEmitter<iUser> = new EventEmitter();
  users:Array<iUser> = [
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

  selectedUser:any = "";
  searchKeyword:string;
  filterBy:string;

  constructor() { }

  ngOnInit() {
  }

  updateUser(index:number)
  {
    this.changeUser.emit(this.users[index]);
  }

  updateFilter(filterBy:string)
  {
    this.filterBy = filterBy;
  }
}
