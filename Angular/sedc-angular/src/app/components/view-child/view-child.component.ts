import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @Output() someChange:EventEmitter<any> = new EventEmitter();

  counter:number = 0;

  constructor() { }

  ngOnInit() {
    this._initTimer();
  }

  setValue(value:number)
  {
    this.counter = value;
    this.someChange.emit(this.counter)
  }


  private _initTimer()
  {
    setInterval(() => {this.setValue(++this.counter)}, 5000)
  }
}