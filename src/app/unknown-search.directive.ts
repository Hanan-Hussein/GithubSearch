import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnknownSearch]'
})
export class UnknownSearchDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color = "black"
    el.nativeElement.style.padding = "4vh"
    el.nativeElement.style.textDecoration = "underline"
    el.nativeElement.style.fontSize = "xxlarge"


  }

}
