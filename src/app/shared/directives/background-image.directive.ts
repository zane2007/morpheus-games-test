import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]'
})

export class BackgroundImageDirective implements AfterViewInit {
  @Input() appBackgroundImage: string;

  private element: HTMLElement;

  constructor(element: ElementRef, private renderer: Renderer2) {
    this.element = element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.element, 'background-image', `url('${this.appBackgroundImage}')`);
  }
}
