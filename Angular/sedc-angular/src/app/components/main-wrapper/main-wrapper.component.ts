import { Component, OnInit, OnDestroy, ViewEncapsulation, EventEmitter } from '@angular/core';

declare const window:any;

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    //window.globalEmitter = new EventEmitter();
  }

  ngOnDestroy()
  {
    // window.globalEmitter.subscribe((data) => {
      
    // })
  }

}
