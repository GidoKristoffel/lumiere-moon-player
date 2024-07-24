import { Directive, HostListener } from '@angular/core';
import { WindowService } from "../../../core/services/window/window.service";

@Directive({
  selector: '[lmpWindowDragRegion]',
  standalone: true
})
export class WindowDragRegionDirective {
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.target === event.currentTarget && event.button === 0 && (event.detail === 1 || event.detail === 2)) {
      event.preventDefault();

      if (event.detail === 2) {
        this.windowService.toggleMaximize();
      } else {
        this.windowService.startDragging();
      }
    }
  }

  constructor(private windowService: WindowService) {}
}
