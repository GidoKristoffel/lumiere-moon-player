import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { WatchVideoElementReady } from "../../classes/watch-video-element-ready/watch-video-element-ready";
import { VideoService } from "../../../../core/services/video/video.service";

@Injectable({
  providedIn: 'root'
})
export class VideoProgressBarHoverService extends WatchVideoElementReady {
  private hover: WritableSignal<number> = signal<number>(0);

  constructor(protected override videoService: VideoService) {
    super(videoService);
  }

  public watch(): Signal<number> {
    return this.hover.asReadonly();
  }

  public update(eventOffsetX: number, progressBarWrapper: HTMLDivElement): void {
    if (this.videoElement) {
      const containerWidth = progressBarWrapper.clientWidth;
      this.hover.set((eventOffsetX / containerWidth) * 100);
    }
  }
}