import { Directive, HostListener } from '@angular/core';
import { invoke } from '@tauri-apps/api/tauri';

@Directive({
  selector: '[lmpDragRegion]',
  standalone: true
})
export class DragRegionDirective {
  @HostListener('mousedown', ['$event'])
  async onMouseDown(event: MouseEvent) {
    if (event.button === 0) {
      const isFullscreen = await invoke<boolean>('is_fullscreen');
      if (isFullscreen) {
        await invoke('toggle_fullscreen');
      }
    }
  }
}
