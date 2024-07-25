import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[lmpVisibilityControl]',
  standalone: true
})
export class VisibilityControlDirective implements OnChanges {
  @Input() displayCondition: boolean = true;
  @Input() timeUntilExtinction: number = 2000;
  @Input() element: ElementRef | undefined;

  private isCondition: boolean = true;
  private hideTimeout: any;

  @HostListener('mousemove', ['$event'])
  onMouseMove(): void {
    if (this.isCondition) {
      this.setVisible(true);
      clearTimeout(this.hideTimeout);
      this.hideTimeout = setTimeout(() => {
        if (this.isCondition) {
          this.setVisible(false);
        }
      }, this.timeUntilExtinction);
    }
  }

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['displayCondition']) {
      this.isCondition = changes['displayCondition'].currentValue;
      if (this.isCondition) {
        this.setVisible(false);
      } else {
        this.setVisible(true);
      }
    }
  }

  private setVisible(visible: boolean): void {
    if (this.element) {
      if (visible) {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
      } else {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    }
  }

}
