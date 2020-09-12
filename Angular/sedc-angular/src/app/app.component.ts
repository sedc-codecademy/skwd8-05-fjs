import { Component, DoCheck, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { iUser } from './interfaces/user.interface';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  title = 'sedc-angular is not still an application but ';
  userToChange:iUser;
  sidebarVisibile:boolean = false;

  constructor(
    private router:Router
  )
  {}

  ngOnInit(){
    this.router.events.subscribe(evt => {
      console.log(evt)

      if(evt instanceof NavigationStart)
      {
        console.log('Navigation is about to start');
        //debugger;
      }

      if(evt instanceof NavigationError)
      {
        console.log('Error had happend');
      }

      if(evt instanceof NavigationEnd)
      {
        console.log('redirect to new route ended')
      }
    })
  }


  hideSidebar()
  {
    this.sidebarVisibile = ! this.sidebarVisibile;
  }

  doSomethingWithHeaderEvent(value:any)
  {
    console.log(value)
  }

  passUserToForm(user:iUser)
  {
    this.userToChange = user; console.log(user)
  }
}
