import { Injectable } from '@angular/core';
import { VideoService } from "../../../../core/services/video/video.service";
import { WatchVideoElementReady } from "../../classes/watch-video-element-ready/watch-video-element-ready";
import { VideoPlayingStatusService } from "../../../../core/services/video-playing-status/video-playing-status.service";

@Injectable({
  providedIn: 'root'
})
export class VideoPlayingService extends WatchVideoElementReady {
  protected constructor(
      protected override videoService: VideoService,
      private videoPlayingStatusService: VideoPlayingStatusService
  ) {
    super(videoService)
  }

  public toggle(): void {
    if (this.videoElement) {
      if (this.videoElement.paused) {
        this.play();
      } else {
        this.pause();
      }
    }
  }

  private play(): void {
    if (this.videoElement && this.videoElement.paused) {
      this.videoElement.play().then(() => {
        this.videoPlayingStatusService.set(!(this.videoElement as HTMLVideoElement).paused);
      });
    }
  }

  private pause(): void {
    if (this.videoElement && !this.videoElement.paused) {
      this.videoElement.pause();
      this.videoPlayingStatusService.set(!this.videoElement.paused);
    }
  }
}
