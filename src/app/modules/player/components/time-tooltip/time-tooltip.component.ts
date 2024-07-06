import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgStyle, Time } from "@angular/common";
import { VideoTimeTooltipService } from "../../services/video-time-tooltip/video-time-tooltip.service";

@Component({
  selector: 'lmp-time-tooltip',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './time-tooltip.component.html',
  styleUrl: './time-tooltip.component.scss'
})
export class TimeTooltipComponent {
  @ViewChild('timeTooltip') timeTooltip!: ElementRef<HTMLDivElement>;

  constructor(private videoTimeTooltipService: VideoTimeTooltipService) {
  }

  hoverTime = this.videoTimeTooltipService.watchTime();
  tooltipStyle = {};
}
