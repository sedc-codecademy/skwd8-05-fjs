import { Component, DoCheck, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { iUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  title = 'sedc-angular is not still an application but ';
  userToChange:iUser;

  ngOnInit(){}

  doSomethingWithHeaderEvent(value:any)
  {
    console.log(value)
  }

  passUserToForm(user:iUser)
  {
    this.userToChange = user; console.log(user)
  }
}
