import { Component, DoCheck, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  title = 'sedc-angular is not still an application but ';

  ngOnInit(){}

  doSomethingWithHeaderEvent(value:any)
  {
    console.log(value)
  }
}
