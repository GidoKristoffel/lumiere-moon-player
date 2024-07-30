import { AfterViewInit, Component, ElementRef, OnInit, Signal, ViewChild } from '@angular/core';
import { ControlPanelComponent } from "../../modules/player/components/control-panel/control-panel.component";
import { TitleBarComponent } from "../../shared/components/title-bar/title-bar.component";
import { NgIf } from "@angular/common";
import { VideoService } from "../../core/services/video/video.service";
import { VideoProgressBarService } from "../../modules/player/services/video-progress-bar/video-progress-bar.service";
import { VideoPlayingService } from "../../modules/player/services/video-playing/video-playing.service";
import {
    FullscreenVideoStatusService
} from "../../core/services/fullscreen-video-status/fullscreen-video-status.service";
import { VisibilityControlDirective } from "../../shared/directives/visibility-control/visibility-control.directive";
import { animate, state, style, transition, trigger } from "@angular/animations";


@Component({
  selector: 'lmp-player-page',
  standalone: true,
  imports: [
    ControlPanelComponent,
    TitleBarComponent,
    NgIf,
    VisibilityControlDirective
  ],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.css',
  animations: [
    // trigger('panelAnimation', [
    //   state('visible', style({ opacity: 1, display: "block" })),
    //   state('hidden', style({ opacity: 0, display: "none" })),
    //   transition('visible => hidden', [animate('0.5s')]),
    //   transition('hidden => visible', [animate('0.1s')]),
    // ])
  ]
})
export class PlayerPageComponent implements OnInit, AfterViewInit  {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('controlPanelComponent') controlPanel!: ElementRef<HTMLVideoElement>;
  public videoURL: string = '';
  public isFullScreen: Signal<boolean> = this.fullscreenVideoStatusService.watch();
  public isMoving = false;
  private movingTimeout: any;
  public isMouseOverChild = false;

  constructor(
      private videoService: VideoService,
      private videoProgressBarService: VideoProgressBarService,
      private videoPlayingService: VideoPlayingService,
      private fullscreenVideoStatusService: FullscreenVideoStatusService
  ) {}

  ngOnInit(): void {
    this.videoURL = this.videoService.getUrl() || '';
  }

  ngAfterViewInit() {
    this.videoService.setElement(this.videoPlayer.nativeElement);
  }

  public onMouseMove() {
    this.isMoving = true;
    clearTimeout(this.movingTimeout);
    this.movingTimeout = setTimeout(() => {
      this.isMoving = false;
    }, 2000);
  }

  public onMouseEnterChild() {
    this.isMouseOverChild = true;
  }

  public onMouseLeaveChild() {
    this.isMouseOverChild = false;
  }

  public updateProgressBar(): void {
    this.videoProgressBarService.update();
  }

  public toggleVideoPlaying(): void {
    this.videoPlayingService.toggle();
  }

  public toggleFullscreen(): void {
    this.fullscreenVideoStatusService.toggle();
  }
}
