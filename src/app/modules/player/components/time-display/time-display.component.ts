import { Component, Input } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'lmp-time-display',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './time-display.component.html',
  styleUrl: './time-display.component.scss'
})
export class TimeDisplayComponent {
  @Input() totalTime: number = 0;
  @Input() currentTime: number = 0;
}
