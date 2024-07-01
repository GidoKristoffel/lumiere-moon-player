import { Component } from '@angular/core';
import {
  IconToggleBtnComponent
} from "../../../../shared/components/buttons/icon-toggle-btn/icon-toggle-btn.component";
import { TimeDisplayComponent } from "../time-display/time-display.component";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { VideoPlayingService } from "../../services/video-playing/video-playing.service";
import { VideoTimeService } from "../../services/video-time/video-time.service";

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
  public totalDurationInSeconds = this.videoTimeService.totalDuration;
  public currentPlaybackTimeInSeconds = this.videoTimeService.currentPlaybackTime;

  constructor(
      private videoPlayingService: VideoPlayingService,
      private videoTimeService: VideoTimeService,
  ) {}

  public togglePlayVideo(playing: boolean): void {
      this.videoPlayingService.toggle(playing);
  }
}
