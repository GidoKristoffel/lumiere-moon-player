import { Component, OnChanges, OnInit } from '@angular/core';
import {
  IconToggleBtnComponent
} from "../../../../shared/components/buttons/icon-toggle-btn/icon-toggle-btn.component";
import { TimeDisplayComponent } from "../time-display/time-display.component";
import { VideoControlService } from "../../services/video-control.service";

@Component({
  selector: 'lmp-control-panel',
  standalone: true,
  imports: [
    IconToggleBtnComponent,
    TimeDisplayComponent
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {
  public totalDurationInSeconds = this.videoControlService.totalDuration;
  public currentPlaybackTimeInSeconds = this.videoControlService.currentPlaybackTime;

  constructor(private videoControlService: VideoControlService) {}

  public togglePlayVideo(playing: boolean): void {
    this.videoControlService.togglePlayVideo(playing);
  }
}
