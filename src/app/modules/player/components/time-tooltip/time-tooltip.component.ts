import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgStyle } from "@angular/common";

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

  hoverTime = '00:00';
  tooltipStyle = {};
}
