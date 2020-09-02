import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavBarItem } from 'src/app/interfaces/nav.interface';
import { iCustomEvents, eCustomEvents } from 'src/app/interfaces/custom-events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title:string = 'This is header title';
  @Output() headerEvent:EventEmitter<any> = new EventEmitter();

  activeLink:string;
  tmpVar:number = 1;
  displayMenu:boolean = false;
  ulState:boolean = false;

  navMenu:Array<NavBarItem> = [
    {title: 'Home', url: '#home'}, 
    {title: 'About', url: '#about'},
    {title: 'Contact', url: '#contact'}, 
    {title: 'Order', url: '#order'}, 
    {title: 'Products', url: '#products'}
  ];

  constructor() { }

  ngOnInit() {
  }

  updateClass(value:string):Array<string>
  {
    if(value === this.navMenu[0].title)
    return ['active'];
    if(value === this.navMenu[1].title)
    return ['inactive']

    return ['undefined']
  }

  changeDisplay()
  {
    this.displayMenu = ! this.displayMenu;
    this.headerEvent.emit({message: `Menu has been ${this.displayMenu? 'displayed': 'hidden'} on screen`});
  }

  logEvent(value:iCustomEvents)
  {
    console.log(value);
    if(value.type === eCustomEvents.MOUSEENTER)
    this.ulState = value.value;
    else if(value.type === eCustomEvents.MOUSELEAVE)
    this.ulState = ! value.value;
    else
    this.ulState = undefined;
  }

}
