import { Injectable } from '@angular/core';
import { WatchVideoElementReady } from "../../classes/watch-video-element-ready/watch-video-element-ready";
import { VideoService } from "../../../../core/services/video/video.service";
import { DatePipe } from "@angular/common";
import { VideoTimeTooltipViewService } from "../video-time-tooltip-view/video-time-tooltip-view.service";
import { VideoTimeTooltipPositionService } from "../video-time-tooltip-position/video-time-tooltip-position.service";
import { VideoTimeTooltipElementService } from "../video-time-tooltip-element/video-time-tooltip-element.service";

@Injectable({
  providedIn: 'root',
})
export class VideoTimeTooltipService extends WatchVideoElementReady {
  constructor(
      protected override videoService: VideoService,
      private datePipe: DatePipe,
      private videoTimeTooltipViewService: VideoTimeTooltipViewService,
      private videoTimeTooltipPositionService: VideoTimeTooltipPositionService,
      private videoTimeTooltipElementService: VideoTimeTooltipElementService,
  ) {
    super(videoService);
  }

  public update(eventClientX: number, eventOffsetX: number, progressBarWrapper: HTMLDivElement): void {
    this.updateTime(eventOffsetX, progressBarWrapper);
    this.updatedPosition(eventClientX, progressBarWrapper);
  }

  private updateTime(eventOffsetX: number, progressBarWrapper: HTMLDivElement): void {
    if (this.videoElement) {
      const containerWidth = progressBarWrapper.clientWidth;
      const clickPositionPercent = (eventOffsetX / containerWidth);
      const currentTimeInMilliseconds = clickPositionPercent * this.videoElement.duration * 1000;
      const transformedTime = this.datePipe.transform(currentTimeInMilliseconds, 'mm:ss');
      this.videoTimeTooltipViewService.set(transformedTime || '00:00');
    }
  }

  private updatedPosition(eventClientX: number, progressBarWrapper: HTMLDivElement): void {
    if (this.videoElement) {
      const rect = progressBarWrapper.getBoundingClientRect();
      const mousePosition = eventClientX - rect.left;
      const progressBarWrapperWidth = rect.width;
      const tooltipWidth = this.videoTimeTooltipElementService.getWidth();
      const minPosition = 0;
      const maxPosition = progressBarWrapperWidth - tooltipWidth;
      const tooltipPosition = mousePosition - tooltipWidth/2;
      const position = this.clamp(tooltipPosition, minPosition, maxPosition);
      this.videoTimeTooltipPositionService.set(position);
    }
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
}
