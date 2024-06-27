import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlPanelComponent } from "../../modules/player/components/control-panel/control-panel.component";
import { TitleBarComponent } from "../../shared/components/title-bar/title-bar.component";
import { NgIf } from "@angular/common";
import { VideoService } from "../../core/services/video/video.service";


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
export class PlayerPageComponent implements OnInit, AfterViewInit  {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  public videoURL: string = '';

  constructor(
      private videoService: VideoService,
  ) {}

  ngOnInit(): void {
    this.videoURL = this.videoService.getUrl() || '';
  }

  ngAfterViewInit() {
    this.videoService.setElement(this.videoPlayer.nativeElement);
  }
}
