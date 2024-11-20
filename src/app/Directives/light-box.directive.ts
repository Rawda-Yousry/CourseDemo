import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox')
  highlightColor: string = 'blue';
  constructor(private elemRef: ElementRef) {}
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border = `2px solid ${this.highlightColor}`;
  }
  @HostListener('mouseover')
  onMouseOver() {
    this.elemRef.nativeElement.style.border = `3px solid ${this.highlightColor}`;
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.elemRef.nativeElement.style.border = '2px solid black';
  }
}
