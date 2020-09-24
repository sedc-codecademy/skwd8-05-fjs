import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() counterValue:number;
  @Input() users:any = [];
  manipulatedUsers:any = [];

  @Output() newUserEvent:EventEmitter<any> = new EventEmitter();

  allUsers:any = [];
  secondUsers:any = [];
  extend:boolean = false;

  constructor(
    private _emitter:EmitterService
  ) { }

  ngOnInit() {
    this.loadSecondUsers();
  }

  setUsersAndManipulate(users)
  {
    //method1(users);
    //method2(users);
    this.manipulatedUsers = users;
  }

  loadSecondUsers()
  {
    this._emitter.getSecondUsers().subscribe((data) => this.secondUsers = data);
  }

  ngDoCheck()
  {
    if(this.users.length && this.secondUsers.length && ! this.extend)
    {
      console.log(this.users, this.secondUsers)
      this.allUsers = this.allUsers.concat(this.users).concat(this.secondUsers);
      this.extend = true;
    }
  }

  addUser(user:NgForm)
  {
    if(user.valid)
    {
      this.newUserEvent.emit(user.value);
    }
    else
    alert('Fill all fields');
  }

}
