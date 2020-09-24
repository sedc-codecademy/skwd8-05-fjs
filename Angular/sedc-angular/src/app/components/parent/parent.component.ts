import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  counter = 0;

  users:Array<any> = [];
  editUser:any;

  allUsers$:Observable<any> = this.emitter.getUsers();

  constructor(
    private emitter: EmitterService
  ) { }

  ngOnInit() {
    this.emitter.emiterServiceEvent.subscribe((value) => this.counter = value)
    //this.emitter.userLoggedIn.subscribe((value) => this.counter = value)

   // this.emitter.getUsers().subscribe((data) => this.users = data)//Get data once and keep them in component property
    
    // this.allUsers$.subscribe((data) => { //Everytime access for data from service
    //   console.log(data);
    // })
  }

  loadData()
  {
    this.emitter.getUsers().subscribe((data) => this.users = data)//Get data once and keep them in component property

    //Using viewchild 
    //this.childInstance.setUsersAndManipulate(this.users);
  }

  increaseCounter()
  {
    this.counter++;
  }

  addUserFromChild(user:any)
  {
    this.users.push(user);
  }

  prepareUserForEdit(user:any)
  {
    this.editUser = user;
  }

  newUserValues(euser:any)
  {
    this.users.map((user, i) => {
      if(user.id == euser.id)
      this.users[i] = euser;
    });

    this.editUser = undefined;
  }

}
