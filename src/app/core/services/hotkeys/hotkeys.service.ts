import { Injectable, OnDestroy, Renderer2, RendererFactory2 } from '@angular/core';
import { WindowService } from "../window/window.service";
import { VideoPlayingStatusService } from "../video-playing-status/video-playing-status.service";

@Injectable({
  providedIn: 'root'
})
export class HotkeysService implements OnDestroy {
  private renderer: Renderer2;

  private escapeListener!: () => void;
  private spaceListener!: () => void;

  constructor(
      private rendererFactory: RendererFactory2,
      private windowService: WindowService,
      private videoPlayingStatusService: VideoPlayingStatusService
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public init(): void {
    this.escapeListener = this.renderer.listen('document', 'keydown.escape', () => {
      this.windowService.setFullscreen(false);
    });
    this.spaceListener = this.renderer.listen('document', 'keydown.Space', () => {
      console.log('keydown.Space');
      this.videoPlayingStatusService.toggle();
    });
  }

  private removeListeners(): void {
    if (this.escapeListener) {
      this.escapeListener();
    }
    if (this.spaceListener) {
      this.spaceListener();
    }
  }

  ngOnDestroy() {
    this.removeListeners();
  }
}
