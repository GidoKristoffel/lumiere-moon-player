import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { VideoBufferingViewService } from "../../services/video-buffering-view/video-buffering-view.service";
import { VideoProgressViewService } from "../../services/video-progress-view/video-progress-view.service";
import { VideoProgressDragService } from "../../services/video-progress-drag/video-progress-drag.service";

@Component({
  selector: 'lmp-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent implements AfterViewInit {
  @ViewChild('progressBarWrapper') progressBarWrapper!: ElementRef<HTMLDivElement>;

  public buffered = this.videoBufferingViewService.watch();
  public progress = this.videoProgressViewService.watch();

  constructor(
      private videoBufferingViewService: VideoBufferingViewService,
      private videoProgressViewService: VideoProgressViewService,
      private videoProgressDragService: VideoProgressDragService,
  ) {}

  ngAfterViewInit() {
    this.videoProgressDragService.init(this.progressBarWrapper);
  }

  public startMoving(event: MouseEvent): void {
    this.videoProgressDragService.start(event);
  }

  public stopMoving(): void {
    this.videoProgressDragService.stop();
  }
}
