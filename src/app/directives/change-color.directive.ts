import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @Input() color!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = '';
  }

  constructor(
    private element: ElementRef
  ) { }

}
