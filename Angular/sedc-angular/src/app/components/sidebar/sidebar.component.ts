import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() hideSidebar:EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeSidebar()
  {
    this.hideSidebar.emit(true);
  }

}
