import { Injectable, OnDestroy, Renderer2, RendererFactory2 } from '@angular/core';
import { WindowService } from "../window/window.service";
import { VideoPlayingService } from "../../../modules/player/services/video-playing/video-playing.service";
import { FullscreenVideoStatusService } from "../fullscreen-video-status/fullscreen-video-status.service";

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
      private fullscreenVideoStatusService: FullscreenVideoStatusService,
      private videoPlayingService: VideoPlayingService
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public init(): void {
    this.escapeListener = this.renderer.listen('document', 'keydown.escape', () => {
      this.windowService.setMaximize(false);
      this.fullscreenVideoStatusService.set(false);
    });
    this.spaceListener = this.renderer.listen('document', 'keydown.Space', () => {
      this.videoPlayingService.toggle();
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
