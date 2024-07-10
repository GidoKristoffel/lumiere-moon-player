import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DatePipe, NgStyle } from "@angular/common";
import {
  VideoTimeTooltipDisplayService
} from "../../services/video-time-tooltip-display/video-time-tooltip-display.service";
import { VideoTimeTooltipViewService } from "../../services/video-time-tooltip-view/video-time-tooltip-view.service";
import {
  VideoTimeTooltipPositionService
} from "../../services/video-time-tooltip-position/video-time-tooltip-position.service";
import {
  VideoTimeTooltipElementService
} from "../../services/video-time-tooltip-element/video-time-tooltip-element.service";

@Component({
  selector: 'lmp-time-tooltip',
  standalone: true,
  imports: [
    NgStyle,
    DatePipe
  ],
  templateUrl: './time-tooltip.component.html',
  styleUrl: './time-tooltip.component.scss'
})
export class TimeTooltipComponent implements AfterViewInit {
  @ViewChild('element') element!: ElementRef<HTMLDivElement>;

  constructor(
      private videoTimeTooltipDisplayService: VideoTimeTooltipDisplayService,
      private videoTimeTooltipViewService: VideoTimeTooltipViewService,
      private videoTimeTooltipPositionService: VideoTimeTooltipPositionService,
      private videoTimeTooltipElementService: VideoTimeTooltipElementService
  ) {}

  ngAfterViewInit(): void {
    this.videoTimeTooltipElementService.init(this.element);
  }

  public time = this.videoTimeTooltipViewService.watch();
  public display = this.videoTimeTooltipDisplayService.watch();
  public position = this.videoTimeTooltipPositionService.watch();
}
