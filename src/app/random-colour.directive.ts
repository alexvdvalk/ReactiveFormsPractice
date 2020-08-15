import {
  Directive,
  HostBinding,
  OnInit,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appRandomColour]',
})
export class RandomColourDirective implements OnInit, OnDestroy {
  @HostBinding('style.background-color') bgColour = 'transparent';
  @Input() id: number;
  constructor() {}

  @HostListener('mouseover') onHover(): void {
    this.setColour();
  }
  ngOnDestroy(): void {
    console.log('Destorying id: ' + this.id);
  }

  ngOnInit(): void {
    this.bgColour = this.getColour();
    console.log('Directive registerd for id: ' + this.id);
  }

  setColour(): void {
    this.bgColour = this.getColour();
  }

  getColour(): string {
    // tslint:disable-next-line: no-bitwise
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}
