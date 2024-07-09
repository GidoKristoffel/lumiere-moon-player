import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { WatchVideoElementReady } from "../../classes/watch-video-element-ready/watch-video-element-ready";
import { VideoService } from "../../../../core/services/video/video.service";
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class VideoTimeTooltipService extends WatchVideoElementReady {
  private time: WritableSignal<string> = signal<string>('00:00');
  private display: WritableSignal<string> = signal<string>('block');
  private leftPosition: WritableSignal<number> = signal<number>(0);

  constructor(
      protected override videoService: VideoService,
      private datePipe: DatePipe
  ) {
    super(videoService);
  }

  public watchTime(): Signal<string> {
    return this.time.asReadonly();
  }

  public updatePosition(event: MouseEvent): void {
    if (this.videoElement) {
      const progressBarWrapper = event.currentTarget as HTMLElement;
      const clickPosition = event.offsetX;
      const containerWidth = progressBarWrapper.clientWidth;
      const clickPositionPercent = (clickPosition / containerWidth);
      const currentTimeInMilliseconds = clickPositionPercent * this.videoElement.duration * 1000;
      const transformedTime = this.datePipe.transform(currentTimeInMilliseconds, 'mm:ss');
      this.time.set(transformedTime || '00:00');
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
