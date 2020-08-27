import { Component, OnInit } from '@angular/core';
import { NavBarItem } from 'src/app/interfaces/nav.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeLink:string;
  
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

}
