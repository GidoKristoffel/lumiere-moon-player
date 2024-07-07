import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { WatchVideoElementReady } from "../../classes/watch-video-element-ready/watch-video-element-ready";
import { VideoService } from "../../../../core/services/video/video.service";
import { formatDate } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class VideoTimeTooltipService extends WatchVideoElementReady {
  private time: WritableSignal<string> = signal<string>('00:00');
  private display: WritableSignal<string> = signal<string>('block');
  private leftPosition: WritableSignal<number> = signal<number>(0);

  constructor(
      protected override videoService: VideoService
  ) {
    super(videoService);
  }

  public watchTime(): Signal<string> {
    return this.time.asReadonly();
  }

  public updatePosition(event: MouseEvent): void {
    if (this.videoElement) {
      console.log('++++');
      const progressBarWrapper = event.currentTarget as HTMLElement;
      const clickPosition = event.offsetX;
      const containerWidth = progressBarWrapper.clientWidth;
      const clickPositionPercent = (clickPosition / containerWidth);
      const time = String(((clickPositionPercent * this.videoElement.duration) / this.videoElement.duration) * 100);
      this.time.set(formatDate(time, 'mm:ss', ''));
    }
  }

  public setLeftPosition(value: number): void {
    this.leftPosition.set(value);
  }

  public watchDisplay(): Signal<string> {
    return this.display.asReadonly();
  }

  public watchLeftPosition(): Signal<number> {
    return this.leftPosition.asReadonly();
  }
}
