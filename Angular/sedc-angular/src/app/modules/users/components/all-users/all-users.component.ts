import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/shared/services/users.service';
import { iUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:Array<iUser> = [];
  constructor(
    private _usersSevice:UsersService
  ) { }

  ngOnInit() {

    this.users = this._usersSevice.getUsers();
  }

}
