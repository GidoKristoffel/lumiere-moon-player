import { Injectable, OnDestroy, Renderer2, RendererFactory2 } from '@angular/core';
import { WindowService } from "../window/window.service";

@Injectable({
  providedIn: 'root'
})
export class HotkeysService implements OnDestroy {
  private renderer: Renderer2;

  private escapeListener!: () => void;

  constructor(
      private rendererFactory: RendererFactory2,
      private windowService: WindowService
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public init(): void {
    this.escapeListener = this.renderer.listen('document', 'keydown.escape', () => {
      this.windowService.setFullscreen(false);
    });
  }

  private removeListeners(): void {
    if (this.escapeListener) {
      this.escapeListener();
    }
  }

  ngOnDestroy() {
    this.removeListeners();
  }
}
