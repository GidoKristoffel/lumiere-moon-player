import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style } from "@angular/animations";

@Directive({
  selector: '[lmpVisibilityControl]',
  standalone: true,
})
export class VisibilityControlDirective implements OnChanges, AfterViewInit {
  @Input() displayCondition: boolean = true;
  @Input() timeUntilExtinction: number = 2000;
  @Input() element: ElementRef | undefined;

  private isCondition: boolean = true;
  private hideTimeout: any;
  private player: AnimationPlayer | undefined;
  private isVisible: boolean = false;
  public isMouseOverChild = false;

  private stateVisible: AnimationMetadata[] = [
    style({ opacity: 0 }),
    animate('400ms', style({ opacity: 1 })),
  ];

  private stateHidden: AnimationMetadata[] = [
    style({ opacity: 1 }),
    animate('400ms', style({ opacity: 0 })),
  ];

  constructor(
      private builder: AnimationBuilder,
      private renderer: Renderer2
  ) {}

  @HostListener('mousemove')
  onMouseMove(): void {
    if (this.isCondition) {
      if (!this.isVisible) {
        this.setVisible(true);
      }
      clearTimeout(this.hideTimeout);
      if (!this.isMouseOverChild) {
        this.hideTimeout = setTimeout(() => {
          if (this.isCondition && this.isVisible) {
            this.setVisible(false);
          }
        }, this.timeUntilExtinction);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['displayCondition']) {
      this.isCondition = changes['displayCondition'].currentValue;
      this.setVisible(this.isCondition);
    }
    if (changes['element'] && changes['element'].currentValue) {
      this.addMouseListeners(changes['element'].currentValue.nativeElement);
    }
  }

  ngAfterViewInit(): void {
    if (this.element) {
      this.addMouseListeners(this.element.nativeElement);
    }
  }

  private addMouseListeners(element: HTMLElement): void {
    this.renderer.listen(element, 'mouseenter', () => this.onMouseEnterChild());
    this.renderer.listen(element, 'mouseleave', () => this.onMouseLeaveChild());
  }

  private setVisible(visible: boolean): void {
    this.isVisible = visible;
    if (this.element) {
      if (this.player) {
        this.player.destroy();
      }

      const factory = this.builder.build(visible ? this.stateVisible : this.stateHidden);
      this.player = factory.create(this.element.nativeElement);

      this.player.play();
    }
  }

  private onMouseEnterChild(): void {
    this.isMouseOverChild = true;
    clearTimeout(this.hideTimeout);
  }

  private onMouseLeaveChild(): void {
    this.isMouseOverChild = false;
    if (this.isCondition) {
      this.hideTimeout = setTimeout(() => {
        if (!this.isMouseOverChild) {
          this.setVisible(false);
        }
      }, this.timeUntilExtinction);
    }
  }
}
