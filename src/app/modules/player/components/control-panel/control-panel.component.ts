import { Component, Signal } from '@angular/core';
import {
  IconToggleBtnComponent
} from "../../../../shared/components/buttons/icon-toggle-btn/icon-toggle-btn.component";
import { TimeDisplayComponent } from "../time-display/time-display.component";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { VideoPlayingService } from "../../services/video-playing/video-playing.service";
import { VideoTimeService } from "../../services/video-time/video-time.service";
import { TimeTooltipComponent } from "../time-tooltip/time-tooltip.component";
import { VideoPlayingStatusService } from "../../../../core/services/video-playing-status/video-playing-status.service";

@Component({
  selector: 'lmp-control-panel',
  standalone: true,
  imports: [
    IconToggleBtnComponent,
    TimeDisplayComponent,
    ProgressBarComponent,
    TimeTooltipComponent
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {
  public totalDurationInSeconds = this.videoTimeService.totalDuration;
  public currentPlaybackTimeInSeconds = this.videoTimeService.currentPlaybackTime;
  public playingStatus: Signal<boolean> = this.videoPlayingStatusService.watch();

  constructor(
      private videoPlayingService: VideoPlayingService,
      private videoTimeService: VideoTimeService,
      private videoPlayingStatusService: VideoPlayingStatusService
  ) {}

  public togglePlayVideo(): void {
      this.videoPlayingService.toggle();
  }
}
