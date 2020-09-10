import { Directive, HostListener, ElementRef, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { iCustomEvents, eCustomEvents } from '../interfaces/custom-events';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective implements DoCheck{

  @Input() toDisplay:boolean;
  @Output() outputValue:EventEmitter<iCustomEvents> = new EventEmitter();

  constructor(
    private el:ElementRef
  ) {
    this.showHideUl();
  }

  ngDoCheck()
  {
    this.showHideUl();
  }


  // @HostListener('click', ['$event.target']) anchorClick(e)
  // {
  //   let ul = document.createElement('ul');
  //   let li = document.createElement('li');
  //   li.innerHTML = 'New list item';
  //   li.setAttribute('class', 'link inactive');
  //   li.addEventListener('click', (e) => {console.log('List item was clicked')});
  //   li.setAttribute('appHighligh', '');
  //   ul.appendChild(li);
  //   this.el.nativeElement.appendChild(ul);
  // }

  showHideUl()
  {
    this.el.nativeElement.style.display = (! this.toDisplay) ? 'none' : 'block';
  }

  @HostListener('mouseenter') logEnter()
  {
    //this.outputValue.emit({type:eCustomEvents.MOUSEENTER, value: true});
  }

  @HostListener('mouseleave') logLeave()
  {
    //this.outputValue.emit({type:eCustomEvents.MOUSELEAVE, value: true});
  }
}