import { Component, DoCheck, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy  {
  title = 'sedc-angular is not still an application but ';

  heading:string = 'This is the header of the application';
  body:string = 'This is application body';
  footer:string = 'This is application footer';
  c = 0;
  salary = 0;
  tax = 18;
  taxAmount:number;

  calculateTax()
  {
    this.taxAmount =  (this.salary * this.tax) / 100;
  }

  ngOnInit()
  {
    // setInterval(() => {
    //   if( this.c < 100)
    //   this.c++;
    // }, 1000);
  }

  ngDoCheck()
  {
    //debugger;
  }

  ngAfterViewInit()
  {
    //debugger;
    
  }

  ngAfterViewChecked()
  {
    //debugger;
    if(this.c > 20)
    console.log('Half way done, call API');
  }

  ngAfterContentInit()
  {
    //debugger;
  }

  ngAfterContentChecked()
  {
    //debugger;
  }

  ngOnDestroy()
  {
    //debugger;
  }

  increaseC()
  {
    this.c++;
  }

  decreaseC()
  {
    this.c--;
  }

  updateC(value:any)
  {
    this.c = value;
  }
}
