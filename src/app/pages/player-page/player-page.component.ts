import { Component, OnInit } from '@angular/core';
import { ControlPanelComponent } from "../../modules/player/components/control-panel/control-panel.component";
import { TitleBarComponent } from "../../modules/player/components/title-bar/title-bar.component";
import { VideoService } from "../../core/services/video/video.service";
import { NgIf } from "@angular/common";

@Component({
  selector: 'lmp-player-page',
  standalone: true,
  imports: [
    ControlPanelComponent,
    TitleBarComponent,
    NgIf
  ],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.css'
})
export class PlayerPageComponent implements OnInit {
  public videoURL: string = '';

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoURL = this.videoService.get() || '';
  }
}
