import {
    AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges
} from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style, } from "@angular/animations";

@Directive({
    selector: '[lmpVisibilityControl]', standalone: true,
})
export class VisibilityControlDirective implements OnChanges, AfterViewInit {
    @Input() displayCondition: boolean = true;
    @Input() timeUntilExtinction: number = 2000;
    @Input() element: ElementRef | undefined;
    public isMouseOverChild = false;
    private isCondition: boolean = true;
    private hideTimeout: any;
    private player: AnimationPlayer | undefined;
    private isVisible: boolean = true;

    constructor(private builder: AnimationBuilder, private renderer: Renderer2) {
    }

    @HostListener('mousemove', ['$event']) onMouseMove(): void {
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
            if (!this.isCondition) {
                this.setVisible(true, 0);
            }
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

    private setVisible(visible: boolean, animationTime: number = 400): void {
        this.isVisible = visible;
        if (this.element) {
            if (this.player) {
                this.player.destroy();
            }

            const factory = this.builder.build([style({opacity: Number(!visible)}), animate(animationTime, style({opacity: Number(visible)})),]);
            this.player = factory.create(this.element.nativeElement);

            this.player.play();
        }
    }

    private addMouseListeners(element: HTMLElement): void {
        this.renderer.listen(element, 'mouseenter', () => this.isMouseOverChild = true);
        this.renderer.listen(element, 'mouseleave', () => this.isMouseOverChild = false);
    }
}
