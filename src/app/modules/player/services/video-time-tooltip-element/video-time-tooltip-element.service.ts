import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTimeTooltipElementService {
  private element: ElementRef<HTMLDivElement> | undefined;

  constructor() { }

  public init(value: ElementRef<HTMLDivElement>): void {
    this.element = value;
  }

  public getWidth(): number {
    return this.element ? this.element.nativeElement.offsetWidth : 0;
  }
}
