import { Component, Input } from '@angular/core';
import { VideoControlService } from "../../services/video-control.service";

@Component({
  selector: 'lmp-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  public progress = this.videoControlService.progress.asReadonly();

  constructor(private videoControlService: VideoControlService) {}

  public seekVideo(event: MouseEvent): void {
    this.videoControlService.videoControlService(event);
  }
}
