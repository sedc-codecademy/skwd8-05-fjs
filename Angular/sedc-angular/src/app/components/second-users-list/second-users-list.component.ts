import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { iUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-second-users-list',
  templateUrl: './second-users-list.component.html',
  styleUrls: ['./second-users-list.component.css']
})
export class SecondUsersListComponent implements OnInit {

  usersList:Array<iUser> = [];

  constructor(
    private usersService:UsersService
  ) { }

  ngOnInit() {

    this.usersService.usersList.subscribe((data) => {
      this.usersList = data;
    })
  }

}
