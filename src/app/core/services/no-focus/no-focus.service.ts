import { Injectable, OnDestroy, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoFocusService  implements OnDestroy {
  private renderer: Renderer2;
  private listener: (() => void) | undefined;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public init() {
    this.listener = this.renderer.listen('document', 'focusin', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON') {
        target.blur();
      }
    });
  }

  ngOnDestroy() {
    if (this.listener) {
      this.listener();
    }
  }
}
