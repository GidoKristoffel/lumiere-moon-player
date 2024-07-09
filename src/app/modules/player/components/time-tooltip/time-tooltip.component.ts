import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatePipe, NgStyle } from "@angular/common";
import { VideoTimeTooltipService } from "../../services/video-time-tooltip/video-time-tooltip.service";

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
export class TimeTooltipComponent {
  @ViewChild('timeTooltip') timeTooltip!: ElementRef<HTMLDivElement>;

  constructor(private videoTimeTooltipService: VideoTimeTooltipService) {
  }

  time = this.videoTimeTooltipService.watchTime();
  display = this.videoTimeTooltipService.watchDisplay();
  leftPosition = this.videoTimeTooltipService.watchLeftPosition();
}
