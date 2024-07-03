import { ElementRef, Injectable, OnDestroy, Renderer2, RendererFactory2 } from '@angular/core';
import { WatchVideoElementReady } from "../../classes/watch-video-element-ready/watch-video-element-ready";
import { VideoService } from "../../../../core/services/video/video.service";
import { VideoProgressViewService } from "../video-progress-view/video-progress-view.service";
import { VideoProgressDragStatusService } from "../video-progress-drag-status/video-progress-drag-status.service";

@Injectable({
  providedIn: 'root'
})
export class VideoProgressDragService extends WatchVideoElementReady implements OnDestroy {
  private renderer: Renderer2;

  private mouseMoveListener!: () => void;
  private mouseUpListener!: () => void;

  protected constructor(
      private rendererFactory: RendererFactory2,
      private videoProgressViewService: VideoProgressViewService,
      private videoProgressDragStatusService: VideoProgressDragStatusService,
      protected override videoService: VideoService,
  ) {
    super(videoService);
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public init(progressBarWrapper: ElementRef<HTMLDivElement>): void {
    this.mouseMoveListener = this.renderer.listen('window', 'mousemove', (event) => {
      this.onMouseMove(event, progressBarWrapper.nativeElement);
    });
    this.mouseUpListener = this.renderer.listen('window', 'mouseup', () => {
      this.videoProgressDragStatusService.deny();
    });
  }

  public start(event: MouseEvent): void {
    this.videoProgressDragStatusService.allow();

    if (this.videoElement) {
      const progressBarWrapper = event.currentTarget as HTMLElement;
      const clickPosition = event.offsetX;
      const containerWidth = progressBarWrapper.clientWidth;
      const clickPositionPercent = (clickPosition / containerWidth);
      this.videoElement.currentTime = clickPositionPercent * this.videoElement.duration;
      this.videoProgressViewService.update();
    }
  }

  public stop(): void {
    this.videoProgressDragStatusService.deny();
  }

  private onMouseMove(event: MouseEvent, progressBarWrapper: HTMLDivElement): void {
    if (this.videoProgressDragStatusService.get()) {
      const rect = progressBarWrapper.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const containerWidth = progressBarWrapper.clientWidth;
      const clickPositionPercent = (offsetX / containerWidth);
      if (this.videoElement) {
        this.videoElement.currentTime = clickPositionPercent * this.videoElement.duration;
        this.videoProgressViewService.update();
      }
    }
  }

  private removeMouseListeners(): void {
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
    if (this.mouseUpListener) {
      this.mouseUpListener();
    }
  }

  ngOnDestroy() {
    this.removeMouseListeners();
  }
}
