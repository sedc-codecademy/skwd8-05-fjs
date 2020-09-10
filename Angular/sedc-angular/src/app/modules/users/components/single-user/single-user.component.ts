import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/modules/shared/services/users.service';
import { iUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  userId:number;
  user:iUser;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _usersService:UsersService
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe((params:any) => {
      console.log(params);
      this.userId = params.id;

      this.user = this._usersService.getUsers()[this.userId];

    })
  }

}
