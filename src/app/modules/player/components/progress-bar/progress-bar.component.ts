import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { VideoBufferingViewService } from "../../services/video-buffering-view/video-buffering-view.service";
import { VideoProgressViewService } from "../../services/video-progress-view/video-progress-view.service";
import { VideoProgressDragService } from "../../services/video-progress-drag/video-progress-drag.service";
import { VideoProgressBarHoverService } from "../../services/video-progress-bar-hover/video-progress-bar-hover.service";
import { VideoTimeTooltipService } from "../../services/video-time-tooltip/video-time-tooltip.service";
import {
  VideoTimeTooltipDisplayService
} from "../../services/video-time-tooltip-display/video-time-tooltip-display.service";

@Component({
  selector: 'lmp-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent implements AfterViewInit {
  @ViewChild('progressBarWrapper') progressBarWrapper!: ElementRef<HTMLDivElement>;

  public buffered = this.videoBufferingViewService.watch();
  public progress = this.videoProgressViewService.watch();
  public hover = this.videoProgressBarHoverService.watch();

  constructor(
      private videoBufferingViewService: VideoBufferingViewService,
      private videoProgressViewService: VideoProgressViewService,
      private videoProgressDragService: VideoProgressDragService,
      private videoProgressBarHoverService: VideoProgressBarHoverService,
      private videoTimeTooltipService: VideoTimeTooltipService,
      private videoTimeTooltipDisplayService: VideoTimeTooltipDisplayService
  ) {}

  ngAfterViewInit() {
    this.videoProgressDragService.init(this.progressBarWrapper);
  }

  public startMoving(event: MouseEvent): void {
    this.videoProgressDragService.start(event);
  }

  public stopMoving(): void {
    this.videoProgressDragService.stop();
  }

  public moving(event: MouseEvent): void {
    this.videoProgressBarHoverService.update(event.offsetX, this.progressBarWrapper.nativeElement);
    this.videoTimeTooltipService.update(event.clientX, event.offsetX, this.progressBarWrapper.nativeElement);
  }

  public notMoving(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const parentRect = this.progressBarWrapper.nativeElement.getBoundingClientRect();
    const offsetX = event.clientX - parentRect.left;

    this.videoProgressBarHoverService.update(event.offsetX, this.progressBarWrapper.nativeElement);
    this.videoTimeTooltipService.update(event.clientX, offsetX, this.progressBarWrapper.nativeElement);
  }

  public onMouseEnter(): void {
    this.videoTimeTooltipDisplayService.set(true);
  }

  public onMouseLeave(): void {
    this.videoTimeTooltipDisplayService.set(false);
  }
}
