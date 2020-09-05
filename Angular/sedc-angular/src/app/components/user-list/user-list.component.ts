import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { iUser } from 'src/app/interfaces/user.interface';
import { FilterUsers } from 'src/app/classes/filterUsers.class';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends FilterUsers implements OnInit {

  @Output() changeUser:EventEmitter<iUser> = new EventEmitter();
  

  selectedUser:any = "";

  constructor(
    private usersService:UsersService
  ) {
    super();
  }

  ngOnInit() {
    this.usersService.usersList.subscribe((data) => {
      this.users = data;
    });
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
