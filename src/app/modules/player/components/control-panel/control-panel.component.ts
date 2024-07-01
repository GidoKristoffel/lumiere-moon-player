import { Component } from '@angular/core';
import {
  IconToggleBtnComponent
} from "../../../../shared/components/buttons/icon-toggle-btn/icon-toggle-btn.component";
import { TimeDisplayComponent } from "../time-display/time-display.component";
import { VideoControlService } from "../../services/video-control/video-control.service";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { VideoPlayingService } from "../../services/video-playing/video-playing.service";

@Component({
  selector: 'lmp-control-panel',
  standalone: true,
  imports: [
    IconToggleBtnComponent,
    TimeDisplayComponent,
    ProgressBarComponent
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {
  public totalDurationInSeconds = this.videoControlService.totalDuration;
  public currentPlaybackTimeInSeconds = this.videoControlService.currentPlaybackTime;

  constructor(
      private videoPlayingService: VideoPlayingService,
      private videoControlService: VideoControlService
  ) {}

  public togglePlayVideo(playing: boolean): void {
    this.videoPlayingService.toggle(playing);
  }
}
