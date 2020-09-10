import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighligh]'
})
export class HighlighDirective implements OnInit{

  constructor() {
    //console.log('Directive init ')
  }

  ngOnInit()
  {
    //console.log('Highlight Directive was initialized')
  }

  // @HostListener('mouseover', ['$event.target']) highlightElement(e)
  // {
  //   console.log('mouseover', e)
  //   e.style.backgroundColor = 'red';
  // }

  // @HostListener('mouseleave', ['$event.target']) dehighlightElement(e)
  // {
  //   console.log('mouseleave', e)
  //   e.style.backgroundColor = 'unset';
  // }

}
