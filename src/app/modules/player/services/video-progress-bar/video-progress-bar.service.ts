import { Injectable } from '@angular/core';
import { VideoBufferingViewService } from "../video-buffering-view/video-buffering-view.service";
import { VideoProgressViewService } from "../video-progress-view/video-progress-view.service";
import { VideoProgressDragStatusService } from "../video-progress-drag-status/video-progress-drag-status.service";

@Injectable({
  providedIn: 'root',
})
export class VideoProgressBarService {
  constructor(
      private videoProgressDragStatusService: VideoProgressDragStatusService,
      private videoBufferingViewService: VideoBufferingViewService,
      private videoProgressViewService: VideoProgressViewService,
  ) {}

  public update(): void {
    if (!this.videoProgressDragStatusService.get()) {
      this.videoProgressViewService.update();
      this.videoBufferingViewService.update();
    }
  }
}
